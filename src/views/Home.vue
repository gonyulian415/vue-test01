<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Test />
    <Account />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Test from "@/components/Test.vue";
import Account from "@/components/Account.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Test,
    Account
  }
};
</script>
