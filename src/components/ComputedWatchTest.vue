<template>
  <div id="test">
    <button @click="_debounce">lodash防抖</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    _debounce() {
      console.log("执行防抖");
      this._DB();
    },
    doSomeThing() {
      console.log("真正执行的方法");
    },
  },
  created() {
    this._DB = this._.debounce(this.doSomeThing, 1000, false);
    //在created钩子里把真正要执行的函数通过lodash的debounce函数挂载在Vue实例上
  },
};
</script>

<style lang="scss" scoped>
#calTest {
  width: 500px;
  display: flex;
}
</style>
