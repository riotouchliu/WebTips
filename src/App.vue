<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<style scoped>

/* 额外的自定义样式，确保页面美观 */
body {
  font-family: 'Inter', sans-serif;
  background-color: #f7fafc;
  margin: 0;
  padding: 0;
  /* 添加顶部填充，防止内容被固定头部遮挡 */
  padding-top: 64px; /* 根据 Header 高度调整 */
}

/* 头部悬浮样式 */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: white; /* 确保背景色，避免透视 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 添加阴影，增加层次感 */
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
