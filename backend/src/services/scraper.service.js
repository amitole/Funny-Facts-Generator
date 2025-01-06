const axios = require('axios');
const cheerio = require('cheerio');

const getLatestArticles = async (limit = 10) => {
    try {
        const response = await axios.get('https://www.espn.com', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        
        const $ = cheerio.load(response.data);
        const articles = [];

        // Target ESPN's article containers
        $('.contentItem__content').each((_, element) => {
            const title = $(element).find('.contentItem__title').text().trim();
            const link = $(element).find('a').attr('href');
            const category = $(element).find('.contentItem__sport').text().trim() || 'Sports';

            if (title && link && articles.length < limit) {
                // Ensure link is a full URL
                const fullLink = link.startsWith('http') ? link : `https://www.espn.com${link}`;
                
                articles.push({
                    title,
                    originalLink: fullLink,
                    category: category || 'Sports',
                    publicationDate: new Date().toISOString().split('T')[0],
                    source: 'ESPN'
                });
            }
        });

        // If we don't have enough articles, try another section
        if (articles.length < limit) {
            $('.headlineStack__list li').each((_, element) => {
                const title = $(element).find('a').text().trim();
                const link = $(element).find('a').attr('href');

                if (title && link && articles.length < limit) {
                    const fullLink = link.startsWith('http') ? link : `https://www.espn.com${link}`;

                    articles.push({
                        title,
                        originalLink: fullLink,
                        category: 'Sports',
                        publicationDate: new Date().toISOString().split('T')[0],
                        source: 'ESPN'
                    });
                }
            });
        }

        return articles;
    } catch (error) {
        console.error('Scraping error:', error);
        throw new Error('Failed to fetch articles from ESPN: ' + error.message);
    }
};

module.exports = {
    getLatestArticles
};