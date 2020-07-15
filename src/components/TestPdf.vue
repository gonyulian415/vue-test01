<template>
  <div>
    <pdf
      :src="pdfUrl"
      @num-pages="pageCount = $event"
      @page-loaded="currentPage = $event"
      @loaded="loadPdfHandler"
      :page="currentPage"
    ></pdf>
    <!-- http://image.cache.timepack.cn/nodejs.pdf -->
    <ul class="footers">
      <li @click="changePdfPage(0)">
        <p>上一页</p>
      </li>
      <li @click="changePdfPage(1)">
        <p>下一页</p>
      </li>
    </ul>
  </div>
</template>

<script>
import pdf from "vue-pdf";
import CMapReaderFactory from "vue-pdf/src/CMapReaderFactory.js";
let url = pdf.createLoadingTask({ url: '/static/1.pdf', CMapReaderFactory });
export default {
  name: "TestPdf",
  components: { pdf },
  data() {
    return {
      pdfUrl: url,
      currentPage: 0,
      pageCount: 0
    };
  },
  methods: {
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage(val) {
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--;
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    // pdf加载时
    loadPdfHandler(e) {
      this.currentPage = 1; // 加载的时候先加载第一页
      console.log(e)
    }
  },
  created(){
      
  },
  mounted() {
    
  }
};
</script>

<style>
</style>