<template>
  <div class="home">
    <Banner/>
    <LeftNav id="LeftNav" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import LeftNav from "@/components/LeftNav.vue";

export default {
  name: "Home",
  components: {
    LeftNav,Banner
  }
};
</script>
<style lang="scss" scoped>
#LeftNav{
  margin-top: 60px;
}
</style>