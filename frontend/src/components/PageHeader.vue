<template>
    <div class="text-center mb-12" >
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Funny Facts Generator</h1>
      <button 
        @click="$emit('generate')"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
        :class="{ 'opacity-50 cursor-not-allowed': loading }"
        :disabled="loading"
      >
        {{ loading ? 'Loading...' : 'Generate' }}
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    loading: {
      type: Boolean,
      default: false
    }
  })
  
  defineEmits(['generate'])
  </script>