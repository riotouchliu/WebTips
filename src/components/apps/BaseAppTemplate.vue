<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface FeatureTemplate {
  title: string,
  desc: string;
  url?: string;
}

interface StepTemplate {
  title: string;
  desc: string;
  url?: string;
}

interface AppBaseDataTemple {
  title: string;
  subtitle?: string;
  section_intro_title?: string;
  section_intro_para1?: string;
  section_intro_para2?: string;
  section_intro_url?: string;
  feature_title?: string;
  feature_list?: FeatureTemplate[];
  step_title?: string;
  step_list?: StepTemplate[];
}

interface BaseDataTranslation {
  [key: string]: AppBaseDataTemple;
}


const datas = ref<BaseDataTranslation>({
  zh: {
    title: 'URecord',
    subtitle: '',
    section_intro_title: 'UPlay：您的多合一媒体播放解决方案',
    section_intro_para1: 'UPlay以卓越的质量提供无缝和多功能的视频播放。支持各种来源，同时保持原始清晰度。自定义播放列表、播放顺序，甚至通过一键截图捕获令人惊叹的帧。无论是娱乐、教育还是演示，UPlay都能提供流畅、引人入胜和动态的媒体体验。',
    section_intro_url: '',
    feature_title: 'URecord 特性',
    feature_list: [
      {
        title: '1: 实时注释记录',
        desc: '录音笔支持录制过程中的实时注释和笔记，有助于强调关键内容，让视频更易懂，提升整体表达效果。',
        url: 'https://riotouch.com/upload_img/products/91/fcbac41056efca3cbdfa6509e7a983.webp'
      },
       {
        title: '2: 4K屏幕录制',
        desc: '支持4K高清屏幕录制，精准捕捉内容，完美还原每一个细节，无论是课堂教学还是商务会议，该函数都是满足您教学或会议质量需求的理想选择。',
        url: 'https://riotouch.com/upload_img/products/91/fcbac41056efca3cbdfa6509e7a983.webp'
      },
      {
        title: '3: 本地云存储',
        desc: '支持4K高清屏幕录制，精准捕捉内容，完美还原每一个细节，无论是课堂教学还是商务会议，该函数都是满足您教学或会议质量需求的理想选择。',
        url: 'https://riotouch.com/upload_img/products/91/fcbac41056efca3cbdfa6509e7a983.webp'
      },
      {
        title: '4: 集成UMind',
        desc: 'URecord支持Ufile的二维码分享函数，为录制的文件生成专属二维码，实现便捷高效的视频分享。',
        url: 'https://riotouch.com/upload_img/products/91/fcbac41056efca3cbdfa6509e7a983.webp'
      }
    ]
  },
  en : {
    title: 'URecord',
    subtitle: '',
    section_intro_title: 'UPlay：您的多合一媒体播放解决方案',
    section_intro_para1: 'UPlay以卓越的质量提供无缝和多功能的视频播放。支持各种来源，同时保持原始清晰度。自定义播放列表、播放顺序，甚至通过一键截图捕获令人惊叹的帧。无论是娱乐、教育还是演示，UPlay都能提供流畅、引人入胜和动态的媒体体验。',
    section_intro_url: '',
    feature_title: 'URecord 特性',
    feature_list: [
      {
        title: '1: Real-time Annotations Recording',
        desc: 'The recording pen supports real-time annotations and notes during the recording process, helping to emphasize key content, making the video more understandable and improving the overall expression effect.',
        url: 'https://riotouch.com/upload_img/products/91/fcbac41056efca3cbdfa6509e7a983.webp'
      },
      {
        title: '2: 4K Screen Recording',
        desc: 'The recording pen supports real-time annotations and notes during the recording process, helping to emphasize key content, making the video more understandable and improving the overall expression effect.',
        url: 'https://riotouch.com/upload_img/products/91/fcbac41056efca3cbdfa6509e7a983.webp'
      },
      {
        title: '3: Local Cloud Storage',
        desc: 'Supports 4K high-definition screen recording, accurately captures content, and perfectly restores every detail. Whether it is classroom teaching or business meetings, this function is an ideal choice to meet your teaching or meeting quality needs.',
        url: 'https://riotouch.com/upload_img/products/91/fcbac41056efca3cbdfa6509e7a983.webp'
      },
      {
        title: '4: Ufile QR code sharing',
        desc: 'Urecord supports Ufile s QR code sharing function, which generates exclusive QR codes for recorded files to achieve convenient and efficient video sharing.',
        url: 'https://riotouch.com/upload_img/products/91/fcbac41056efca3cbdfa6509e7a983.webp'
      }
    ]
  }
})


