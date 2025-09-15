<script setup lang="ts">
</script>
<template>
    <!-- Header -->
    <header class="fixed-header flex justify-between items-center p-4 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <div class="bg-pink-200 rounded-full w-8 h-8 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.04l2.5 2.5a.75.75 0 0 1 0 1.062l-2.5 2.5a.75.75 0 0 1-1.062 0l-2.5-2.5a.75.75 0 0 1 .04-1.063L12 12m2.25 2.25L13.5 13.5m-3.75 0h.008v.008h-.008v-.008ZM12 6.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
          </svg>
        </div>
        <span class="font-semibold text-xl text-gray-800">Tips</span>
      </div>
      <div class="flex items-center space-x-4">
        <div class="relative flex items-center bg-gray-100 rounded-full px-4 py-2 w-96 max-w-sm hidden sm:flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input type="text" placeholder="Need help? Find the answer here." class="flex-grow bg-transparent outline-none ml-2 text-sm text-gray-600 placeholder-gray-400" />
        </div>
        <button class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </header>
</template>
<style>

</style>
