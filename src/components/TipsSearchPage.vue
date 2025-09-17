<script setup lang="ts">
</script>
<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- Header -->
    <div class="fixed-header flex justify-between items-center p-4 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <button @click="$router.back()" class="p-2 rounded-full hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <span class="font-semibold text-xl text-gray-800"> Search </span>
      </div>
      <div class="flex items-center space-x-4">
        <div class="relative flex items-center bg-gray-100 rounded-full px-4 py-2 w-96 max-w-sm hidden sm:flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input type="text" placeholder="Need help? Find the answer here."
            class="flex-grow bg-transparent outline-none ml-2 text-sm text-gray-600 placeholder-gray-400" />
        </div>
        <button class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <main class="container mx-auto p-4 sm:p-8">
      <!-- TipsSection Component -->

    </main>
  </div>
</template>
