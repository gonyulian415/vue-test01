import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
require("./mock.js");
import axios from "axios";
import _ from "lodash";
import qs from "qs";
import "./plugins/element.js";

Vue.config.productionTip = false;
//axios.defaults.baseURL = "http://mockjs.com/api"; // 设置默认请求的url
Vue.prototype.$axios = axios;
Vue.prototype._ = _;
Vue.prototype.qs = qs;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