// 定义语言数据
interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  zh: {
    title: "URecord",
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
    step_start_title: "1: 实时注释记录",
    step_start_desc: "录音笔支持录制过程中的实时注释和笔记，有助于强调关键内容，让视频更易懂，提升整体表达效果。",
    step_annotate_title: "2: 4K屏幕录制",
    step_annotate_desc: "支持4K高清屏幕录制，精准捕捉内容，完美还原每一个细节，无论是课堂教学还是商务会议，该函数都是满足您教学或会议质量需求的理想选择。",
    step_save_title: "3: 本地云存储",
    step_save_desc: "录制后，文件会自动上传并存储在设备的云空间中，让用户随时打开查看或回放，轻松管理重要内容。",
    step_4_title: "4: 集成UMind",
    step_4_desc: "URecord支持Ufile的二维码分享函数，为录制的文件生成专属二维码，实现便捷高效的视频分享。",
    step_5_title: "5: Integrated Umind",
    step_5_desc: "URecord深度整合了UMind，为用户提供更便捷的创作和分享体验。通过直接调用录音函数，用户可以快速捕捉重要内容，无论是教学演示、头脑风暴还是个人创意表达，都可以轻松记录和保存。",
    step_6_title: "6: 全面更新UI界面",
    step_6_desc: "URecord的用户界面进行了全面升级，以更现代直观的设计提升用户体验，优化的布局和流畅的交互帮助您轻松控制录制过程的每一步，创造更高效便捷的操作环境，让每一次使用都更愉快。",
  },
  en: {
    title: "URecord",
    subtitle: "",
    section_intro_title: "URecord：您的终极录音解决方案",
    section_intro_para1: "URecord是一款多功能录音软件，专为无缝内容捕捉而设计。它支持4K超清晰录音，确保每一个细节都得到保留。与实时注释工具集成，允许用户在录音过程中添加笔记，以增强清晰度。借助升级的、用户友好的UI和云存储接入，管理和共享录音毫不费力。URecord非常适合教育、商业和创意项目，它结合了强大和简单性，以满足多样化的录音需求。",
    section_intro_para2: "",
    section_features_title: "Core Features",
    feature_capture_title: "Freehand Screen Capture",
    feature_capture_desc: "Supports multiple capture modes, including rectangular, polygonal, and freehand drawing, to precisely capture the screen area you need.",
    feature_annotate_title: "Powerful Annotation Tools",
    feature_annotate_desc: "Provides various annotation tools such as pens, text boxes, arrows, rectangles, and mosaics to easily highlight key points.",
    feature_record_title: "Screen Recording",
    feature_record_desc: "Record screen activity with one click, supporting high-definition video output, making it an ideal choice for creating tutorials and demonstrations.",
    section_guide_title: "URecord Feature",
    step_start_title: "1: Real-time Annotations Recording",
    step_start_desc: "The recording pen supports real-time annotations and notes during the recording process, helping to emphasize key content, making the video more understandable and improving the overall expression effect.",
    step_annotate_title: "2: 4K Screen Recording",
    step_annotate_desc: "Supports 4K high-definition screen recording, accurately captures content, and perfectly restores every detail. Whether it is classroom teaching or business meetings, this function is an ideal choice to meet your teaching or meeting quality needs.",
    step_save_title: "3: Local Cloud Storage",
    step_save_desc: "After recording, the file will be automatically uploaded and stored in the device's cloud space, allowing users to open it for viewing or playback at any time and easily manage important content.",
    step_4_title: "4: Ufile QR code sharing",
    step_4_desc: "Urecord supports Ufile's QR code sharing function, which generates exclusive QR codes for recorded files to achieve convenient and efficient video sharing.",
    step_5_title: "5: Integrated Umind",
    step_5_desc: "URecord deeply integrates the UMind to provide users with a more convenient creation and sharing experience. By directly calling the recording function, users can quickly capture important content, whether it is a teaching demonstration, brainstorming, or personal creative expression, they can easily record and save it.",
    step_6_title: "6: Comprehensively Update the UI Interface",
    step_6_desc: "URecord's user interface has been completely upgraded to enhance the user experience with a more modern and intuitive design. The optimized layout and smooth interaction help you easily control every step of the recording process, creating a more efficient and convenient operating environment, making every use more enjoyable.",
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
<template>
  <main class="main-container p-8 custom-shadow">

    <!-- Header Section -->
    <header class="text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-2 pb-4">{{ datas[currentLang].title }}</h1>
      <p class="text-lg text-gray-600 mb-2">{{ datas[currentLang].subtitle }}</p>

      <!-- Language Switcher -->
      <div class="mt-4 mb-4">
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
    <section id="introduction" class="bg-gray-100 p-8 rounded-2xl custom-shadow">
      <h2 class="text-3xl font-bold text-gray-800 pb-4 text-center">{{ datas[currentLang].section_intro_title }}
      </h2>
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <p class="text-base text-gray-700 leading-relaxed mb-4">
            {{ datas[currentLang].section_intro_para1 }}
          </p>
          <p class="text-base text-gray-700 leading-relaxed">
            {{ datas[currentLang].section_intro_para2 }}
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
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">{{
        datas[currentLang].feature_title }}
      </h2>
      <div v-for="(card,index) in datas[currentLang].feature_list" :key="index" >
        <!-- 特性 -->
        <div :class="{
          'flex flex-col': true,
          'md:flex-row': index % 2 === 0,
          'md:flex-row-reverse': index % 2 !== 0,
          'items-center bg-white p-6 rounded-xl custom-shadow': true
        }">
          <div class="md:w-1/2 md:pr-8 mb-4 md:mb-0"
          :class="{
            'md:w-1/2  mb-4 md:mb-0': true,
            'md:pr-8': index % 2 === 0,
            'md:pl-8': index % 2 !== 0,
          }">
            <h3 class="text-2xl font-semibold text-gray-800 pb-2">{{ card.title }}</h3>
            <p class="text-base text-gray-600">{{ card.desc }}</p>
          </div>
          <div class="md:w-1/2">
            <img :src="card.url"
              :alt="card.title" class="w-full rounded-lg">
          </div>
        </div>
        <p>.</p>
      </div>
    </section>

  </main>
</template>

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
