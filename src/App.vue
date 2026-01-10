<template>
  <div class="app-container">
    <!-- 页面标题 -->
    <div class="page-header">
      <!-- 粒子特效 -->
      <div class="particles-container">
        <div v-for="i in 20" :key="i" class="particle" :class="['small', 'medium', 'large'][i % 3]" :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${4 + Math.random() * 4}s`
        }"></div>
      </div>
      
      <div class="header-content">
        <div class="header-text">
          <h2 class="page-title">AI 标签生成器</h2>
          <p class="page-description">轻松创建专业的AI绘画提示词，让你的创作更上一层楼！</p>
        </div>
      </div>
    </div>

    <!-- 主内容区 -->
    <el-card class="main-card">
      <el-row type="flex" justify="center">
        <el-col :span="4">
          <el-menu 
            router
            background-color="#545c64" 
            text-color="#ffffff"
            :default-active="$route.path"
            style="height: 750px;"
            class="sidebar-menu"
          >
            <el-menu-item index="/" class="menu-item">
              <el-icon><Home /></el-icon>
              <span>首页/生成器</span>
            </el-menu-item>
            <el-menu-item index="/donate" class="menu-item">
              <el-icon><Present /></el-icon>
              <span>打赏/改需求</span>
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
      <el-popover width="200" placement="left-end" trigger="hover" :close-delay="300">
        <p style="text-align: center;"><b>扫一扫联系飞兔小哥</b></p>
        <img src="./assets/wechat.jpg" style="width: 100%; border-radius: 8px;" />
        <template #reference>
          <el-icon class="kefu-icon">
            <User />
          </el-icon>
        </template>
      </el-popover>
      <el-popover width="200" placement="left-end" trigger="hover" :close-delay="300">
        <p style="text-align: center;"><b>扫一扫关注微信公众号</b></p>
        <p style="text-align: center; font-size: 12px; color: #666;">编程自学 技能干货 考证提升</p>
        <img src="./assets/gzh.jpg" style="width: 100%; border-radius: 8px;" />
        <template #reference>
          <el-icon class="kefu-icon">
            <ChatDotRound />
          </el-icon>
        </template>
      </el-popover>
      <el-popover width="200" placement="left-end" trigger="hover" :close-delay="300">
        <p style="text-align: center;"><b>欢迎关注小哥主页</b></p>
        <p style="text-align: center; margin: .2rem 0; font-size: 12px;">CSDN: <el-link href="https://tinygeeker.blog.csdn.net/" target="_blank" type="primary">点击访问➢</el-link></p>
        <p style="text-align: center; margin: .2rem 0; font-size: 12px;">掘金: <el-link href="https://juejin.cn/user/2467756640574845" target="_blank" type="primary">点击访问➢</el-link></p>
        <p style="text-align: center; margin: .2rem 0; font-size: 12px;">思否: <el-link href="https://segmentfault.com/u/tinygeeker" target="_blank" type="primary">点击访问➢</el-link></p>
        <p style="text-align: center; margin: .2rem 0; font-size: 12px;">51CTO: <el-link href="https://blog.51cto.com/tinygeeker" target="_blank" type="primary">点击访问➢</el-link></p>
        <template #reference>
          <el-icon class="kefu-icon">
            <Link />
          </el-icon>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script>
import { Home, Present, Star, CopyDocument, User, ChatDotRound, Link, MagicStick, Refresh } from '@element-plus/icons'

export default {
  components: {
    Home,
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
}

body {
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #333;
}

/* 应用容器 */
.app-container {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

/* 页面标题 */
.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
  backdrop-filter: blur(10px);
  padding: 40px 20px;
  margin-bottom: 30px;
  animation: slideDown 0.6s ease-out;
  position: relative;
  overflow: hidden;
}

/* 粒子容器 */
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.3);
  animation: float 6s ease-in-out infinite;
}

/* 不同大小的粒子 */
.particle.small {
  width: 4px;
  height: 4px;
  animation-duration: 4s;
}

.particle.medium {
  width: 8px;
  height: 8px;
  animation-duration: 6s;
}

.particle.large {
  width: 12px;
  height: 12px;
  animation-duration: 8s;
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
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  animation: glow 2s ease-in-out infinite alternate;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.page-description {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  animation: fadeInUp 1s ease-out 0.3s both;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
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
  border-radius: 16px !important;
  overflow: hidden !important;
  background: rgba(84, 92, 100, 0.95) !important;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15) !important;
  backdrop-filter: blur(10px) !important;
}

.menu-item {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  transition: all 0.3s ease !important;
  height: 65px !important;
  font-size: 16px !important;
  border-left: 4px solid transparent !important;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.15) !important;
  border-left-color: rgba(102, 126, 234, 0.5) !important;
  transform: translateX(5px) !important;
}

.menu-item.is-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  border-left-color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4) !important;
}

.menu-item .el-icon {
  font-size: 20px !important;
  margin-left: 10px !important;
}

.menu-item span {
  font-weight: 500 !important;
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
  gap: 20px;
  animation: slideInRight 0.6s ease-out;
}

.kefu-icon {
  width: 56px;
  height: 56px;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
  transition: all 0.3s ease;
  border: none;
  backdrop-filter: blur(10px);
}

.kefu-icon:hover {
  transform: scale(1.15);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.7);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
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
}
</style>