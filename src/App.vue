<template>
  <div class="app-container">
    <!-- 全局粒子特效 -->
    <div class="global-particles">
      <div v-for="i in 30" :key="i" class="particle" :class="['small', 'medium', 'large'][i % 3]" :style="{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${4 + Math.random() * 4}s`
      }"></div>
    </div>
    
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="header-content">
        <div class="header-text">
          <h2 class="page-title">AI 标签生成器</h2>
          <p class="page-description">轻松创建专业的AI绘画提示词，让你的创作更上一层楼！</p>
        </div>
      </div>
    </div>

    <!-- 主内容区 -->
    <el-card class="main-card" :body-style="{ padding: '20px' }">
      <el-row type="flex" justify="start" :gutter="20">
        <el-col :span="4">
          <el-menu 
            router
            background-color="#545c64" 
            text-color="#ffffff"
            :default-active="$route.path"
            class="sidebar-menu"
          >
            <el-menu-item index="/" class="menu-item">
              <el-icon><HomeFilled /></el-icon>
              <span>提词器</span>
            </el-menu-item>
            <el-menu-item index="/donate" class="menu-item">
              <el-icon><Present /></el-icon>
              <span>求打赏</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-card>

    <!-- 右侧联系栏 -->
    <div id="kefu">
      <el-popover width="220" placement="left-end" trigger="hover" :close-delay="300" popper-class="custom-popover">
        <div class="popover-content">
          <h4 class="popover-title">扫一扫联系</h4>
          <div class="popover-image">
            <img src="./assets/wechat.jpg" style="width: 100%; border-radius: 8px;" />
          </div>
        </div>
        <template #reference>
          <div class="kefu-button">
            <el-icon><ChatLineSquare /></el-icon>
            <span>联系我</span>
          </div>
        </template>
      </el-popover>
      <el-popover width="220" placement="left-end" trigger="hover" :close-delay="300" popper-class="custom-popover">
        <div class="popover-content">
          <h4 class="popover-title">扫一扫关注微信公众号</h4>
          <p class="popover-description">编程自学 技能干货 考证提升</p>
          <div class="popover-image">
            <img src="./assets/gzh.jpg" style="width: 100%; border-radius: 8px;" />
          </div>
        </div>
        <template #reference>
          <div class="kefu-button">
            <el-icon><Bell /></el-icon>
            <span>公众号</span>
          </div>
        </template>
      </el-popover>
      <el-popover width="220" placement="left-end" trigger="hover" :close-delay="300" popper-class="custom-popover">
        <div class="popover-content">
          <h4 class="popover-title">欢迎关注小哥主页</h4>
          <div class="popover-links">
            <p class="popover-link-item">CSDN: <el-link href="https://tinygeeker.blog.csdn.net/" target="_blank" type="primary">点击访问➢</el-link></p>
            <p class="popover-link-item">掘金: <el-link href="https://juejin.cn/user/2467756640574845" target="_blank" type="primary">点击访问➢</el-link></p>
            <p class="popover-link-item">思否: <el-link href="https://segmentfault.com/u/tinygeeker" target="_blank" type="primary">点击访问➢</el-link></p>
            <p class="popover-link-item">51CTO: <el-link href="https://blog.51cto.com/tinygeeker" target="_blank" type="primary">点击访问➢</el-link></p>
          </div>
        </div>
        <template #reference>
          <div class="kefu-button">
            <el-icon><Link /></el-icon>
            <span>个人主页</span>
          </div>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script>
import { HomeFilled, Present, Star, CopyDocument, User, ChatDotRound, Link, MagicStick, Refresh } from '@element-plus/icons'

export default {
  components: {
    HomeFilled,
    Present,
    Star,
    CopyDocument,
    User,
    ChatDotRound,
    Link,
    MagicStick,
    Refresh
  }
}
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  resize: none !important;
}

body {
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, 'Microsoft YaHei', sans-serif;
  background: linear-gradient(135deg, #f5f7ff 0%, #eef0ff 100%);
  min-height: 100vh;
  color: #333;
  overflow-x: hidden;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 应用容器 */
.app-container {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

/* 页面标题 */
.page-header {
  text-align: center;
  padding: 40px 20px;
  margin-bottom: 30px;
  animation: slideDown 0.6s ease-out;
  position: relative;
  overflow: hidden;
}

/* 全局粒子特效 */
.global-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.3);
  animation: float 6s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
}

/* 不同大小的粒子 */
.particle.small {
  width: 4px;
  height: 4px;
  animation-duration: 4s;
  background: rgba(102, 126, 234, 0.4);
}

.particle.medium {
  width: 8px;
  height: 8px;
  animation-duration: 6s;
  background: rgba(102, 126, 234, 0.5);
}

.particle.large {
  width: 12px;
  height: 12px;
  animation-duration: 8s;
  background: rgba(102, 126, 234, 0.6);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.header-text {
  text-align: center;
  max-width: 800px;
}

.page-title {
  font-size: 48px;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  animation: glow 2s ease-in-out infinite alternate;
  text-shadow: 0 4px 20px rgba(102, 126, 234, 0.5);
  letter-spacing: 2px;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, 'Microsoft YaHei', sans-serif;
}

.page-description {
  font-size: 18px;
  color: #333;
  margin: 0;
  animation: fadeInUp 1s ease-out 0.3s both;
  font-weight: 500;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, 'Microsoft YaHei', sans-serif;
}

/* 主卡片 */
.main-card {
  border-radius: 20px !important;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12) !important;
  border: none !important;
  overflow: hidden;
  animation: fadeIn 0.8s ease-out;
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px) !important;
}

