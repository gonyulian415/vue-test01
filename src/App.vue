<template>
  <div id="app">

    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    saveState() {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state));
    },
  },
  mounted() {
    window.addEventListener("unload", this.saveState);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
</style>
