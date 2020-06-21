<template>
  <div>
    <croppa v-model="myCroppa"></croppa>
    <button @click="myCroppa.rotate()">rotate 90deg</button>
    <button @click="myCroppa.rotate(2)">rotate 180deg</button>
    <button @click="myCroppa.rotate(-1)">rotate -90deg</button>
    <button @click="myCroppa.flipX()">flip horizontally</button>
    <button @click="myCroppa.flipY()">flip vertically</button>
    <button @click="download">download</button>
  </div>
</template>

<script>
import "vue-croppa/dist/vue-croppa.css";
import Croppa from "vue-croppa";
import Vue from "vue";
Vue.use(Croppa);

export default {
  name: "VueCroppa",
  data() {
    return {
      myCroppa: {},
      dataUrl: "",
    };
  },

  methods: {
    uploadCroppedImage() {
      this.myCroppa.generateBlob(
        (blob) => {
          console.log(blob);
        },
        "image/jpeg",
        0.8
      ); // 80% 压缩图片文件
    },

    download(type, compressionRate) {
      this.myCroppa.generateBlob(
        (blob) => {
          var url = URL.createObjectURL(blob);
          console.log(url);
          var a = document.createElement("a");
          a.download = "filename";
          a.href = url;
          a.click();
          URL.revokeObjectURL(url);
        },
        type,
        compressionRate
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
