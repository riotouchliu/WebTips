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
    <!-- Features Section -->
    <section id="features" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-800 pb-6 text-center">{{ translations[currentLang].section_features_title
      }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Feature 1: Freehand Screen Capture -->
        <div class="bg-white p-6 rounded-2xl custom-shadow card-hover transition-transform duration-300 ease-in-out">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 012.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_capture_title }}
          </h3>
          <p class="text-base text-gray-600">{{ translations[currentLang].feature_capture_desc }}</p>
        </div>

        <!-- Feature 2: Powerful Annotation Tools -->
        <div class="bg-white p-6 rounded-2xl custom-shadow card-hover transition-transform duration-300 ease-in-out">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 21a9 9 0 009-9H3a9 9 0 009 9z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_annotate_title }}
          </h3>
          <p class="text-base text-gray-600">{{ translations[currentLang].feature_annotate_desc }}</p>
        </div>

        <!-- Feature 3: Screen Recording -->
        <div class="bg-white p-6 rounded-2xl custom-shadow card-hover transition-transform duration-300 ease-in-out">
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <svg class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_record_title }}</h3>
          <p class="text-base text-gray-600">{{ translations[currentLang].feature_record_desc }}</p>
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
            <img src="https://riotouch.com/upload_img/products/f0/981cf4a64f728512be6b9477438eb4.webp"
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
            <img src="https://riotouch.com/upload_img/products/37/88e624120029b5c9a992fa17ecbcf0.webp"
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
            <img src="https://riotouch.com/upload_img/products/fa/2989725a890533678cb313343a92c3.webp"
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
            <img src="https://riotouch.com/upload_img/products/58/b50c50feb1e36da54188dd05a49a5a.webp"
              :alt="translations[currentLang].step_4_title" class="w-full rounded-lg">
          </div>
        </div>
        <p>.</p>
        <!-- Step 3: Save & Share -->
        <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl custom-shadow">
          <div class="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].step_5_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].step_4_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/79/2309dbb6b4fce07db878c15bd50490.webp"
              :alt="translations[currentLang].step_5_title" class="w-full rounded-lg">
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
    title: "uCut 使用指南",
    subtitle: "快速了解和掌握 uCut 的屏幕捕获与编辑功能",
    section_intro_title: "uCut 简介",
    section_intro_para1: "uCut 是一个高效且功能强大的屏幕截图与标注工具，旨在帮助您轻松捕获屏幕上的任何内容。它提供了多种捕获模式和丰富的编辑功能，让您的工作和学习更加便捷。",
    section_intro_para2: "无论是进行教学演示、制作教程，还是日常沟通，uCut 都能满足您的需求，让信息的传达更加直观和高效。",
    section_features_title: "核心功能",
    feature_capture_title: "自由截图",
    feature_capture_desc: "支持矩形、多边形和自由手绘等多种捕获模式，精确捕捉您所需的屏幕区域。",
    feature_annotate_title: "强大标注工具",
    feature_annotate_desc: "提供画笔、文本框、箭头、矩形、马赛克等多种标注工具，轻松突出重点。",
    feature_record_title: "屏幕录制",
    feature_record_desc: "一键录制屏幕活动，支持高清视频输出，是制作教程和演示的理想选择。",
    section_guide_title: "uCut 特性",
    step_start_title: "1: 手指跟随特征",
    step_start_desc: "UCut中的手指跟随特征允许您通过简单地移动手指来轻松调整截图区域。您可以毫不费力地调整屏幕截图区域的大小和位置，提供更直观和灵活的方式来捕获内容。",
    step_annotate_title: "2: 高效截图",
    step_annotate_desc: "UCut提供高效的屏幕截图函数，可以即时截取屏幕内容，并自动保存到剪切板，供您随时使用。轻松提高工作效率，让截图更快捷方便。",
    step_save_title: "3: 插入白板",
    step_save_desc: "UCut的插入白板函数可以让你将截图直接上传到白板，方便展示和分享，结合Riotouch的UMind软件，你可以在白板上重新创建截图，进一步完善和优化显示内容，使输出更加生动和准确。",
    step_4_title: "4: 二维码输出",
    step_4_desc: "UCut允许您将截图转换为二维码，方便快捷地与多人分享。通过扫描二维码，团队成员可以立即访问和查看截图内容，实现即时在线共享和协作。",
    step_5_title: "5: 升级的UI界面",
    step_5_desc: "升级后的用户界面将强大的功能与时尚的美感结合在一起。清晰直观的函数图标、清晰定义的截图和函数区域以及多种函数选项不仅使操作更加高效便捷，还能为您带来舒适愉悦的用户体验。",

  },
  en: {
    title: "uCut User Guide",
    subtitle: "A quick guide to understanding and using uCut's screen capture and editing features",
    section_intro_title: "About uCut",
    section_intro_para1: "uCut is an efficient and powerful screen capture and annotation tool designed to help you easily capture any content on your screen. It offers multiple capture modes and rich editing features to make your work and study more convenient.",
    section_intro_para2: "Whether for educational presentations, creating tutorials, or daily communication, uCut meets your needs and makes information transfer more intuitive and efficient.",
    section_features_title: "Core Features",
    feature_capture_title: "Freehand Screen Capture",
    feature_capture_desc: "Supports multiple capture modes, including rectangular, polygonal, and freehand drawing, to precisely capture the screen area you need.",
    feature_annotate_title: "Powerful Annotation Tools",
    feature_annotate_desc: "Provides various annotation tools such as pens, text boxes, arrows, rectangles, and mosaics to easily highlight key points.",
    feature_record_title: "Screen Recording",
    feature_record_desc: "Record screen activity with one click, supporting high-definition video output, making it an ideal choice for creating tutorials and demonstrations.",
    section_guide_title: "uCut Feature",
    step_start_title: "Step 1: Finger Follow Feature",
    step_start_desc: "The Finger Follow feature in UCut allows you to easily adjust the screenshot area by simply moving your finger. You can resize and reposition the screenshot area effortlessly, providing a more intuitive and flexible way to capture content.",
    step_annotate_title: "2: Efficient Screenshot",
    step_annotate_desc: "UCut provides an efficient screenshot function that can instantly capture screen content and automatically save it to the clipboard for you to use at any time.Easily improve work efficiency, and make screenshots faster and more convenient.",
    step_save_title: "3:Insert into whiteboard",
    step_save_desc: "UCut's insert whiteboard function allows you to upload screenshots directly to the whiteboard for easy display and sharing. Combined with Riotouch's Umind software, you can re-create screenshots on the whiteboard to further improve and optimize the display content, making the output more vivid and accurate.",
    step_4_title: "4: QR code output",
    step_4_desc: "UCut allows you to convert screenshots into QR codes, which are convenient and quick to share with multiple people. By scanning the QR code, team members can immediately access and view the screenshot content, realizing instant online sharing and collaboration.",
    step_5_title: "5: Upgraded UI interface",
    step_5_desc: "The upgraded UI interface combines powerful functions with stylish beauty. Clear and intuitive function icons, clearly defined screenshots and function areas, and a variety of function options not only make the operation more efficient and convenient, but also bring you a comfortable and pleasant user experience.",

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
