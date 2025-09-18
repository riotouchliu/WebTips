<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { sectionDataManager } from '../common/SectionData';
import TipsAllItems from './TipsAllItems.vue';
import SearchMoreTopBar from './bar/SearchMoreTopBar.vue';

const route = useRoute()
const id = ref(route.query.id)

const sectionData = sectionDataManager.getSectionData();

const cards = computed(() => {
    if (id.value === 'APP') {
      return sectionData.value.app.cards
    } else if (id.value === "NEW") {
      return sectionData.value.new.cards
    }
    return sectionData.value.device.cards
});

const title = computed(() => {
    if (id.value === 'APP') {
      return sectionData.value.app.title
    } else if (id.value === "NEW") {
      return sectionData.value.new.title
    }
    return sectionData.value.device.title
});

</script>
<template>
    <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
     <SearchMoreTopBar/>

    <!-- Main Content -->
    <main class="container mx-auto p-4 sm:p-8">
      <!-- TipsSection Component -->
      <TipsAllItems :title="title" :cards="cards" />
    </main>
  </div>
</template>
