<template>
    <div class="min-w-full px-4">
      <div 
        @click="$emit('click')"
        class="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <div class="flex items-center justify-between mb-4">
          <span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
            {{ article.category }}
          </span>
          <span class="text-gray-500 text-sm">
            {{ formatDate(article.publicationDate) }}
          </span>
        </div>
        
        <h2 class="text-xl font-bold text-gray-800 mb-4">{{ article.title }}</h2>
        
        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
          <p class="text-gray-700 italic">
            "{{ article.funnyFact }}"
          </p>
        </div>
  
        <div class="flex justify-between items-center text-sm text-gray-500">
          <span>{{ article.source }}</span>
          <a 
            :href="article.originalLink" 
            target="_blank"
            class="text-blue-500 hover:text-blue-700"
            @click.stop
          >
            Read original →
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    article: {
      type: Object,
      required: true
    }
  })
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  </script>