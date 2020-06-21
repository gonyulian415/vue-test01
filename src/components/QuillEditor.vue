<template>
  <div>
    <el-page-header @back="goBack" content="富文本"></el-page-header>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import Quill from "quill"; // 富文本基于quill

import { ImageDrop } from "quill-image-drop-module";
Quill.register("modules/imageDrop", ImageDrop);

//默认有工具栏，如果想自定义工具栏可以在toolbarOptions配置，不需要的删掉即可
//想直接使用默认的工具栏删掉editorOption中的modules->toolbar即可
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
  ["blockquote", "code-block"], //引用，代码块

  [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
  [{ list: "ordered" }, { list: "bullet" }], //列表
  [{ script: "sub" }, { script: "super" }], // 上下标
  [{ indent: "-1" }, { indent: "+1" }], // 缩进
  [{ direction: "rtl" }], // 文本方向

  [{ size: ["small", false, "large", "huge"] }], // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题

  [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
  [{ font: [] }], //字体
  [{ align: [] }], //对齐方式

  ["clean"], //清除字体样式
  ["image", "video"] //上传图片、上传视频
];

export default {
  name: "QuillEditor",
  components: { quillEditor },
  data() {
    return {
      content: "",
      editorOption: {
        modules: {
          toolbar: {
            container: toolbarOptions // 工具栏
          },
          imageDrop: true
        },
        placeholder: "Compose an epic..."
        //theme: "snow", //默认即是snow
      }
    };
  },
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    goBack() {
      window.history.go(-1);
    }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>

<style lang="scss">
.ql-editor {
  height: 500px;
}
</style>
