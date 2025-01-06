<template>
    <div class="min-h-screen bg-gray-100">
      <div class="container mx-auto px-4 py-8">
        <PageHeader 
          :loading="loading" 
          @generate="fetchArticles" 
        />
  
        <ErrorMessage 
          v-if="error" 
          :message="error" 
        />
  
        <ArticlesCarousel 
          v-if="articles.length"
          :articles="articles"
          :currentIndex="currentIndex"
          @prev="prevSlide"
          @next="nextSlide"
          @open-article="openArticle"
        />
  
        <ArticleModal 
          v-if="selectedArticle"
          :article="selectedArticle"
          @close="selectedArticle = null"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useArticlesStore } from '../stores/articles'
  import { storeToRefs } from 'pinia'
  import PageHeader from '../components/PageHeader.vue'
  import ErrorMessage from '../components/ErrorMessage.vue'
  import ArticlesCarousel from '../components/ArticlesCarousel.vue'
  import ArticleModal from '../components/ArticleModal.vue'
  
  const store = useArticlesStore()
  const { articles, loading, error } = storeToRefs(store)
  const currentIndex = ref(0)
  const selectedArticle = ref(null)
  
  const fetchArticles = () => {
    store.fetchArticles()
    currentIndex.value = 0
  }
  
  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }
  
  const nextSlide = () => {
    if (currentIndex.value < articles.value.length - 1) {
      currentIndex.value++
    }
  }
  
  const openArticle = (article) => {
    selectedArticle.value = article
  }
  </script>