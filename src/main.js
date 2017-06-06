import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';

//页面
import App from './App';
import home from './views/home.vue';
import about from './views/about.vue';

Vue.use(VueRouter);
Vue.use(vueResource);

// 开启debug模式
Vue.config.debug = true;
// 让 vue-resource 使用 content-type urlencode 的格式进行ajax请求
Vue.http.options.emulateJSON = true

//2.0 router
const router = new VueRouter({
  // html5 history模式
  mode: 'history',
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      // 覆盖所有条件, 默认指向首页
      path: '*',
      redirect: '/home'
    }
  ]
});

//启动路由
export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
