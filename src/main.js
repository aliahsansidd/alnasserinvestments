import Vue from 'vue'
import App from './App.vue'
import './assets/home.scss'
import './assets/slider.scss'
import 'ant-design-vue/dist/antd.css';
import $ from 'jquery';
import { Carousel } from 'ant-design-vue';
// import VueMatchHeights from 'vue-match-heights';
Vue.config.productionTip = false
import VueRouter from 'vue-router'
import routes from './routes';

 const router = new VueRouter({mode: 'history', routes});
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router,
  mounted() {
   
    $('.button1').on('click', function() {
      $(".overlay").fadeIn("slow");
    });
    
    $('.button2').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
  },

}).$mount('#app')

Vue.use(Carousel);
