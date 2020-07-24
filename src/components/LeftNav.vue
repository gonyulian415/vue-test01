<template>
  <div>
    <div id="leftNav">
      <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect" router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/qe">富文本测试页</el-menu-item>
            <el-menu-item index="/vca">页面截图测试页</el-menu-item>
            <el-menu-item index="/plazy">图片懒加载测试页</el-menu-item>
            <el-menu-item index="/account">账号管理</el-menu-item>
            <el-menu-item index="/lodash">Lodash方法测试</el-menu-item>
            <el-menu-item index="/cors">跨域测试</el-menu-item>
            <el-menu-item index="/TestPdf">vue-pdf</el-menu-item>
            <el-menu-item index="/TestPdf2">pdfjs</el-menu-item>
            <el-menu-item index="/GrammerTest">语法测试</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="/xbt">小编体</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div id="rightArea">
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {
      userId: ""
    };
  },
  mounted() {
    this.getInitData();
  },
  methods: {
    async getInitData() {
      let res1 = await this.$axios.get("http://mockjs.com/api/posts");
      console.log(res1.data.posts[0]);
      this.userId = res1.data.posts[0].date;
      console.log(this.userId);
    },
    handleSelect(index, indexPath) {
      console.log(index + "------" + indexPath);
    }
  },
  watch: {
    userId(newVal, oldVal) {
      this.$store.commit("setUserId", { userId: this.userId });
      //初始化组件时获取userid并存入data里，此处watch到userid的值发生变化后存入vuex里
      console.log(newVal + oldVal);
    }
  }
};
</script>

<style lang="scss" scoped>
#leftNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 256px;
  height: 100%;
  padding-top: 64px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.18);
  background-color: greenyellow;
}
#rightArea {
  padding: 30px 30px 30px 286px;
}
.main {
  border: 1px dotted black;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>