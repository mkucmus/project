<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Dynamic Route</h1>
    
    <div class="mb-6 p-4 bg-gray-100 rounded">
      <h2 class="text-xl font-semibold mb-2">Path Parameters:</h2>
      <p class="font-mono">{{ route.params.slug }}</p>
    </div>

    <div class="mb-6 p-4 bg-gray-100 rounded">
      <h2 class="text-xl font-semibold mb-2">Query Parameters:</h2>
      <ul class="list-disc ml-4">
        <li v-for="(value, key) in route.query" :key="key">
          {{ key }}: {{ value }}
        </li>
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