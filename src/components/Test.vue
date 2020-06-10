<template>
  <div>
    <span id="msg">{{ message }}</span>
    <button @click="updateMessage">去更新</button>
    <button @click="sendPost">axios获取数据</button>
    <button @click="sendCOReq">跨域获取数据</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "未更新"
    };
  },
  methods: {
    updateMessage: function() {
      this.message = "已更新";
      console.log(this.$el.querySelector("#msg").textContent); // => '未更新'
      this.$nextTick(function() {
        console.log(this.$el.querySelector("#msg").textContent); // => '已更新'
      });
    },
    sendPost() {
      this.$axios.get("/posts").then(res => {
        console.log(res);
      });
    },
    sendCOReq() {
      this.$axios.get("/api").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
