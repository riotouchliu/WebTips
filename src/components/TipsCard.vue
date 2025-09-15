<script setup lang="ts">
import { computed, type PropType } from 'vue';

// 定义卡片类型
interface CardType {
  text: string;
  type: 'new' | 'device' | 'app';
  iconContent?: string;
}

const props = defineProps({
  card: {
    type: Object as PropType<CardType>,
    required: true
  }
});

const cardClass = computed(() => {
  let baseClass = "relative flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105";
  if (props.card.type === 'new') {
    baseClass += " bg-pink-500 text-white shadow-xl";
  } else if (props.card.type === 'device') {
    baseClass += " bg-gray-100 border-2 border-transparent hover:border-blue-500";
  } else if (props.card.type === 'app') {
    baseClass += " bg-gray-100";
  }
  return baseClass;
});

const iconClass = computed(() => {
  let baseClass = "w-16 h-16 rounded-lg mb-2";
  if (props.card.type === 'new') {
    baseClass = "w-24 h-24";
  } else if (props.card.type === 'device') {
    baseClass += " border border-gray-300";
  }
  return baseClass;
});

const textClass = computed(() => {
  return props.card.type === 'new' ? 'text-white' : 'text-gray-800';
});

const iconHtml = computed(() => {
  if (props.card.type === 'device') {
    return `<img src="https://placehold.co/100x100/A0A0A0/ffffff?text=Screen" class="w-full h-full object-cover rounded-lg" />`;
  }
  return props.card.iconContent;
});

</script>

<template>
  <div :class="cardClass">
    <template v-if="card.type === 'new'">
      <span class="text-white font-bold text-lg mb-2">NEW</span>
    </template>
    <template v-else>
      <div :class="iconClass" class="flex items-center justify-center overflow-hidden" v-html="iconHtml"></div>
    </template>
    <span :class="textClass" class="text-center mt-2">{{ card.text }}</span>
  </div>
</template>