/* 侧边栏菜单 */
.sidebar-menu {
  border-radius: 20px !important;
  overflow: hidden !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4) !important;
  backdrop-filter: blur(15px) !important;
  border: 2px solid rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s ease !important;
  min-height: 750px;
  height: 100%;
  max-height: 800px;
}

.sidebar-menu:hover {
  transform: none !important;
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.6) !important;
}

.menu-item {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  transition: all 0.3s ease !important;
  height: 70px !important;
  font-size: 16px !important;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05) !important;
  margin: 4px 8px !important;
  border-radius: 12px !important;
}

.menu-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
  transition: all 0.4s ease;
}

.menu-item:hover::before {
  left: 100%;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.15) !important;
  transform: none !important;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2) !important;
}

.menu-item.is-active {
  background: rgba(255, 255, 255, 0.25) !important;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3) !important;
}

.menu-item.is-active::before {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
}

.menu-item .el-icon {
  font-size: 22px !important;
  margin-left: 10px !important;
  margin-right: 12px !important;
  transition: all 0.3s ease !important;
  color: rgba(255, 255, 255, 0.9) !important;
}

.menu-item:hover .el-icon {
  transform: none !important;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) !important;
  color: #ffffff !important;
}

.menu-item.is-active .el-icon {
  transform: none !important;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) !important;
  color: #ffffff !important;
}

.menu-item span {
  font-weight: 600 !important;
  color: rgba(255, 255, 255, 0.9) !important;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease !important;
}

.menu-item:hover span {
  color: #ffffff !important;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8) !important;
}

.menu-item.is-active span {
  color: #ffffff !important;
  text-shadow: 0 0 10px rgba(255, 255, 255, 1) !important;
}

/* 右侧联系栏 */
#kefu {
  position: fixed;
  right: 30px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: slideInRight 0.6s ease-out;
}

.kefu-button {
  width: 80px;
  height: 80px;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  transition: all 0.3s ease;
  border: 3px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  text-align: center;
  padding: 10px;
}

.kefu-button:hover {
  transform: scale(1.15);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.8);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  border-color: rgba(255, 255, 255, 0.6);
}

.kefu-button .el-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.kefu-button span {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
}

.kefu-icon {
  width: 60px;
  height: 60px;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  transition: all 0.3s ease;
  border: 3px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.kefu-icon:hover {
  transform: scale(1.2);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.8);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  border-color: rgba(255, 255, 255, 0.6);
}

/* 自定义弹窗样式 */
.custom-popover {
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2) !important;
  border: none !important;
  overflow: hidden !important;
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px) !important;
}

.popover-content {
  padding: 20px;
}

.popover-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  text-align: center;
}

.popover-description {
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
  text-align: center;
  line-height: 1.4;
}

.popover-image {
  margin-top: 10px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.popover-links {
  margin-top: 10px;
}

.popover-link-item {
  font-size: 12px;
  margin: 8px 0;
  padding: 4px 0;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.popover-link-item:hover {
  color: #667eea;
  transform: translateX(5px);
}

/* 动画效果 */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-15px) translateX(10px);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-5px) translateX(-15px);
    opacity: 0.8;
  }
  75% {
    transform: translateY(-20px) translateX(5px);
    opacity: 0.5;
  }
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 2px rgba(102, 126, 234, 0.5));
  }
  to {
    filter: drop-shadow(0 0 15px rgba(102, 126, 234, 0.8));
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px) translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(50%);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app-container {
    padding: 10px;
  }
  
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .header-title {
    margin-left: 0;
  }
  
  .header-title h1 {
    font-size: 24px;
  }
  
  #kefu {
    right: 10px;
  }
  
  .kefu-icon {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
  
  .kefu-button {
    width: 60px;
    height: 60px;
    font-size: 14px;
  }
}

/* 全局滚动条样式优化 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(102, 126, 234, 0.1);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: scale(1.1);
}

/* 为Element Plus表格滚动条添加样式 */
.el-scrollbar__wrap::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.el-scrollbar__wrap::-webkit-scrollbar-track {
  background: rgba(102, 126, 234, 0.1);
  border-radius: 10px;
}

.el-scrollbar__wrap::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.el-scrollbar__wrap::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: scale(1.1);
}
</style>