<template>
  <main class="main-container p-8 custom-shadow">

    <!-- Header Section -->
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-2 pb-2">{{ translations[currentLang].title }}</h1>
      <p class="text-lg text-gray-600">{{ translations[currentLang].subtitle }}</p>

      <!-- Language Switcher -->
      <div class="mt-4 p-6">
        <button @click="setLanguage('zh')"
          :class="['px-4 py-2 rounded-full font-bold', currentLang === 'zh' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800']">
          中文
        </button>
        <button @click="setLanguage('en')"
          :class="['ml-2 px-4 py-2 rounded-full font-bold', currentLang === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800']">
          English
        </button>
      </div>
    </header>

    <!-- Introduction Section -->
    <section id="introduction" class="bg-gray-100 p-8 rounded-2xl mb-12 custom-shadow">
      <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center pb-2">{{
        translations[currentLang].section_intro_title }}</h2>
      <div class="flex flex-col md:flex-row items-center mb-4">
        <div class="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <p class="text-base text-gray-700 leading-relaxed pb-4">
            {{ translations[currentLang].section_intro_para1 }}
          </p>
          <p class="text-base text-gray-700 leading-relaxed">
            {{ translations[currentLang].section_intro_para2 }}
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="https://riotouch.com/upload_img/products/0d/09ea6d88060aa55a8834f6dab72ab7.webp"
            :alt="translations[currentLang].section_intro_title" class="w-full rounded-xl shadow-lg">
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center p-4">{{
        translations[currentLang].section_features_title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Feature 1: Cloud Storage -->
        <div class="bg-white p-6 rounded-2xl custom-shadow card-hover transition-transform duration-300 ease-in-out">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center pb-4">
            <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 16a2 2 0 01-2-2v-4a2 2 0 012-2h18a2 2 0 012 2v4a2 2 0 01-2 2h-18z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_cloud_title }}</h3>
          <p class="text-base text-gray-600">{{ translations[currentLang].feature_cloud_desc }}</p>
        </div>

        <!-- Feature 2: Cross-platform Sync -->
        <div class="bg-white p-6 rounded-2xl custom-shadow card-hover transition-transform duration-300 ease-in-out">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center pb-4">
            <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 4v5h.582m15.418 0a8.001 8.001 0 00-15.418 0m15.418 0h.001v.001m-2.582.582a8.001 8.001 0 01-14.836 0m14.836 0h.001v.001M17 19h-10.418M17 19v-5" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_sync_title }}</h3>
          <p class="text-base text-gray-600">{{ translations[currentLang].feature_sync_desc }}</p>
        </div>

        <!-- Feature 3: Secure Sharing -->
        <div class="bg-white p-6 rounded-2xl custom-shadow card-hover transition-transform duration-300 ease-in-out">
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center pb-4">
            <svg class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.683 9.432a3 3 0 00-2.812-4.991A3 3 0 001.32 7.749m5.636-2.126l.206-.207m.08-1.428A12.001 12.001 0 0115 12a12.001 12.001 0 01-1.32 7.749" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_share_title }}</h3>
          <p class="text-base text-gray-600">{{ translations[currentLang].feature_share_desc }}</p>
        </div>

      </div>
    </section>

    <p>. </p>
    <!-- How-to Guide Section -->
    <section id="how-to-guide" class="bg-gray-100 p-8 rounded-2xl custom-shadow">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center pb-6">{{
        translations[currentLang].section_guide_title }}</h2>
      <div class="space-y-8">

        <!-- Step 1: Login -->
        <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl custom-shadow">
          <div class="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_1_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].feature_1_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/a8/c09c6079b854de7e01c5ef6113a455.webp"
              :alt="translations[currentLang].feature_1_title" class="w-full rounded-lg">
          </div>
        </div>
        <p>. </p>
        <!-- Step 2: File Upload -->
        <div class="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-xl custom-shadow">
          <div class="md:w-1/2 md:pl-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_2_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].feature_2_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/7a/fe6b300c6e8cfb316c786c4be5b4a3.webp"
              :alt="translations[currentLang].feature_2_title" class="w-full rounded-lg">
          </div>
        </div>
        <p>. </p>
        <!-- Step 3: Sharing -->
        <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl custom-shadow">
          <div class="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_3_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].feature_3_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/7a/fe6b300c6e8cfb316c786c4be5b4a3.webp"
              :alt="translations[currentLang].feature_3_title" class="w-full rounded-lg">
          </div>
        </div>
        <p>. </p>
        <!-- Step 4: File Upload -->
        <div class="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-xl custom-shadow">
          <div class="md:w-1/2 md:pl-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_4_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].feature_4_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/0d/09ea6d88060aa55a8834f6dab72ab7.webp"
              :alt="translations[currentLang].feature_4_title" class="w-full rounded-lg">
          </div>
        </div>
        <p>. </p>
        <!-- Step 5: Sharing -->
        <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl custom-shadow">
          <div class="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_5_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].feature_5_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/1c/a7aec700244d459063d807818edb1c.webp"
              :alt="translations[currentLang].feature_5_title" class="w-full rounded-lg">
          </div>
        </div>

        <p>. </p>
        <!-- Step 6: File Upload -->
        <div class="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-xl custom-shadow">
          <div class="md:w-1/2 md:pl-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_6_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].feature_6_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/74/04f89a4cb611177d0e3fcdff45ac28.webp"
              :alt="translations[currentLang].feature_6_title" class="w-full rounded-lg">
          </div>
        </div>

        <p>. </p>
        <!-- Step 7: Sharing -->
        <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl custom-shadow">
          <div class="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_7_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].feature_7_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/69/72e314d82008c33e09f47039fc3539.webp"
              :alt="translations[currentLang].feature_7_title" class="w-full rounded-lg">
          </div>
        </div>

        <p>. </p>
        <!-- Step 8: File Upload -->
        <div class="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-xl custom-shadow">
          <div class="md:w-1/2 md:pl-8 mb-4 md:mb-0">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ translations[currentLang].feature_8_title }}</h3>
            <p class="text-base text-gray-600">{{ translations[currentLang].feature_8_desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://riotouch.com/upload_img/products/6c/f92aceb681b6db376cfee4f59641d6.webp"
              :alt="translations[currentLang].feature_8_title" class="w-full rounded-lg">
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
    title: "Ufile 使用指南",
    subtitle: "快速了解和掌握 Ufile 的各项功能",
    section_intro_title: "Ufile 简介",
    section_intro_para1: "Ufile 是一个强大的文件管理和云存储解决方案，旨在为用户提供无缝的文件同步、共享和协作体验。无论您身处何处，都可以轻松访问和管理您的文件，确保工作效率和数据安全。",
    section_intro_para2: "它支持多种文件类型，并提供直观的用户界面，让文件操作变得简单快捷。无论是个人使用还是团队协作，Ufile 都能满足您的需求。",
    section_features_title: "核心功能",
    feature_cloud_title: "云端存储",
    feature_cloud_desc: "将您的所有文件安全地存储在云端，随时随地访问，再也不用担心文件丢失。",
    feature_sync_title: "多端同步",
    feature_sync_desc: "支持多种设备，您的文件将在所有设备上自动同步，确保您始终使用最新版本。",
    feature_share_title: "安全共享",
    feature_share_desc: "轻松与他人共享文件或文件夹，并可设置访问权限和密码保护，确保数据安全。",
    section_guide_title: "Ufile 特性",
    feature_1_title: "特性 1: 云资源",
    feature_1_desc: "UFile开放了云资源平台接口，教师登录专属账号后，上传到云资源平台的资源会同步出现在UFile资源库中，帮助教师轻松管理各类档案资源。",
    feature_2_title: "特性 2: 人工智能分析",
    feature_2_desc: "借助AI，UFile可以一键快速分析各种文件资源，包括文档、图片、ppt、pdf等，并提供有见地的分析报告，是智慧教育不可或缺的白板软件。",
    feature_3_title: "特性 3: AI库",
    feature_3_desc: "UFile建立了单独的人工智能资源库，存储人工智能生成的各种课件资源。海量课件资源帮助教师节省80%的备课时间，为教师创造更智能的人工智能教室。",
    feature_4_title: "特性 4: 实时文件预览",
    feature_4_desc: "预览常用的文件格式，如XMind、Office、JPG、ZIP、VSD、CAD、PSD、Mp3和Photoshop等。直接在UFile中，无需额外的软件",
    feature_5_title: "特性 5: 方便的UMind文件接入",
    feature_5_desc: "在UFile和交互式白板软件UMind之间实现轻松协作。轻松地将存储在UFile中的文件直接插入UMind，简化工作流程，以便在课程或演示期间无缝访问和使用白板上的文档、图像或其他资源。",
    feature_6_title: "特性 6: 轻松的UMind后台设置",
    feature_6_desc: "直接从UFile快速设置UMind的背景图像，这款交互式白板软件可以让用户节省时间，通过单一操作自定义自己的白板环境，为日常任务增添便利。",
    feature_7_title: "特性 7: 谷歌和微软云接入",
    feature_7_desc: "直接在UFile中访问、保存和管理来自Google Drive和Microsoft OneDrive的资源。无需切换平台即可删除或组织文件。",
    feature_8_title: "特性 8: 内置5G云存储",
    feature_8_desc: "享受安全高速的5G云存储，让您随时随地自由保存和访问文件。",
  },
  en: {
    title: "Ufile User Guide",
    subtitle: "A quick guide to understanding and using Ufile's features",
    section_intro_title: "About Ufile",
    section_intro_para1: "Ufile is a powerful file management and cloud storage solution designed to provide users with a seamless experience for file synchronization, sharing, and collaboration. You can easily access and manage your files from anywhere, ensuring both efficiency and data security.",
    section_intro_para2: "It supports a wide variety of file types and offers an intuitive user interface, making file operations fast and easy. Whether for personal use or team collaboration, Ufile meets your needs.",
    section_features_title: "Core Features",
    feature_cloud_title: "Cloud Storage",
    feature_cloud_desc: "Securely store all your files in the cloud, with access from anywhere, so you never have to worry about losing them again.",
    feature_sync_title: "Cross-platform Sync",
    feature_sync_desc: "Supporting multiple devices, your files will automatically sync across all your devices, ensuring you always have the latest version.",
    feature_share_title: "Secure Sharing",
    feature_share_desc: "Easily share files or folders with others, with options to set access permissions and password protection to keep your data secure.",
    section_guide_title: "Ufile Feature",
    feature_1_title: "Feature 1: Cloud Resource",
    feature_1_desc: "UFile has opened up the cloud resource platform interface. After teachers log in to their exclusive accounts, the resources uploaded to the cloud resource platform will appear synchronously in the UFile resource library, helping teachers to easily manage various file resources.",
    feature_2_title: "Feature 2: AI Analysis",
    feature_2_desc: "With the help of AI, UFile can quickly analyze various file resources with one click, including documents, pictures, ppt, pdf, etc., and provide insightful analysis reports. It is an indispensable whiteboard software for smart education.",
    feature_3_title: "Feature 3: AI Library",
    feature_3_desc: "UFile has set up a separate AI resource library to store various courseware resources generated by AI. The massive courseware resources help teachers save 80% of their lesson preparation time and create a smarter AI classroom for teachers.",
    feature_4_title: "Feature 4: Real-Time File Previews",
    feature_4_desc: "Preview commonly used file formats like Xmind, Office, JPG, ZIP, VSD, CAD, PSD, Mp3 and Photoshop, etc. Directly within UFile, eliminating the need for additional software.",
    feature_5_title: "Feature 5: Convenient Umind File Integration",
    feature_5_desc: "Enable effortless collaboration between UFile and Umind, the interactive whiteboard software. Easily insert files stored in UFile directly into Umind, simplifying workflows for seamless access and use of documents, images, or other resources on the whiteboard during lessons or presentations.",
    feature_6_title: "Feature 6: Effortless Umind Background Setup",
    feature_6_desc: "Quickly set Umind’s background image directly from UFile. This interactive whiteboard software allows users to save time and customize their whiteboard environment with a single operation, adding convenience to daily tasks.",
    feature_7_title: "Feature 7: Google & Microsoft Cloud Integration",
    feature_7_desc: "Access, save, and manage resources from Google Drive and Microsoft OneDrive directly in UFile. Delete or organize files without switching platforms.",
    feature_8_title: "Feature 8: Built-in 5G Cloud Storage",
    feature_8_desc: "Enjoy secure and high-speed 5G cloud storage, giving you the freedom to save and access files anytime, anywhere.",
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
