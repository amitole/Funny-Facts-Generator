<template>
    <div class="relative">
      <CarouselNavigation 
        :currentIndex="currentIndex"
        :totalArticles="articles.length"
        @prev="$emit('prev')"
        @next="$emit('next')"
      />
  
      <div class="overflow-hidden mx-12">
        <div 
          class="flex transition-transform duration-300 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <ArticleCard
            v-for="article in articles" 
            :key="article.originalLink"
            :article="article"
            @click="$emit('open-article', article)"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import CarouselNavigation from './CarouselNavigation.vue'
  import ArticleCard from './ArticleCard.vue'
  
  defineProps({
    articles: {
      type: Array,
      required: true
    },
    currentIndex: {
      type: Number,
      required: true
    }
  })
  
  defineEmits(['prev', 'next', 'open-article'])
  </script>