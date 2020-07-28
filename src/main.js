import Vue from 'vue'
import App from './App.vue'
import './assets/home.scss'
import './assets/slider.scss'
import 'ant-design-vue/dist/antd.css';
import $ from 'jquery';
import { Carousel } from 'ant-design-vue';
import VueMatchHeights from 'vue-match-heights';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    (function () {
      const header = document.querySelector('.header');
      const icon = document.querySelector('.icon-container');
      icon.onclick = function () {
        header.classList.toggle('menu-open');
      }
    }());
   
  },
  
}).$mount('#app')

Vue.use(Carousel);
Vue.use(VueMatchHeights, {
  disabled: [768], // Optional: default viewports widths to disabled resizing on. Can be overridden per usage
});
