# 对话框（Dialog）

## 常用属性

|属性|说明|
|---|---|
|:modal-append-to-body="false"| 当el-dialog外层有position:fixed，模态框z-index会失效，导致被蒙层覆盖 |
|:close-on-press-escape="false"| 禁止按ESC关闭模态框 |
|:close-on-click-modal="false"| 禁止点击蒙层关闭模态框 |

## 模板

```javascript
<template>
  <div class="demo-dialog-wrap">
    <el-dialog
      title="标题"
      class="demo-dialog"
      width="1200px"
      :visible.sync="dialogVisible"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DemoDialog',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    dialogData: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.isVisible;
      },
      set(newValue) {
        this.$emit('update:isVisible', newValue);
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {

    },
    close() {
      this.dialogVisible = false;
      this.$emit('cancel');
    },
    submit() {
      this.close();
    }
  }
}
</script>
```


