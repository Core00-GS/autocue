<template>
  <div class="home-container">
    <!-- 主内容区 -->
    <el-row type="flex" justify="center" :gutter="30" class="main-content">
      <!-- 左侧提示词生成区 -->
      <el-col :span="12">
        <el-card class="prompt-card" shadow="hover" :body-style="{ padding: '24px' }">
          <!-- 正向预览 -->
          <el-form ref="form" :model="form" label-position="top">
            <el-form-item label="🌟 正向预览">
              <div class="prompt-preview positive-preview">
                <el-tag 
                  :key="prompt" 
                  v-for="prompt in this.form.vprompts" 
                  type="success" 
                  :closable="setting.del"
                  @close="closePrompt(prompt)" 
                  class="prompt-tag"
                >
                  <span v-if="setting.en">{{ prompt.en }}</span>
                  <span v-if="setting.zh">「{{ prompt.zh }}」</span>
                </el-tag>
              </div>
            </el-form-item>

            <!-- 正向标签 -->
            <el-form-item>
              <template v-slot:label>
                <div class="form-label">
                  <span>✨ 正向标签</span>
                  <el-tooltip placement="top" content="根据使用场景在右侧选择标签">
                    <el-icon class="tooltip-icon"><QuestionFilled /></el-icon>
                  </el-tooltip>
                </div>
              </template>
              <el-input 
                v-model="form.prompts" 
                type="textarea" 
                :rows="5" 
                placeholder="生成的提示词将显示在这里..." 
                maxlength="9999"
                show-word-limit 
                class="prompt-input"
              />
            </el-form-item>

            <!-- 正向标签操作按钮 -->
            <el-form-item class="form-buttons">
              <el-button type="primary" @click="copyPrompt" class="action-button primary-button">
                <el-icon><DocumentCopy /></el-icon>
                复制
              </el-button>
              <el-button type="warning" @click="cancelPrompts" class="action-button warning-button">
                <el-icon><Delete /></el-icon>
                清空
              </el-button>
              <el-button @click="initPrompts" class="action-button default-button">
                <el-icon><Refresh /></el-icon>
                默认
              </el-button>
              <el-button type="danger" v-if="setting.adult" @click="adultPrompt" class="action-button danger-button">
                <el-icon><Lock /></el-icon>
                大人默认
              </el-button>
            </el-form-item>

            <!-- 反向预览 -->
            <el-form-item label="🚫 反向预览">
              <div class="prompt-preview negative-preview">
                <el-tag 
                  :key="prompt" 
                  v-for="prompt in this.form.vnegative_prompts" 
                  type="danger" 
                  :closable="setting.del"
                  @close="closeNegativePrompt(prompt)" 
                  class="prompt-tag"
                >
                  <span v-if="setting.en">{{ prompt.en }}</span>
                  <span v-if="setting.zh">「{{ prompt.zh }}」</span>
                </el-tag>
              </div>
            </el-form-item>

            <!-- 反向标签 -->
            <el-form-item>
              <template v-slot:label>
                <div class="form-label">
                  <span>💥 反向标签</span>
                  <el-tooltip placement="top" content="反向提示词基本万能，无需修改">
                    <el-icon class="tooltip-icon"><QuestionFilled /></el-icon>
                  </el-tooltip>
                </div>
              </template>
              <el-input 
                v-model="form.negative_prompts" 
                type="textarea" 
                :rows="5" 
                placeholder="反向提示词将显示在这里..." 
                maxlength="9999"
                show-word-limit 
                class="prompt-input"
              />
            </el-form-item>

            <!-- 反向标签操作按钮 -->
            <el-form-item class="form-buttons">
              <el-button type="primary" @click="copyNegativePrompt" class="action-button primary-button">
                <el-icon><DocumentCopy /></el-icon>
                复制
              </el-button>
              <el-button @click="initNegativePrompts" class="action-button default-button">
                <el-icon><Refresh /></el-icon>
                默认
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <!-- 右侧标签选择区 -->
      <el-col :span="12">
        <el-card class="tags-card" shadow="hover" :body-style="{ padding: '24px' }">
          <!-- 设置开关 -->
          <div class="settings-section">
            <h3 class="section-title">⚙️ 标签设置</h3>
            <el-space wrap class="settings-switches">
              <el-switch v-model="setting.en" inactive-text="英文" disabled class="setting-switch" />
              <el-switch v-model="setting.zh" inactive-text="中文" class="setting-switch" />
              <el-switch v-model="setting.down" inactive-text="降权" class="setting-switch" />
              <el-switch v-model="setting.up" inactive-text="加权" class="setting-switch" />
              <el-switch v-model="setting.del" inactive-text="删除" class="setting-switch" />
              <el-switch v-model="setting.adult" inactive-text="大人" class="setting-switch" />
            </el-space>
          </div>

          <!-- 标签分类 -->
          <div class="tags-section">
            <el-tabs tabPosition="left" v-model="activeName" class="tags-tabs">
              <el-tab-pane label="🏠 基础" name="basic">
                <Basic :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="🌍 环境" name="environment">
                <Environment :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="🎨 风格" name="style">
                <Style :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="👤 人物" name="character">
                <Character :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="💇 头发" name="hair">
                <Hair :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="😊 脸部" name="face">
                <Face :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="✋ 手部" name="hand">
                <Hand :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="👙 胸部" name="chest">
                <Chest :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="🦵 腿部" name="foot">
                <Foot :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="👗 服饰" name="dress">
                <Dress :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="💃 动作" name="action">
                <Action :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
              <el-tab-pane label="🤖 机甲" name="mecha">
                <Mecha :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import Clipboard from 'clipboard'
