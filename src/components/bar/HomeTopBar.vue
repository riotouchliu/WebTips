<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const goToSearch = () =>{
  router.push({path: '/search'})
}
</script>
<template>
  <div class="fixed-header flex justify-between items-center p-4 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <div class="rounded-full w-8 h-8 flex items-center justify-center">
            <img src="../../assets/images/ic_logo.png"/>
        </div>
        <span class="font-semibold text-xl text-gray-800">Tips</span>
      </div>
      <div class="flex items-center space-x-4" @click="goToSearch">
        <div class="relative flex items-center bg-gray-100 rounded-full px-4 py-2 w-96 max-w-sm hidden sm:flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <!-- <input type="text" placeholder="Need help? Find the answer here." class="flex-grow bg-transparent outline-none ml-2 text-sm text-gray-600 placeholder-gray-400" /> -->
           <span type="text" class="flex-grow bg-transparent outline-none ml-2 text-sm text-gray-600 placeholder-gray-400" >Need help? Find the answer here.</span>
        </div>
      </div>
    </div>
</template>
