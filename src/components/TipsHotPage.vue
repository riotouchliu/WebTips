<script setup lang="ts">
import { ref, onMounted } from 'vue';

const carousel = ref<HTMLElement | null>(null);
const featureCards = ref<NodeListOf<HTMLElement> | null>(null);
const currentIndex = ref(0);

onMounted(() => {
  if (carousel.value) {
    featureCards.value = carousel.value.querySelectorAll('.flex-shrink-0');
    updateCarousel();
  }
});

const updateCarousel = () => {
  if (featureCards.value) {
    if (carousel.value) {
        carousel.value.style.transform = `translateX(-${currentIndex.value * 100}%)`;
    }
  }
};

const prev = () => {
  if (featureCards.value) {
    currentIndex.value = (currentIndex.value > 0) ? currentIndex.value - 1 : featureCards.value.length - 1;
    updateCarousel();
  }
};

const next = () => {
  if (featureCards.value) {
    currentIndex.value = (currentIndex.value < featureCards.value.length - 1) ? currentIndex.value + 1 : 0;
    updateCarousel();
  }
};

</script>
<template>
  <div class="bg-gray-50 h-screen flex flex-col">
    <!-- Header -->
      <div class="bg-white fixed-header flex justify-between items-center p-4 border-b sticky border-gray-200 top-0 z-50">
        <div class="flex items-center space-x-2">
          <button @click="$router.back()" class="p-2 rounded-full hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          <span class="font-semibold text-xl text-gray-800">Hot</span>
        </div>
      </div>
      <!-- Main Content Container -->
  <div class="w-full rounded-2xl p-6 md:p-10 custom-shadow bg-white flex flex-col items-center flex-grow">

    <!-- Feature Introduction Section -->
    <div class="relative w-full overflow-hidden flex-grow">
      <div id="feature-carousel" ref="carousel" class="flex transition-transform duration-500 ease-in-out h-full">
        <!-- Feature Card 1 -->
        <div class="flex-shrink-0 w-full">
          <div class="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 h-full">
            <div class="md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:pr-10">
              <h2 class="text-3xl font-bold text-gray-800 mb-4">高效协作</h2>
              <p class="text-base text-gray-600 leading-relaxed">Umind 旨在简化团队协作。通过实时同步功能，您可以与团队成员在同一个白板上进行头脑风暴，共同编辑，让创意火花碰撞出无限可能。</p>
            </div>
            <div class="md:w-1/2">
              <img src="https://placehold.co/600x400/e2e8f0/64748b?text=高效协作" alt="高效协作功能" class="w-full h-auto object-cover rounded-xl shadow-lg">
            </div>
          </div>
        </div>

        <!-- Feature Card 2 -->
        <div class="flex-shrink-0 w-full ">
          <div class="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 h-full">
            <div class="md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:pr-10">
              <h2 class="text-3xl font-bold text-gray-800 mb-4">智能工具</h2>
              <p class="text-base text-gray-600 leading-relaxed">利用 Umind 的智能工具，您可以轻松创建流程图、思维导图和复杂的图表。AI 辅助功能可以帮助您快速整理思路，提高工作效率。</p>
            </div>
            <div class="md:w-1/2">
              <img src="https://placehold.co/600x400/e2e8f0/64748b?text=智能工具" alt="智能工具功能" class="w-full h-auto object-cover rounded-xl shadow-lg">
            </div>
          </div>
        </div>

        <!-- Feature Card 3 -->
        <div class="flex-shrink-0 w-full ">
          <div class="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 h-full">
            <div class="md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:pr-10">
              <h2 class="text-3xl font-bold text-gray-800 mb-4">无限画布</h2>
              <p class="text-base text-gray-600 leading-relaxed">Umind 提供无限大的画布，让您的创意不受空间限制。您可以自由缩放、平移，在广阔的数字白板上尽情挥洒，构建宏大的项目蓝图。</p>
            </div>
            <div class="md:w-1/2">
              <img src="https://placehold.co/600x400/e2e8f0/64748b?text=无限画布" alt="无限画布功能" class="w-full h-auto object-cover rounded-xl shadow-lg">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="flex items-center justify-center space-x-4 mt-6">
      <button id="prev-btn" @click="prev" class="p-3 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button id="next-btn" @click="next" class="p-3 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Bottom Text Introduction -->
  <div class="w-full rounded-2xl p-6 md:p-10 custom-shadow bg-white text-center sticky bottom-0">
    <h3 class="text-2xl font-bold text-gray-800 mb-4">让你的创意无限延伸</h3>
    <p class="text-base text-gray-600 leading-relaxed">Umind 是一个让你的想法、计划和项目变为现实的强大平台。无论你是学生、老师还是职场人士，Umind 都能成为你最好的伙伴。</p>
  </div>

  </div>
</template>
