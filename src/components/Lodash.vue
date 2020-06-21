<template>
  <div id="lodash">
    <el-page-header @back="goBack" content="lodash"></el-page-header>
    <div>{{result}}</div>
    <div>{{res2}}</div>
    <div>
      数组操作：
      <br />
      <button @click="concat">concat</button>
      <button @click="uniq">uniq</button>
      <button @click="uniqBy">uniqBy</button>
      <br />集合操作：
      <br />
      <button @click="forEach">forEach</button>
      <br />对象操作：
      <br />
      <button @click="deepClone">cloneDeep</button>
      <br />一些工具函数：
      <br />
      <button @click="times">times</button>
      <button @click="_debounce">debounce</button>
      <button @click="_throttle">throttle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "lodash",
  data() {
    return {
      result: "",
      res2: "",
      arr: [99, 100, 3, 4, 5, 99, 444, 99, "aaa"],
      obj: { name: "jay", song: "mojito" },
      arr2: [
        { name: "jay", id: "12" },
        { name: "sakura", id: "12" },
        { name: "naruto", id: "13" },
        { name: "doraemon", id: "8" },
        { name: "doraemon", id: "8" }
      ]
    };
  },
  methods: {
    concat() {
      this.result = this._.concat(this.arr, this.obj, "hey", 9999);
    },
    uniq() {
      this.result = this._.uniq(this.arr2);
    },
    uniqBy() {
      this.result = this._.uniqBy(this.arr2, function(e) {
        return e.id;
      });
    },
    forEach() {
      this.result = this._.forEach(this.arr, val => {
        console.log(val);
      });
      this.res2 = this._.forEach(this.obj, (val, key) => {
        console.log(val + "," + key);
      });
    },
    deepClone() {
      let obj = this._.cloneDeep(this.obj);
      console.log(obj === this.obj);
    },
    times() {
      this._.times(5, i => {
        console.log(i);
      });
    },
    dosomething() {
      console.log("防抖节流");
    },
    _debounce() {
      console.log("防抖");
      this.DB();
    },
    _throttle() {
      console.log("节流");
      this.TH();
    },
    goBack() {
      window.history.go(-1);
    }
  },
  mounted() {
    this.DB = this._.debounce(this.dosomething, 1000, false);
    this.TH = this._.throttle(this.dosomething, 5000, false);
  }
};
</script>

<style lang="scss" scoped>
</style>