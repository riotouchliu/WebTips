<script setup lang="ts">
import { computed, type PropType, ref, onMounted } from 'vue';
import type { CardType } from '../common/Datas';

import { useRouter } from 'vue-router';

const props = defineProps({
  card: {
    type: Object as PropType<CardType>,
    required: true
  }
});

const router = useRouter();

const goToDetailPage = (id: string) => {
  router.push({path: '/detail', query: {id: id}});
}

const goToHotPage = () => {
  router.push({path: '/hot'});
}

const goToClick = (id: string) => {
  if (props.card.type === 'new') {
    goToHotPage();
  } else {
    goToDetailPage(id);
  }
}



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
  let baseClass = "rounded-lg mb-2";
  if (props.card.type === 'new') {
    baseClass = "w-24 h-24";
  } else if (props.card.type === 'device') {
    baseClass += "w-30 h-24";
  } else {
    baseClass = "w-16 h-16 rounded-lg mb-2"
  }
  return baseClass;
});

const textClass = computed(() => {
  return props.card.type === 'new' ? 'text-white' : 'text-gray-800';
});

const iconHtml = computed(() => {
  if (props.card.type === 'device') {
    return `<a href="`+ props.card.url +`"><img src="` + props.card.iconContent + `" class="w-full h-full object-cover rounded-lg" /></a>`;
  }
  return `<img src="` + props.card.iconContent + `" class="w-full h-full object-cover rounded-lg" />`;
});

const textRef = ref<HTMLElement | null>(null);
const isOverflowing = ref(false);

onMounted(() => {
  if (textRef.value && textRef.value.scrollWidth > textRef.value.clientWidth) {
    isOverflowing.value = true;
  }
});

</script>

<template>
  <div :class="cardClass" @click="goToClick('123')">
    <template v-if="card.type === 'new'">
      <span class="text-white font-bold text-lg mb-2">NEW</span>
    </template>
    <template v-else-if="card.text === 'device'">
      <div :class="iconClass" class="flex items-center justify-center overflow-hidden" v-html="iconHtml">

      </div>
    </template>
    <template v-else>
      <div :class="iconClass" class="flex items-center justify-center overflow-hidden" v-html="iconHtml">

      </div>
    </template>

      <div class="marquee-container mt-2 text-center">
        <span ref="textRef" :class="[textClass, { 'marquee-text': isOverflowing }]">{{ card.text }}</span>
      </div>
  </div>
</template>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-text {
  display: inline-block;
  animation: marquee 5s linear infinite;
}

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
</style>
