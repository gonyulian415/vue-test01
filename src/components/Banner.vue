<template>
  <div id="banner">
    <el-button icon="el-icon-switch-button" @click="exit" class="exitBtn"></el-button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    exit() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
#banner {
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  z-index: 4;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.18);
  background-color: indianred;
}
.exitBtn {
  background-color: transparent;
  border: none;
  font-size: 30px;
}
.el-button:hover {
    color: white;
    border-color: transparent;
    background-color: transparent;
}
</style>
<style>

</style>