import { 
  QuestionFilled, 
  DocumentCopy, 
  Delete, 
  Refresh, 
  Lock
} from '@element-plus/icons'

import Basic from '../components/Basic.vue'
import Environment from '../components/Environment.vue'
import Style from '../components/Style.vue'
import Character from '../components/Character.vue'
import Hair from '../components/Hair.vue'
import Face from '../components/Face.vue'
import Hand from '../components/Hand.vue'
import Chest from '../components/Chest.vue'
import Foot from '../components/Foot.vue'
import Dress from '../components/Dress.vue'
import Action from '../components/Action.vue'
import Mecha from '../components/Mecha.vue'

export default {
  name: 'Home',
  components: {
    Basic,
    Environment,
    Style,
    Character,
    Hair,
    Face,
    Hand,
    Chest,
    Foot,
    Dress,
    Action,
    Mecha,
    QuestionFilled,
    DocumentCopy,
    Delete,
    Refresh,
    Lock
  },
  data() {
    return {
      activeName: 'basic',
      prompts: [
        { en: 'masterpiece', zh: '大师作品' },
        { en: 'best quality', zh: '最佳品质' },
        { en: 'top quality', zh: '最高质量' },
        { en: 'ultra highres', zh: '超高分辨率' },
        { en: '8k hdr', zh: '8k分辨率' },
        { en: '8k wallpaper', zh: '壁纸画质' },
        { en: 'RAW', zh: 'RAW照片' },
        { en: 'huge file size', zh: '大文件' },
        { en: 'intricate details', zh: '真实感' },
        { en: 'sharp focus', zh: '清晰聚焦' },
        { en: 'natural lighting', zh: '自然光线' },
        { en: 'realistic', zh: '写实' },
        { en: 'professional', zh: '专业的' },
        { en: 'delicate', zh: '精美' },
        { en: 'amazing', zh: '令人惊叹' },
        { en: 'CG', zh: '游戏CG' },
        { en: 'finely detailed', zh: '精细' },
        { en: 'beautiful detailed', zh: '细节' },
        { en: 'colourful', zh: '丰富多彩' },
      ],
      negative_prompts: [
        { en: 'paintings', zh: '绘画' },
        { en: 'sketches', zh: '素描' },
        { en: 'lowres', zh: '低分辨率' },
        { en: 'normal quality', zh: '普通质量' },
        { en: 'worst quality', zh: '差质量' },
        { en: 'low quality', zh: '低质量' },
        { en: 'cropped', zh: '裁剪' },
        { en: 'dot', zh: '斑点' },
        { en: 'mole', zh: '痣' },
        { en: 'ugly', zh: '丑陋' },
        { en: 'grayscale', zh: '灰度' },
        { en: 'monochrome', zh: '单色' },
        { en: 'duplicate', zh: '重复' },
        { en: 'morbid', zh: '病态' },
        { en: 'mutilated', zh: '残缺' },
        { en: 'missing fingers', zh: '缺失的手指' },
        { en: 'extra fingers', zh: '多余的手指' },
        { en: 'too many fingers', zh: '过多的手指' },
        { en: 'fused fingers', zh: '融合的手指' },
        { en: 'mutated hands', zh: '变异的手' },
        { en: 'bad hands', zh: '错误的手' },
        { en: 'poorly drawn hands', zh: '画的差的手' },
        { en: 'poorly drawn face', zh: '画的差的脸' },
        { en: 'poorly drawn eyebrows', zh: '画的差的眉毛' },
        { en: 'bad anatomy', zh: '错误的人体构造' },
        { en: 'cloned face', zh: '克隆脸' },
        { en: 'long neck', zh: '长脖子' },
        { en: 'extra legs', zh: '多余的腿' },
        { en: 'extra arms', zh: '多臂' },
        { en: 'missing arms missing legs', zh: '缺胳膊缺腿' },
        { en: 'malformed limbs', zh: '肢体畸形' },
        { en: 'deformed', zh: '变形' },
        { en: 'simple background', zh: '简单的背景' },
        { en: 'bad proportions', zh: '比例失调' },
        { en: 'disfigured', zh: '毁容' },
        { en: 'skin spots', zh: '皮肤斑点' },
        { en: 'skin blemishes', zh: '皮肤瑕疵' },
        { en: 'age spot', zh: '老年斑' },
        { en: 'bad feet', zh: '坏的脚' },
        { en: 'error', zh: '错误' },
        { en: 'text', zh: '文字' },
        { en: 'extra digit', zh: '多余的数字' },
        { en: 'fewer digits', zh: '更少的数字' },
        { en: 'jpeg artifacts', zh: '人造图' },
        { en: 'signature', zh: '签名' },
        { en: 'username', zh: '用户名' },
        { en: 'blurry', zh: '模糊' },
        { en: 'watermark', zh: '水印' },
        { en: 'mask', zh: '面罩' },
        { en: 'logo', zh: '徽标' },
      ],
      adult_prompts: [
        { en: 'masterpiece', zh: '大师作品' },
        { en: 'best quality', zh: '最佳品质' },
        { en: 'top quality', zh: '最高质量' },
        { en: 'ultra highres', zh: '超高分辨率' },
        { en: '8k hdr', zh: '8k分辨率' },
        { en: '8k wallpaper', zh: '壁纸画质' },
        { en: 'RAW', zh: 'RAW照片' },
        { en: 'huge file size', zh: '大文件' },
        { en: 'intricate details', zh: '真实感' },
        { en: 'sharp focus', zh: '清晰聚焦' },
        { en: 'natural lighting', zh: '自然光线' },
        { en: 'realistic', zh: '写实' },
        { en: 'real', zh: '真实' },
        { en: 'professional', zh: '专业的' },
        { en: 'delicate', zh: '精美' },
        { en: 'amazing', zh: '令人惊叹' },
        { en: 'CG', zh: '游戏CG' },
        { en: 'finely detailed', zh: '精细' },
        { en: 'beautiful detailed', zh: '细节' },
        { en: 'colourful', zh: '丰富多彩' },
        { en: 'humiliation', zh: '羞耻的' },
        { en: 'gorgeous', zh: '华丽的' },
        { en: 'clean skin', zh: '干净的皮肤' },
        { en: 'perfect skin', zh: '完美的皮肤' },
        { en: 'perfect body', zh: '完美的身体' },
        { en: 'sexy', zh: '性感的' },
        { en: 'lewd', zh: 'yin乱' },
        { en: 'thighhighs', zh: '大腿' },
        { en: 'erotic', zh: '涩情' },
        { en: 'no bra', zh: '不穿胸罩' },
        { en: 'breasts out', zh: '露胸' },
        { en: 'medium breasts', zh: '大小合适的胸' },
        { en: 'medium nipples', zh: '大小合适的乳头' },
        { en: 'partially unbuttoned', zh: '解开部分扣子' },
        { en: 'no panties', zh: '不穿短裤' },
        { en: 'undressing', zh: '脱裙子' },
        { en: 'skirt lift', zh: '提起裙子' },
        { en: 'shirt lift', zh: '提起衬衫' },
      ],
      setting: {
        en: true,
        zh: false,
        down: false,
        up: false,
        del: false,
        cut: false,
        adult: false
      },
      form: {
        prompts: '',
        negative_prompts: '',
        vprompts: [],
        vnegative_prompts: []
      }
    }
  },
  created() {
    /* 数据复制 */
    this.form.vprompts = Array.from(this.prompts)
    this.form.prompts = this.disposePrompts(this.form.vprompts)
    this.form.vnegative_prompts = Array.from(this.negative_prompts)
    this.form.negative_prompts = this.disposePrompts(this.form.vnegative_prompts)
  },
  methods: {
    disposePrompts: function (prompts) {
      return prompts.map(prompt => prompt.en).join(', ')
    },
    adultPrompt: function () {
      this.form.vprompts = Array.from(this.adult_prompts)
      this.form.prompts = this.disposePrompts(this.form.vprompts)
    },
    cancelPrompts: function () {
      this.form.vprompts = []
      this.form.prompts = ''
    },
    initPrompts: function () {
      this.form.vprompts = Array.from(this.prompts)
      this.form.prompts = this.disposePrompts(this.form.vprompts)
    },
    initNegativePrompts: function () {
      this.form.vnegative_prompts = Array.from(this.negative_prompts)
      this.form.negative_prompts = this.disposePrompts(this.form.vnegative_prompts)
    },
    closePrompt(prompt) {
      const index = this.form.vprompts.findIndex(item => item.en === prompt.en);
      if (index !== -1) {
        this.form.vprompts.splice(index, 1);
        this.form.prompts = this.disposePrompts(this.form.vprompts)
      }
    },
    closeNegativePrompt(prompt) {
      const index = this.form.vnegative_prompts.findIndex(item => item.en === prompt.en);
      if (index !== -1) {
        this.form.vnegative_prompts.splice(index, 1);
        this.form.negative_prompts = this.disposePrompts(this.form.vnegative_prompts)
      }
    },
    copyPrompt: function () {
      let that = this
      let clipboard = new Clipboard('.copyBtn', {
        text: function () {
          //返回要复制的文本
          return that.form.prompts
        }
      })
      clipboard.on('success', () => {
        ElMessage.success('复制成功');
        //释放内存
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        ElMessage.error('复制失败');
        //释放内存
        clipboard.destroy()
      })
    },
    copyNegativePrompt: function () {
      let that = this
      let clipboard = new Clipboard('.copyBtn', {
        text: function () {
          //返回要复制的文本
          return that.form.negative_prompts
        }
      })
      clipboard.on('success', () => {
        ElMessage.success('复制成功');
        //释放内存
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        ElMessage.error('复制失败');
        //释放内存    
        clipboard.destroy()
      })
    },
    selectPrompt: function (data) {
      let prompt = { en: data.en, zh: data.zh }

      /* 仅英文判断 */
      if (data.checked) {
        if(!this.form.vprompts.some(item => item.en === prompt.en)) {
          this.form.vprompts.push(prompt)
          this.form.prompts = this.disposePrompts(this.form.vprompts)
        }
      } else {
        if(this.form.vprompts.some(item => item.en === prompt.en)) {
          const index = this.form.vprompts.findIndex(item => item.en === prompt.en);
          if (index !== -1) {
            this.form.vprompts.splice(index, 1);
            this.form.prompts = this.disposePrompts(this.form.vprompts)
          }
        }
      }
    }
  },
}
</script>

