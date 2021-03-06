import Vue from 'vue';
//import VueRouter from 'vue-router';
import vueResource from 'vue-resource';

//页面
import App from './App';
import home from './views/home.vue';
//import about from './views/about.vue';

//Vue.use(VueRouter);
Vue.use(vueResource);

// 开启debug模式
Vue.config.debug = true;
// 让 vue-resource 使用 content-type urlencode 的格式进行ajax请求
Vue.http.options.emulateJSON = true
//
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App,home }
})
