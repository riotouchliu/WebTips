<template>
  <main class="main-container p-8 custom-shadow">

    <!-- Header Section -->
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-2 pb-4">{{ translations[currentLang].title }}</h1>
      <p class="text-lg text-gray-600 pb-2">{{ translations[currentLang].subtitle }}</p>

      <!-- Language Switcher -->
      <div class="mt-4">
        <button @click="setLanguage('zh')"
          :class="['px-4 py-2 rounded-full font-bold', currentLang === 'zh' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800']">
          中文
        </button>
        <button @click="setLanguage('en')"
          :class="['ml-2 px-4 py-2 rounded-full font-bold', currentLang === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800']">
          English
        </button>
        <p>.</p>
      </div>
    </header>

    <!-- Introduction Section -->
    <section id="introduction" class="bg-gray-100 p-8 rounded-2xl mb-12 custom-shadow">
      <h2 class="text-3xl font-bold text-gray-800 pb-4 text-center">{{ translations[currentLang].section_intro_title }}
      </h2>
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <p class="text-base text-gray-700 leading-relaxed mb-4">
            {{ translations[currentLang].section_intro_para1 }}
          </p>
          <p class="text-base text-gray-700 leading-relaxed">
            {{ translations[currentLang].section_intro_para2 }}
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="https://riotouch.com/upload_img/products/0d/0768def66b21ae657d847145b4645f.webp"
            :alt="translations[currentLang].section_intro_title" class="w-full rounded-xl shadow-lg">
        </div>
      </div>
    </section>
    <p>.</p>

    <!-- How-to Guide Section -->
    <section id="how-to-guide" class="bg-gray-100 p-8 rounded-2xl custom-shadow">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center pb-6">{{
        translations[currentLang].section_guide_title }}
      </h2>
      <div>

        <!-- Step 1: Start Capture -->
        <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl custom-shadow mb-8">
          <div class="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].step_start_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].step_start_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/95/ca5fde00dfc0d2e545b906cb40cd1f.webp"
              :alt="translations[currentLang].step_start_title" class="w-full rounded-lg">
          </div>
        </div>
        <p>.</p>
        <!-- Step 2: Annotate -->
        <div class="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-xl custom-shadow mb-8">
          <div class="md:w-1/2 md:pl-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].step_annotate_title }}
            </h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].step_annotate_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/c2/840bd9592770964fc202f0aa669450.webp"
              :alt="translations[currentLang].step_annotate_title" class="w-full rounded-lg">
          </div>
        </div>
        <p>.</p>
        <!-- Step 3: Save & Share -->
        <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl custom-shadow">
          <div class="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].step_save_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].step_save_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/dc/89c160a9709af211474986cddae14a.webp"
              :alt="translations[currentLang].step_save_title" class="w-full rounded-lg">
          </div>
        </div>
        <p>.</p>
        <!-- Step 4: Annotate -->
        <div class="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-xl custom-shadow mb-8">
          <div class="md:w-1/2 md:pl-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].step_4_title }}
            </h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].step_4_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/65/df133f3fcbba777a5edf5de93a6558.webp"
              :alt="translations[currentLang].step_4_title" class="w-full rounded-lg">
          </div>
        </div>

      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 定义语言数据
interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  zh: {
    title: "UPlay",
    subtitle: "",
    section_intro_title: "UPlay：您的多合一媒体播放解决方案",
    section_intro_para1: "UPlay以卓越的质量提供无缝和多功能的视频播放。支持各种来源，同时保持原始清晰度。自定义播放列表、播放顺序，甚至通过一键截图捕获令人惊叹的帧。无论是娱乐、教育还是演示，UPlay都能提供流畅、引人入胜和动态的媒体体验。",
    section_intro_para2: "",
    section_features_title: "核心功能",
    feature_capture_title: "自由截图",
    feature_capture_desc: "支持矩形、多边形和自由手绘等多种捕获模式，精确捕捉您所需的屏幕区域。",
    feature_annotate_title: "强大标注工具",
    feature_annotate_desc: "提供画笔、文本框、箭头、矩形、马赛克等多种标注工具，轻松突出重点。",
    feature_record_title: "屏幕录制",
    feature_record_desc: "一键录制屏幕活动，支持高清视频输出，是制作教程和演示的理想选择。",
    section_guide_title: "UPlay 特性",
    step_start_title: "1: 快速添加或删除视频",
    step_start_desc: "UPlay提供一键全选和一键取消所有功能，让您轻松管理要播放的视频列表，您可以快速将所有视频添加到播放队列中，或者一键取消所有视频的播放，无需一一操作，节省时间，提高播放管理效率。",
    step_annotate_title: "2: 流畅的视频播放",
    step_annotate_desc: "UPlay允许用户将多个视频添加到一个等待列表中，播放当前视频后，系统会自动继续播放列表中的下一个视频，使连续型播放变得轻松无缝。非常适合长期观看需求，节省手动操作的时间，提供更流畅、无分心的观看体验。",
    step_save_title: "3: 一键截图",
    step_save_desc: "UPlay提供便捷的一键截图函数，让你轻松捕捉影片中的精彩场景，无论是感人瞬间还是震撼场景，只需一键即可保存影片的每一帧美丽画面，供你随时召回收藏。",
    step_4_title: "4: 个性化播放",
    step_4_desc: "UPlay的等待列表循环播放和单视频循环播放功能允许用户自定义视频播放次数并循环视频以提供个性化的视听体验。",
  },
  en: {
    title: "UPlay",
    subtitle: "",
    section_intro_title: "About UPlay",
    section_intro_para1: "uCut is an efficient and powerful screen capture and annotation tool designed to help you easily capture any content on your screen. It offers multiple capture modes and rich editing features to make your work and study more convenient.",
    section_intro_para2: "Whether for educational presentations, creating tutorials, or daily communication, uCut meets your needs and makes information transfer more intuitive and efficient.",
    section_features_title: "Core Features",
    feature_capture_title: "Freehand Screen Capture",
    feature_capture_desc: "Supports multiple capture modes, including rectangular, polygonal, and freehand drawing, to precisely capture the screen area you need.",
    feature_annotate_title: "Powerful Annotation Tools",
    feature_annotate_desc: "Provides various annotation tools such as pens, text boxes, arrows, rectangles, and mosaics to easily highlight key points.",
    feature_record_title: "Screen Recording",
    feature_record_desc: "Record screen activity with one click, supporting high-definition video output, making it an ideal choice for creating tutorials and demonstrations.",
    section_guide_title: "UPlay Feature",
    step_start_title: "Step 1: Quickly Add or Delete Videos",
    step_start_desc: "UPlay provides one-click select all and one-click deselect all functions, allowing you to easily manage the list of videos to be played. You can quickly add all videos to the play queue, or cancel the play of all videos with one click, without having to operate one by one, saving time and improving the efficiency of playback management.",
    step_annotate_title: "2: Smooth Video Playback",
    step_annotate_desc: "UPlay allows users to add multiple videos to a waiting list. After playing the current video, the system will automatically continue to play the next video in the list, making continuous playback easy and seamless. It is very suitable for long-term viewing needs, saving time for manual operations and providing a smoother and distraction-free viewing experience.",
    step_save_title: "3: One-click Screenshot",
    step_save_desc: "UPlay provides a convenient one-click screenshot function, allowing you to easily capture the wonderful scenes in the movie. Whether it is a touching moment or a shocking scene, just one click can save every beautiful frame of the movie for you to recall and collect at any time.",
    step_4_title: "4: Personalized Playback",
    step_4_desc: "UPlay's waiting list loop playback and single video loop playback functions allow users to customize the number of video playback times and loop the video to provide a personalized audio-visual experience.",
  }
};

const currentLang = ref<string>('zh');

const getBrowserLanguage = (): string => {
  const lang = navigator.language || (navigator as any).userLanguage;
  return lang.split('-')[0];
};

const setLanguage = (lang: string) => {
  if (translations[lang]) {
    currentLang.value = lang;
  }
};

onMounted(() => {
  const userLang = getBrowserLanguage();
  setLanguage(userLang);
});
</script>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: auto;
  background-color: #ffffff;
  border-radius: 1.5rem;
}

.custom-shadow {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
