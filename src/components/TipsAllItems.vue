<script setup lang="ts">
import {computed, type PropType } from 'vue';
import TipsCard from './TipsCard.vue';
import type { CardType } from '../common/Datas';

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


const gridCardClass = computed(() => {
  return props.title === 'APP' ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6' : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5';
});


</script>

<template>
  <div class="section p-4 sm:p-8">
    <div :class="gridCardClass">
      <TipsCard v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </div>
</template>
