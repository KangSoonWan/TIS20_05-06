import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//store 설정도 여기서 할수 있음

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
