const { getLatestArticles } = require("../services/scraper.service");
const { generateFunnyFact } = require("../services/openai.service");
const { createApiError } = require("../utils/errors");

const getEnhancedArticles = async (req, res, next) => {
  try {
    const articles = await getLatestArticles();

    if (articles.length === 0) {
      console.log("No articles found");
    }

    // Generate funny facts for each article
    const enhancedArticles = await Promise.all(
      articles.map(async (article) => {
        try {
          const funnyFact = await generateFunnyFact(article);
          return {
            ...article,
            funnyFact,
            source: "ESPN",
          };
        } catch (error) {
          // If OpenAI fails, return article without funny fact
          console.error("Failed to generate funny fact:", error.message);
          return {
            ...article,
            funnyFact: "Sorry, humor generator is taking a coffee break! ☕",
            source: "ESPN",
          };
        }
      })
    );

    res.json({
      success: true,
      data: enhancedArticles,
    });
  } catch (error) {
    console.error("Controller error:", error);
    next(createApiError(error.message, 500));
  }
};

module.exports = {
  getEnhancedArticles,
};