<style scoped>
/* 页面容器 */
.home-container {
  padding: 20px;
  animation: fadeIn 0.8s ease-out;
}



/* 主内容区 */
.main-content {
  margin-top: 20px;
}

/* 提示词卡片 */
.prompt-card {
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
  border: none !important;
  overflow: hidden;
  animation: slideInLeft 0.6s ease-out;
}

/* 标签卡片 */
.tags-card {
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
  border: none !important;
  overflow: hidden;
  animation: slideInRight 0.6s ease-out;
  height: 750px;
}

/* 表单标签 */
.form-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
}

.tooltip-icon {
  font-size: 16px;
  cursor: help;
  color: #667eea;
}

/* 提示词预览 */
.prompt-preview {
  width: 100%;
  min-height: 100px;
  max-height: 120px;
  overflow-y: auto;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 15px;
  background: rgba(240, 242, 245, 0.8);
  border: 1px solid #e4e7ed;
}

.positive-preview {
  background: linear-gradient(135deg, rgba(221, 244, 216, 0.8), rgba(240, 242, 245, 0.8));
  border-color: #c2e7b0;
}

.negative-preview {
  background: linear-gradient(135deg, rgba(255, 221, 220, 0.8), rgba(240, 242, 245, 0.8));
  border-color: #ffccc7;
}

