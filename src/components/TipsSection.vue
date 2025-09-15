<script setup lang="ts">
import { type PropType } from 'vue';
import TipsCard from './TipsCard.vue';

// 定义卡片类型
interface CardType {
  text: string;
  type: 'new' | 'device' | 'app';
  iconContent?: string;
}

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  cards: {
    type: Array as PropType<CardType[]>,
    required: true
  }
});

function hasMoreButton(title) {
  if (title !== 'APP') {
    return props.cards.length > 6
  }
  return props.cards.length > 5;
}

</script>

<template>
  <div class="section p-4 sm:p-8">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold text-gray-800">{{ title }}</h2>
      <a v-if="hasMoreButton(title)" href="#" class="flex items-center text-sm text-gray-500 hover:text-gray-700">
        More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
      <TipsCard v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </div>
</template>
