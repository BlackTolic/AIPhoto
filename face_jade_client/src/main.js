import Vue from "vue";
import App from "./App";
import "./uni.promisify.adaptor";
import router from "./routes";
import uView from "uview-ui";

async function bootstrap() {
  Vue.config.productionTip = false;

  App.mpType = "app";
  Vue.use(uView);

  const app = new Vue({
    router,
    ...App,
  });
  app.$mount();
}

bootstrap();
