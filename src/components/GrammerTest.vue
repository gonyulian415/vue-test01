<template>
  <div>
    <div>原生new Date():{{date}}</div>
    <div>过滤之后：{{date|timeFormat}}</div>
    <div>全部小写:{{str|changeCase(5)}}</div>
    <div>全部大写:{{str|changeCase(4)}}</div>
    <div>大小写互换:{{str|changeCase(3)}}</div>
    <div>串联：{{date|timeFormat|trim(1)}}</div>
  </div>
</template>
<script>
export default {
  name: "GrammerTest",
  data() {
    return {
      date: new Date(),
      str:'GGGGyyyyy'
    };
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(function () {
      _this.date = new Date();
    });
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>