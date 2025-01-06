import { defineStore } from 'pinia';
import axios from 'axios';

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [],
    loading: false,
    error: null,
    selectedArticle: null
  }),
  
  actions: {
    async fetchArticles() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://localhost:3000/api/articles');
        this.articles = response.data.data;
      } catch (error) {
        this.error = 'Failed to fetch articles. Please try again later.';
        console.error('Error fetching articles:', error);
      } finally {
        this.loading = false;
      }
    },
    
    setSelectedArticle(article) {
      this.selectedArticle = article;
    }
  }
});