/* 提示词标签 */
.prompt-tag {
  margin: 4px !important;
  font-size: 14px !important;
  border-radius: 16px !important;
  padding: 4px 12px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease !important;
}

.prompt-tag:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

/* 提示词输入框 */
.prompt-input {
  border-radius: 12px !important;
  border: 2px solid #e4e7ed !important;
  transition: all 0.3s ease !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
}

.prompt-input:focus {
  border-color: #667eea !important;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2) !important;
}

/* 表单按钮 */
.form-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.action-button {
  border-radius: 20px !important;
  padding: 8px 20px !important;
  font-weight: 500 !important;
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  transition: all 0.3s ease !important;
}

.primary-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  border: none !important;
  color: white !important;
}

.primary-button:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4) !important;
}

.warning-button {
  border-color: #faad14 !important;
  color: #faad14 !important;
}

.warning-button:hover {
  background: #faad14 !important;
  color: white !important;
}

.default-button {
  border-color: #d9d9d9 !important;
  color: #666 !important;
}

.default-button:hover {
  border-color: #667eea !important;
  color: #667eea !important;
}

.danger-button {
  border-color: #ff4d4f !important;
  color: #ff4d4f !important;
}

.danger-button:hover {
  background: #ff4d4f !important;
  color: white !important;
}

