<script setup lang="ts">
import { ref } from 'vue';
import TipsSection from './TipsSection.vue';
import type { CardType } from './TipsSection.vue';

// Define the structure for the section data
interface Section {
  title: string;
  cards: CardType[];
}

interface SectionData {
  new: Section;
  device: Section;
  app: Section;
}

// Apply the type to the ref
const sectionData = ref<SectionData>({
  new: {
    title: 'NEW',
    cards: [
      { text: 'New Function', type: 'new' }
    ]
  },
  device: {
    title: 'DEVICE',
    cards: [
      { text: 'RK3588', type: 'device' },
      { text: 'ADV311D2', type: 'device' },
      { text: 'ADV100', type: 'device' },
      { text: '982', type: 'device' },
      { text: 'LTS', type: 'device' }
    ]
  },
  app: {
    title: 'APP',
    cards: [
      { text: 'Umind', type: 'app', iconContent: '<div class="bg-blue-500 rounded-lg w-full h-full flex items-center justify-center text-white text-3xl">U</div>' },
      { text: 'UFile', type: 'app', iconContent: '<div class="bg-orange-500 rounded-lg w-full h-full flex items-center justify-center text-white text-3xl">F</div>' },
      { text: 'Setting', type: 'app', iconContent: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>' },
      { text: 'AI Assistant', type: 'app', iconContent: '<div class="bg-purple-500 rounded-lg w-full h-full flex items-center justify-center text-white text-3xl">AI</div>' },
      { text: 'Record Screen', type: 'app', iconContent: '<div class="bg-cyan-500 rounded-lg w-full h-full flex items-center justify-center text-white text-3xl">R</div>' },
      { text: 'UPicture', type: 'app', iconContent: '<div class="bg-lime-500 rounded-lg w-full h-full flex items-center justify-center text-white text-3xl">P</div>' },
      { text: 'Calculator', type: 'app', iconContent: '<div class="bg-blue-300 rounded-lg w-full h-full flex items-center justify-center text-white text-3xl">C</div>' },
      { text: 'Calendar', type: 'app', iconContent: '<div class="bg-red-500 rounded-lg w-full h-full flex items-center justify-center text-white text-3xl">C</div>' }
    ]
  }
});
</script>
<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <div class="fixed-header flex justify-between items-center p-4 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <div class="rounded-full w-8 h-8 flex items-center justify-center">
            <img src="../assets/images/ic_logo.png"/>
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
    </div>

    <!-- Main Content -->
    <main class="container mx-auto p-4 sm:p-8">
      <!-- TipsSection Component -->
      <TipsSection :title="sectionData.new.title" :cards="sectionData.new.cards" />
      <TipsSection :title="sectionData.device.title" :cards="sectionData.device.cards" />
      <TipsSection :title="sectionData.app.title" :cards="sectionData.app.cards" />
    </main>
  </div>
</template>

<style scoped>
/* 额外的自定义样式，确保页面美观 */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: white; /* 确保背景色，避免透视 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 添加阴影，增加层次感 */
}

/* 确保主内容不会被固定头部遮挡 */
main {
  padding-top: 64px; /* 根据 header 高度调整 */
}
</style>
