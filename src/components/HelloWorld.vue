<template>
  <div class="hello">
    <div id="main" style="width: 600px;height: 400px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "HelloWorld",
  data() {
    return {
      charts: "",
      opinion: ["iphone", "小米", "一加", "三星", "华为", "oppo"],
      opinionData: [100, 60, 36, 10, 70, 75]
    };
  },
  methods: {
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: "echarts demo"
        },
        tooltip: {},
        xAxis: {
          data: this.opinion
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.opinionData
          }
        ]
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawPie("main");
    });
  }
};
</script>


