<template>
  <div class="app-container">

    
    <!-- 打赏图片 -->
    <el-row type="flex" justify="center" :gutter="20" style="margin-bottom: 30px;">
      <el-col :span="20" style="display: flex; justify-content: center; align-items: center;">
        <el-card shadow="hover" :body-style="{ padding: '20px' }" class="donate-card">
          <div class="donate-info">
            <h3>感谢您的支持！</h3>
            <p>您的打赏是我持续更新的动力</p>
          </div>
          <div class="donate-image">
            <el-image 
              style="width: 100%; border-radius: 12px;"
              :src="require('@/assets/donate.jpg')"
              fit="cover"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
    
    <!-- 打赏记录 -->
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="20">
          <el-card shadow="hover" class="records-card">
            <div class="card-header">
              <h3>打赏记录</h3>
              <p>每一份支持都值得被记录</p>
            </div>
            <el-table
              :data="list"
              style="width: 100%"
            >
              <el-table-column
                prop="username"
                label="昵称"
                width="150"
              />
              <el-table-column
                prop="money"
                label="金额"
                width="100"
              />
              <el-table-column
                prop="message"
                label="留言"
                min-width="200"
              />
              <el-table-column
                prop="feedback"
                label="需求"
                min-width="150"
              />
            </el-table>
          </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Donate',
  data() {
    return {
      list: [
        { username: '鸡你太美', money: '0.3', message: '大佬加油啊，希望能加上权重', feedback: '已加' },
        { username: '*壁', money: '0.81', message: '还没有使用，但是先支持。', feedback: '感谢支持' },
        { username: '希**', money: '0.01', message: '希望大佬多出一点常用组合', feedback: '好的，马上出' },
        { username: '忍**', money: '0.5', message: '评价是请尽力做下去', feedback: '会的' },
        { username: '陆**', money: '0.2', message: '求加搜索和英文首字母首排列功能', feedback: '会尽快的' },
        { username: '凨**', money: '0.5', message: '谢谢大佬，支持一下', feedback: '谢谢' },
        { username: '尘**', money: '0.5', message: '希望大佬继续做下去', feedback: '必须的' },
        { username: '堂**', money: '0.3', message: '谢谢你hero', feedback: '不客气' },
        { username: '洛**', money: '0.01', message: '作为一名小白，感谢大佬的分享和整理。', feedback: '感谢支持' },
        { username: '德**', money: '0.01', message: '浅浅的支持一下	', feedback: '谢谢支持' },
        { username: '笑**', money: '0.8', message: '工具很好用', feedback: '会的' },
        { username: '峰**', money: '0.52', message: '好用，替群友感谢你', feedback: '谢谢' },
        { username: '桢**', money: '0.26', message: '膜拜大佬', feedback: '还是成长中的菜鸟' },
      ]
    }
  }
}
</script>

<style scoped>
.app-container {
  padding: 0;
  animation: fadeIn 0.8s ease-out;
  width: 100%;
}

h2 {
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
  text-align: center;
}

/* 打赏卡片 */
.donate-card {
  border-radius: 20px !important;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2) !important;
  overflow: hidden !important;
  transition: all 0.3s ease !important;
  max-width: 600px !important;
}

.donate-card:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.3) !important;
}

.donate-info {
  padding: 20px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  margin-bottom: 20px;
  color: white;
}

.donate-info h3 {
  color: white !important;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.donate-info p {
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 14px;
  margin: 0;
}

.donate-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

/* 记录卡片 */
.records-card {
  border-radius: 20px !important;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2) !important;
  overflow: hidden !important;
}

.card-header {
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #f0f0f0;
}

.card-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 8px;
}

.card-header p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* 表格样式 */
:deep(.el-table) {
  border-radius: 12px !important;
  overflow: hidden !important;
}

:deep(.el-table__header-wrapper) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

:deep(.el-table__header th) {
  color: white !important;
  font-weight: 600 !important;
  text-align: center !important;
}

:deep(.el-table__body tr:hover) {
  background: #f5f7ff !important;
}

:deep(.el-table__row) {
  transition: all 0.3s ease !important;
}

:deep(.el-table__row:hover) {
  transform: translateX(5px) !important;
}

/* 动画效果 */
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

/* 响应式设计 */
@media (max-width: 768px) {
  .app-container {
    padding: 10px;
  }
  
  h2 {
    font-size: 24px;
  }
  
  .settings-grid {
    grid-template-columns: 1fr;
  }
}
</style>