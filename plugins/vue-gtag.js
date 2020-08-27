import Vue from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-176717133-1" }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
