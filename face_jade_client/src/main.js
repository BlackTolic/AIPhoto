import Vue from "vue";
import App from "./App";
import "./uni.promisify.adaptor";
import router from "./routes";

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue({
  router,
  ...App,
});
app.$mount();
