<template>
  <div >
    <HeaderAr/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import HeaderAr from '../shared/HeaderArabic.vue';
import Footer from '../shared/Footer.vue';
import $ from 'jquery';
export default {
  components: {
    HeaderAr,
    Footer
  },
  mounted(){
// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-bar-li");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" ", "");
  this.className += " active";
  });
}

    $('.button1').on('load', function() {
      $(".overlay").fadeIn("slow");
    });
   
    $('.button1').on('click', function() {
      $(".overlay").fadeIn("slow");
    });
    
    $('.button2').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.navi').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.aboutcompany').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.aboutchairman').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.ourstrategy').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.philogy').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.ourinvestment').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.petroleumsector').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.powersector').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.realstatesector').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.healthsector').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.itsector').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.carrier').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.contact').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.en').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $('.ar').on('click', function() {
      $(".overlay").fadeOut("slow");
    });
    $(document).ready(function(){
      $('.nav-c').click(function(e){
      $(e.target).css('backgroundColor', '#edcd1f');
       });
    });
  }
}
</script>

<style>

</style>
