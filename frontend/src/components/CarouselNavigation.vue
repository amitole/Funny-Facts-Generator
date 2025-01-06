<template>
    <button 
      @click="$emit('prev')" 
      class="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100"
      :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
      :disabled="currentIndex === 0"
    >
      ←
    </button>
    
    <button 
      @click="$emit('next')"
      class="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100"
      :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= totalArticles - 1 }"
      :disabled="currentIndex >= totalArticles - 1"
    >
      →
    </button>
  </template>
  
  <script setup>
  defineProps({
    currentIndex: {
      type: Number,
      required: true
    },
    totalArticles: {
      type: Number,
      required: true
    }
  })
  
  defineEmits(['prev', 'next'])
  </script>