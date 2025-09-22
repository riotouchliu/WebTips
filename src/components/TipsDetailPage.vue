<script setup lang="ts">
import TopBar from '../components/bar/BaseTopBar.vue';

import UmindTemple from './apps/UmindTemple.vue';
import UFileTemple from './apps/UFileTemple.vue';
import UCutTemple from './apps/UCutTemple.vue';
import UPlayTemple from './apps/UPlayTemple.vue';
import BaseAppTemplate from './apps/BaseAppTemplate.vue';

</script>
<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- Header -->
    <TopBar name="Umind" />
    <!-- Main Container -->
    <BaseAppTemplate/>
  </div>
</template>
