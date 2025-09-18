<script setup lang="ts">
</script>
<template>
    <div class="main-container rounded-2xl p-6 shadow-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      <!-- Left Sidebar -->
      <aside
        class="bg-gray-100 rounded-2xl p-6 shadow-md w-full md:w-1/4 h-fit sticky top-[calc(4rem+2rem)] overflow-y-auto scrollbar-hidden">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">目录</h2>
        <nav>
          <ul class="space-y-4">
            <li>
              <a href="#intro"
                class="flex items-center p-3 rounded-xl hover:bg-gray-200 transition-colors text-gray-600">
                <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>1. Umind 介绍</span>
              </a>
            </li>
            <li>
              <a href="#overview"
                class="flex items-center p-3 rounded-xl hover:bg-gray-200 transition-colors text-gray-600">
                <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>2. Umind 概览</span>
              </a>
            </li>
            <li>
              <a href="#menu"
                class="flex items-center p-3 rounded-xl hover:bg-gray-200 transition-colors text-blue-600 bg-gray-200 font-semibold">
                <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <span>3. 菜单</span>
              </a>
              <ul class="pl-4 mt-2 space-y-2">
                <li><a href="#cloud-disk"
                    class="text-gray-600 hover:text-gray-800 p-2 block rounded-lg transition-colors">3.1 云盘</a></li>
                <li><a href="#open" class="text-gray-600 hover:text-gray-800 p-2 block rounded-lg transition-colors">3.2
                    打开</a></li>
                <li><a href="#save" class="text-gray-600 hover:text-gray-800 p-2 block rounded-lg transition-colors">3.3
                    保存</a></li>
                <li><a href="#export"
                    class="text-gray-600 hover:text-gray-800 p-2 block rounded-lg transition-colors">3.4 导出</a></li>
                <li><a href="#settings"
                    class="text-gray-600 hover:text-gray-800 p-2 block rounded-lg transition-colors">3.5 设置</a>
                  <ul class="pl-4 mt-2 space-y-2">
                    <li><a href="#hand-erasure"
                        class="text-gray-500 hover:text-gray-700 p-2 block rounded-lg transition-colors">3.5.1 手掌擦除</a>
                    </li>
                    <li><a href="#custom-thresholds"
                        class="text-gray-500 hover:text-gray-700 p-2 block rounded-lg transition-colors">3.5.2 自定义阈值</a>
                    </li>
                    <li><a href="#dark-mode"
                        class="text-gray-500 hover:text-gray-700 p-2 block rounded-lg transition-colors">3.5.3 深色模式</a>
                    </li>
                    <li><a href="#translation-settings"
                        class="text-gray-500 hover:text-gray-700 p-2 block rounded-lg transition-colors">3.5.4 翻译设置</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#about"
                    class="text-gray-600 hover:text-gray-800 p-2 block rounded-lg transition-colors">3.6 关于</a></li>
                <li><a href="#quit" class="text-gray-600 hover:text-gray-800 p-2 block rounded-lg transition-colors">3.7
                    退出</a></li>
              </ul>
            </li>
            <li>
              <a href="#sharing"
                class="flex items-center p-3 rounded-xl hover:bg-gray-200 transition-colors text-gray-600">
                <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.683 9.432a3 3 0 00-2.812-4.991A3 3 0 001.32 7.749m5.636-2.126l.206-.207m.08-1.428A12.001 12.001 0 0115 12a12.001 12.001 0 01-1.32 7.749" />
                </svg>
                <span>4. QR 分享</span>
              </a>
            </li>
            <li>
              <a href="#plugins"
                class="flex items-center p-3 rounded-xl hover:bg-gray-200 transition-colors text-gray-600">
                <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 4a2 2 0 100 4m0 12a2 2 0 100-4m8-2a2 2 0 100-4m0 12a2 2 0 100-4M3 6a2 2 0 100-4m0 12a2 2 0 100-4m0 4a2 2 0 100-4m0 12a2 2 0 100-4m8 2a2 2 0 100-4m0 12a2 2 0 100-4" />
                </svg>
                <span>5. 插件</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="w-full md:w-3/4">
        <div class="space-y-12">

          <!-- Section: 1. Umind 介绍 -->
          <section id="intro" class="bg-white rounded-2xl p-6 custom-shadow">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">1. Umind 介绍</h2>
            <p class="text-base text-gray-600 leading-relaxed mb-6">Umind V4.2.2
              是一款强大的白板协作软件。它提供了丰富的工具和功能，帮助你进行头脑风暴、团队协作、演示和教学。本指南将详细介绍 Umind 的各项功能，带你快速上手，轻松掌握。</p>
            <img src="https://placehold.co/1000x500/e2e8f0/64748b?text=Umind介绍" alt="Umind软件介绍"
              class="w-full rounded-lg shadow-md mt-6">
          </section>

          <!-- Section: 2. Umind 概览 -->
          <section id="overview" class="bg-white rounded-2xl p-6 custom-shadow">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">2. Umind 概览</h2>
            <p class="text-base text-gray-600 leading-relaxed mb-6">Umind
              的界面简洁直观，主要由以下几个部分组成：工具栏、菜单栏、主画布和侧边栏。每个部分都有其独特的功能，以支持你的创作和协作流程。</p>
            <img src="https://placehold.co/1000x500/e2e8f0/64748b?text=Umind界面概览" alt="Umind界面概览"
              class="w-full rounded-lg shadow-md mt-6">
          </section>

          <!-- Section: 3. 菜单 -->
          <section id="menu" class="bg-white rounded-2xl p-6 custom-shadow">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">3. 菜单</h2>
            <p class="text-base text-gray-600 leading-relaxed mb-6">菜单栏是 Umind 的控制中心，你可以在这里访问所有重要的功能，包括文件管理、设置和导出选项。</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Card: 3.1 云盘 -->
              <div id="cloud-disk" class="bg-gray-100 rounded-2xl p-6 custom-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 16a2 2 0 01-2-2v-4a2 2 0 012-2h18a2 2 0 012 2v4a2 2 0 01-2 2h-18z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800">3.1 云盘</h3>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">提供将文件保存到云端的功能，方便你在不同设备上同步和访问你的作品。同时，它也支持将文件从云端加载到本地。
                </p>
              </div>
              <!-- Card: 3.2 打开 -->
              <div id="open" class="bg-gray-100 rounded-2xl p-6 custom-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-3-3v6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800">3.2 打开</h3>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">让你能够从本地或云端打开已有的项目文件。你可以选择最近打开的文件，或者通过文件管理器浏览。</p>
              </div>
              <!-- Card: 3.3 保存 -->
              <div id="save" class="bg-gray-100 rounded-2xl p-6 custom-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14 10h4.782m-4.782 0a2 2 0 01-2-2m2 2a2 2 0 002-2m-2 2v2.782m-2-2.782a2 2 0 01-2-2m2 2a2 2 0 002-2m-2 2V14.782m12-2.782a2 2 0 01-2-2m2 2a2 2 0 002-2m-2 2v2.782m-2-2.782a2 2 0 01-2-2m2 2a2 2 0 002-2m-2 2V14.782M8 10h4.782m-4.782 0a2 2 0 01-2-2m2 2a2 2 0 002-2m-2 2v2.782m12-2.782a2 2 0 01-2-2m2 2a2 2 0 002-2m-2 2v2.782" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800">3.3 保存</h3>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">将当前项目保存到云端或本地设备。如果项目尚未命名，系统会提示你输入文件名。</p>
              </div>
              <!-- Card: 3.4 导出 -->
              <div id="export" class="bg-gray-100 rounded-2xl p-6 custom-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800">3.4 导出</h3>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">支持将项目导出为多种文件格式，如图片（JPG/PNG）、PDF 或矢量图。这对于分享和打印非常有用。</p>
              </div>
              <!-- Card: 3.5 设置 -->
              <div id="settings" class="bg-gray-100 rounded-2xl p-6 custom-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.525.323 1.15.543 1.724 1.066z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800">3.5 设置</h3>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">个性化你的 Umind 使用体验，包括手掌擦除、自定义阈值、深色模式和翻译设置。</p>
              </div>
              <!-- Card: 3.6 关于 -->
              <div id="about" class="bg-gray-100 rounded-2xl p-6 custom-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800">3.6 关于</h3>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">查看 Umind 的版本信息和版权声明。</p>
              </div>
              <!-- Card: 3.7 退出 -->
              <div id="quit" class="bg-gray-100 rounded-2xl p-6 custom-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800">3.7 退出</h3>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">退出 Umind 应用程序。</p>
              </div>
            </div>
          </section>

          <!-- Section: 4. QR 分享 -->
          <section id="sharing" class="bg-white rounded-2xl p-6 custom-shadow">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">4. QR 分享</h2>
            <p class="text-base text-gray-600 leading-relaxed mb-6">Umind 支持通过生成二维码来分享你的白板内容，方便他人扫码查看。</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col items-center">
                <img src="https://placehold.co/400x400/e2e8f0/64748b?text=分享当前页面" alt="分享当前页面"
                  class="w-full max-w-sm rounded-lg shadow-md mb-4">
                <h4 class="text-lg font-semibold text-gray-800 mb-2">4.1 分享当前页面</h4>
                <p class="text-sm text-gray-600 text-center">生成一个二维码，分享当前正在编辑的单个页面。</p>
              </div>
              <div class="flex flex-col items-center">
                <img src="https://placehold.co/400x400/e2e8f0/64748b?text=分享所有页面" alt="分享所有页面"
                  class="w-full max-w-sm rounded-lg shadow-md mb-4">
                <h4 class="text-lg font-semibold text-gray-800 mb-2">4.2 分享所有页面</h4>
                <p class="text-sm text-gray-600 text-center">生成一个包含所有页面的二维码，方便分享整个项目。</p>
              </div>
            </div>
          </section>

          <!-- Section: 5. 插件 -->
          <section id="plugins" class="bg-white rounded-2xl p-6 custom-shadow">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">5. 插件</h2>
            <p class="text-base text-gray-600 leading-relaxed mb-6">Umind 提供了多种插件，以扩展其功能，满足不同领域的需求，例如教育、科学和数据可视化。</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Card: 5.1 课件 -->
              <div class="bg-gray-100 rounded-2xl p-6 custom-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 4.5a3 3 0 100 6m0-6a3 3 0 110 6m0-6V21M3 6h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800">5.1 课件</h3>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">集成课件功能，支持账号切换、课件加载和演示。</p>
              </div>
              <!-- Card: 5.2 PHET -->
              <div class="bg-gray-100 rounded-2xl p-6 custom-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800">5.2 PHET</h3>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">提供 PHET 科学模拟实验，让学生和老师在白板上进行互动式学习。</p>
              </div>
              <!-- Card: 5.3 元素周期表 -->
              <div class="bg-gray-100 rounded-2xl p-6 custom-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800">5.3 元素周期表</h3>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">集成元素周期表，方便化学教学和学习。</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
</template>
