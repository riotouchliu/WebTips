<script setup lang="ts">

const props = defineProps({name: String})

</script>
<template>
    <!-- Header -->
      <div class="bg-white fixed-header flex justify-between items-center p-4 border-b sticky border-gray-200 top-0 z-50">
        <div class="flex items-center space-x-2">
          <button @click="$router.back()" class="p-2 rounded-full hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          <span class="font-semibold text-xl text-gray-800">  {{props.name}} </span>
        </div>
      </div>
</template>
