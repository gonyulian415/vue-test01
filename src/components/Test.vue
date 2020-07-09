<template>
  <div>
    <span id="msg">{{ message }}</span>
    <button @click="updateMessage">去更新</button>
    <button @click="sendPost">axios获取数据</button>
    <button @click="sendCOReq">跨域获取数据iphone</button>
    <button @click="sendCOReq2">跨域获取数据boogie board</button>
    <button @click="sendCOReq3">跨域获取数据牛奶</button>
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
      this.$axios.get("/useclient?skuIds=J_100008348542&type=1").then(res => {
        console.log(res);
      });
    },
    sendCOReq2() {
      this.$axios.get("/useclient?skuIds=J_7531255&type=1").then(res => {
        console.log(res);
      });
    },
    sendCOReq3() {
      this.$axios.get("/useclient2?skuIds=J_11826442690&type=1").then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    setInterval(function() {
      console.log(this.message);
    }, 500);

    setInterval(() => {
      console.log(this.message);
    }, 500);

    setInterval(
      _this => {
        console.log(_this.message);
      },
      500,
      this
    );

    let that = this;
    setInterval(() => {
      console.log(that.message);
    }, 500);
  }
};
</script>

<style lang="scss" scoped></style>
