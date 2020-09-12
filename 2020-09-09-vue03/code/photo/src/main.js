import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/photo.css";
import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";

Vue.config.productionTip = false;
// use
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
