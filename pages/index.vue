<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Home Page</h1>
    <div class="space-y-4">
      <div>
        <NuxtLink 
          to="/page1?name=John&age=25"
          class="text-blue-500 hover:underline"
        >
          Go to Page 1 (with query params)
        </NuxtLink>
      </div>
      <div>
        <NuxtLink 
          to="/page2?category=books&sort=desc"
          class="text-blue-500 hover:underline"
        >
          Go to Page 2 (with query params)
        </NuxtLink>
      </div>
      <div>
        <NuxtLink 
          to="/any/random/path?param1=value1&param2=value2"
          class="text-blue-500 hover:underline"
        >
          Go to Dynamic Route Example
        </NuxtLink>
      </div>
    </div>
  </div>
</template>