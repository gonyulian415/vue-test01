<template>
  <div id="xbt_container">
    <el-input placeholder="主体:" v-model="input1">
      <span slot="suffix" class="el-icon-search"></span>
    </el-input>
    <el-input placeholder="事件:" v-model="input2">
      <span slot="suffix" class="el-icon-search"></span>
    </el-input>
    <el-input placeholder="另一种说法:" v-model="input3">
      <span slot="suffix" class="el-icon-search"></span>
    </el-input>
    <el-button @click="generate">生成</el-button>
    <el-input type="textarea" v-model="bullshit" id="xbt_content"></el-input>
    <el-button @click="copy" v-show="bullshit">一键复制</el-button>
    <el-button @click="clear">清空</el-button>
  </div>
</template>

<script>
export default {
  name: "Xbt",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      feihuas: [
        "是怎么回事呢？",
        "相信大家都很熟悉，但是",
        "是怎么回事呢，下面就让小编带大家一起了解吧。\n",
        "，其实就是",
        "。大家可能会很惊讶怎么",
        "会",
        "呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于",
        "的事情了，大家有什么想法呢，欢迎在评论区留言告诉小编一起讨论哦！"
      ],
      bullshit: ""
    };
  },
  methods: {
    generate() {
      this.bullshit = "";
      let input1 = this.input1,
        input2 = this.input2,
        input3 = this.input3;
      this.bullshit = `${input1 +
        input2}是怎么回事呢？${input1}相信大家都很熟悉，但是${input1 +
        input2}是怎么回事呢，下面就让小编带大家一起了解吧。\n${input1 +
        input2}，其实就是${input1 +
        input3}。大家可能会很惊讶怎么${input1}会${input2}呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于${input1 +
        input2}的事情了，大家有什么想法呢，欢迎在评论区留言告诉小编一起讨论哦！`;
    },
    copy() {
      const input = document.createElement("input");
      document.body.appendChild(input);
      input.setAttribute("value", this.bullshit);
      input.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
        this.$message({
          message: "复制成功",
          type: "success",
          duration: 2000
        });
      }
      document.body.removeChild(input);
    },
    clear() {
      this.bullshit = "";
    }
  }
};
</script>

<style lang="scss" >
#xbt_container {
  width: 500px;
}
#xbt_content {
  height: 300px;
}
</style>