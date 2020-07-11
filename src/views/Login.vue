<template>
  <div id="login">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <el-form @submit.native.prevent class="login_form">
        <el-input show-password v-model="pw" placeholder="please enter your code" @keyup.enter.native="login"></el-input>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return {
            pw:''
        }
    },
    methods:{
        login(){
            this.$router.push({path:'/Home'})
        }
    }
};
</script>

<style lang="scss" scoped>
#login{
    background-color: black;
    color: white;
}
.login_form{
    position: fixed;
    width: 300px;
    top: 50%;
    left: calc(50%-150px);
}
</style>
<style >
.login_form{
    position: fixed;
    width: 300px;
    top: 50%;
    left: calc(50%-150px);
}
</style>