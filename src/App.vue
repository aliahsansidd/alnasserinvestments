<template>
  <div id="app">
    <Header/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from './shared/Header.vue';
import Footer from './shared/Footer.vue';
import { Hooper, Slide } from 'hooper';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
