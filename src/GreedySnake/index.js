import Vue from 'vue';

// 引入元件
import GreedySnake from './components/GreedySnake.vue';

Vue.config.productionTip = false;

const app = new Vue({
  components: {
    // 在這邊加入元件
    GreedySnake
  }
});

function mountVue(selector) {
  app.$mount(selector);
}

if (process.env.NODE_ENV === 'development') {
  mountVue('#app');
}

if (process.env.NODE_ENV === 'production') {
  // window.mountComponent = selector => mountVue(selector);
  mountVue('#app');
}
