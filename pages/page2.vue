<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Page 2</h1>
    <div class="mb-4">
      <p>Query Parameters:</p>
      <ul class="list-disc ml-4">
        <li>Category: {{ route.query.category }}</li>
        <li>Sort: {{ route.query.sort }}</li>
      </ul>
    </div>
    <NuxtLink to="/" class="text-blue-500 hover:underline">
      Back to Home
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
</script>