/* 设置区域 */
.settings-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.settings-switches {
  background: rgba(240, 242, 245, 0.8);
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e4e7ed;
}

.setting-switch {
  margin: 8px !important;
  transition: all 0.3s ease !important;
}

/* 标签区域 */
.tags-section {
  margin-top: 20px;
}

.tags-tabs {
  height: 600px;
  border-radius: 12px !important;
  overflow: hidden !important;
}

.tags-tabs .el-tabs__header {
  background: rgba(240, 242, 245, 0.8);
  border-right: 1px solid #e4e7ed;
  padding: 10px 0;
}

.tags-tabs .el-tabs__item {
  font-size: 14px;
  font-weight: 500;
  margin: 5px 0;
  padding: 12px 16px;
  border-radius: 8px 0 0 8px;
  transition: all 0.3s ease;
}

.tags-tabs .el-tabs__item:hover {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.tags-tabs .el-tabs__item.is-active {
  color: #667eea;
  font-weight: 600;
  background: rgba(102, 126, 234, 0.1);
  border-right: 3px solid #667eea;
}

.tags-tabs .el-tabs__content {
  padding: 20px;
  background: white;
  overflow-y: auto;
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .home-container {
    padding: 10px;
  }
  
  .page-title {
    font-size: 24px;
  }
  
  .form-buttons {
    flex-direction: column;
  }
  
  .action-button {
    width: 100%;
    justify-content: center;
  }
  
  .tags-card {
    height: auto;
    min-height: 600px;
  }
  
  .tags-tabs {
    height: 500px;
  }
}
</style>