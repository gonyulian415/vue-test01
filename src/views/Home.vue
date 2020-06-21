<template>
  <div class="home">
    <LeftNav />
  </div>
</template>

<script>
// @ is an alias to /src

import LeftNav from "@/components/LeftNav.vue";

export default {
  name: "Home",
  components: {
    LeftNav
  }
};
</script>
