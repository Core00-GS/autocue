<template>
  <div class="app-container">
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="header-content">
        <div class="header-icon">
          <el-icon class="magic-icon"><MagicStick /></el-icon>
        </div>
        <div class="header-text">
          <h2 class="page-title">AI 标签生成器</h2>
          <p class="page-description">轻松创建专业的AI绘画提示词，让你的创作更上一层楼！</p>
        </div>
        <div class="header-buttons">
          <el-button type="primary" size="small" class="header-button">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>
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
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  margin-bottom: 30px;
  animation: slideDown 0.6s ease-out;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.header-icon {
  flex-shrink: 0;
}

.magic-icon {
  font-size: 48px;
  color: #667eea;
  animation: rotate 3s linear infinite;
}

.header-text {
  flex: 1;
}

.page-title {
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
}

.page-description {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.header-buttons {
  flex-shrink: 0;
}

.header-button {
  border-radius: 20px !important;
  font-weight: 500 !important;
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  border: none !important;
}

.header-button:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4) !important;
}

/* 主卡片 */
.main-card {
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
  border: none !important;
  overflow: hidden;
  animation: fadeIn 0.8s ease-out;
}

/* 侧边栏菜单 */
.sidebar-menu {
  border-radius: 12px !important;
  overflow: hidden !important;
  background: rgba(84, 92, 100, 0.9) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.menu-item {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  transition: all 0.3s ease !important;
  height: 60px !important;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}

.menu-item.is-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

.menu-item .el-icon {
  font-size: 18px !important;
}

/* 右侧联系栏 */
#kefu {
  position: fixed;
  right: 20px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: slideInRight 0.6s ease-out;
}

.kefu-icon {
  width: 50px;
  height: 50px;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  border: none;
}

.kefu-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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