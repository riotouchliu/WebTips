<script setup lang="ts">
import { sectionDataManager } from '../common/SectionData';
import TipsSection from './TipsSection.vue';
import HomeTopBar from './bar/HomeTopBar.vue';

const sectionData = sectionDataManager.getSectionData();

</script>
<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <HomeTopBar/>

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
