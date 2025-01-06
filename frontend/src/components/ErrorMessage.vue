<template>
    <div class="text-red-500 text-center mb-8">
      {{ message }}
    </div>
  </template>
  
  <script setup>
  defineProps({
    message: {
      type: String,
      required: true
    }
  })
  </script>