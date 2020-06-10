<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ params }}
    {{ qsCal }}
    <ComputedWatchTest />
  </div>
</template>
<script>
import ComputedWatchTest from "@/components/ComputedWatchTest.vue";
export default {
  data() {
    return {
      qsData: { name: "jay", age: "30" },
      url:
        "method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0",
    };
  },
  methods: {},
  mounted() {
    console.log(this.qs.stringify(this.qsData));
    console.log(JSON.stringify(this.qsData));
    console.log(this.qs.parse(this.url));
  },
  computed: {
    params() {
      return 233;
    },
    qsCal() {
      return this.qs.stringify(this.qsData);
    },
  },
  components: { ComputedWatchTest },
};
</script>
