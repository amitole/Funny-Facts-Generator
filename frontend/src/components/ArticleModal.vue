<template>
  <Teleport to=".modals">
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="$emit('close')"
    >
      <div
        class="bg-white rounded-xl p-6 max-w-2xl w-full shadow-2xl"
        @click.stop
      >
        <div class="flex justify-between items-start mb-4">
          <span
            class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded"
          >
            {{ article.category }}
          </span>
          <button
            @click="$emit('close')"
            class="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          {{ article.title }}
        </h2>

        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
          <p class="text-gray-700 italic">"{{ article.funnyFact }}"</p>
        </div>

        <div
          class="flex justify-between items-center text-sm text-gray-500 mt-4"
        >
          <span>{{ formatDate(article.publicationDate) }}</span>
          <a
            :href="article.originalLink"
            target="_blank"
            class="text-blue-500 hover:text-blue-700"
          >
            Read full article →
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});

defineEmits(["close"]);

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>
