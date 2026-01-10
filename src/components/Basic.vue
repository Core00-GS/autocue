<template>
    <div class="app-container" style="height: 800px;overflow-y: auto;">
        <span v-for="prompt in prompts">
            <span v-if="prompt.visible">
                <el-divider content-position="left">{{ prompt.name }}</el-divider>
                <span v-for="item in prompt.items" class="prompt">
                    <el-button type="danger" v-if="setting.down" @click="downWeight(item)" plain>
                        <el-icon>
                            <Remove />
                        </el-icon>
                    </el-button>
                    <el-button type="success" v-if="setting.up" @click="upWeight(item)" plain>
                        <el-icon>
                            <CirclePlus />
                        </el-icon>
                    </el-button>
                    <el-button :type="item.checked ? 'primary' : ''" @click="selectPrompt(item);" plain>
                        <span v-if="setting.en">{{ item.en }}</span>
                        <span v-if="setting.zh">「{{ item.zh }}」</span>
                    </el-button>
                </span>
            </span>
        </span>
    </div>
</template>
  
<script>
import prompts from '../data/basic'

export default {
    name: 'Style',
    props: {
        setting: Object,
        vprompts: Array
    },
    data() {
        return {}
    },
    created() {
        prompts.forEach(prompt => {
            prompt.items.forEach(item => {
                // 查找是否存在匹配的对象
                const match = this.vprompts.find(i => i.en === item.en);
                // 设置 checked 字段
                item.checked = match ? true : false;
            });
        });
    },
    watch: {
        'vprompts': function (newValue) {
            const normalArray = Array.from(newValue);
            prompts.forEach(prompt => {
                prompt.items.forEach(item => {
                    // 查找是否存在匹配的对象
                    const match = normalArray.find(i => i.en === item.en);
                    // 设置 checked 字段
                    item.checked = match ? true : false;
                });
            });
        }
    },
    methods: {
        downWeight(item) {
            if (item.en.startsWith('(') && item.en.endsWith(')')) {
                item.en = item.en.substring(1, item.en.length - 1)
            } else {
                item.en = `[${item.en}]`
            }
            this.$forceUpdate()
        },
        upWeight(item) {
            if (item.en.startsWith('[') && item.en.endsWith(']')) {
                item.en = item.en.substring(1, item.en.length - 1)
            } else {
                item.en = `(${item.en})`
            }
            this.$forceUpdate()
        },
        selectPrompt(item) {
            item.checked = !item.checked
            this.$forceUpdate()
            
            this.$emit('selectPrompt', item)
        }
    },
    computed: {
        prompts: function () {
            return prompts.map((item) => {
                if (this.setting.adult) {
                    if (item.range == 'adult') {
                        item.visible = true
                    }
                } else {
                    if (item.range == 'adult') {
                        item.visible = false
                    }
                }

                return item
            });
        }
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-container {
  padding: 20px;
  margin: 10px;
  background: #f8f9fa;
  border-radius: 12px;
}

.el-divider {
  margin: 20px 0 !important;
}

.el-divider__text {
  font-size: 16px !important;
  font-weight: 600 !important;
  color: #667eea !important;
  background: #f8f9fa !important;
  padding: 0 15px !important;
}

.prompt {
  margin: 4px;
  display: inline-block;
}

.el-button {
  margin: 6px !important;
  border-radius: 20px !important;
  padding: 6px 16px !important;
  font-size: 14px !important;
  transition: all 0.3s ease !important;
  border-width: 2px !important;
}

.el-button:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2) !important;
}

.el-button--primary.is-plain {
  border-color: #667eea !important;
  color: #667eea !important;
}

.el-button--primary.is-plain:hover {
  background: #667eea !important;
  color: white !important;
}

.el-button--success.is-plain {
  border-color: #67c23a !important;
  color: #67c23a !important;
}

.el-button--success.is-plain:hover {
  background: #67c23a !important;
  color: white !important;
}

.el-button--danger.is-plain {
  border-color: #f56c6c !important;
  color: #f56c6c !important;
}

.el-button--danger.is-plain:hover {
  background: #f56c6c !important;
  color: white !important;
}
</style>