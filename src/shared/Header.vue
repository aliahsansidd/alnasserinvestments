
    
<template>
  <div id="header">
  

<div class="mobile-menu">
  <div class="mobile-logo-box">
        <img src="../assets/img/logo.png" alt>
  </div>
  <div class="mobile-btn-box">
      <div class="content">
  <div class="button1">
    <p> <img src="../assets/img/mb-btn.png" alt=""> </p>
  </div>
</div>
<div class="overlay">
  <div class="button2">
    <p> <img src="../assets/img/cr.png"> </p>
  </div>
  <nav>
    <p><router-link to='/en/home' class="navi">
     Homepage
     </router-link></p>
           <div class="accordian-main">
   <div class="col">
    <div class="tabs">
      <div class="tab" style="margin-top: 0;">
        <input type="checkbox" id="chck1">
        <label class="tab-label" for="chck1">
                                Information About Us
                            </label>
        <div class="tab-content">
        <router-link to='/en/aboutcompany' class="aboutcompany"> About Company</router-link>
        </div>
          <div class="tab-content">
        <router-link to='/en/aboutchairman' class="aboutchairman"> For The President</router-link>
        </div>

          <div class="tab-content">
        <router-link to='/en/ourstrategy' class="ourstrategy"> Our Strategy</router-link>
        </div>

          <div class="tab-content">
        <router-link to='/en/philogy' class="philogy">  Our Philosophy</router-link>
        </div>
      </div>
      <div class="tab" style="margin-bottom: 0;">
        <input type="checkbox" id="chck2">
        <label class="tab-label" for="chck2">
                                Investments
                            </label>
        <!-- <div class="tab-content">
           <router-link to='/en/ourinvestment'  class="ourinvestment"> Our Investment </router-link>
        </div> -->
        
        <div class="tab-content">
           <router-link to='/en/ourinvestment' class="petroleumsector">Our Investments</router-link>
        </div>
        <div class="tab-content">
           <router-link to='/en/petroleumsector' class="powersector">Petroleum Sector</router-link>
        </div>
        <div class="tab-content">
           <router-link to='/en/powersector' class="realstatesector">Energy Sector</router-link>
        </div>
        <div class="tab-content">
           <router-link to='/en/healthsector' class="healthsector">The Hotel Sector </router-link>
        </div>
        <!-- <div class="tab-content">
           <router-link to='/en/itsector' class="itsector">It Sector </router-link>
        </div> -->
      </div>
    </div>
  </div>
        </div>
    <p><router-link to='/en/carrier' class="carrier"> Careers</router-link></p>
    <p style="padding-top: 0; padding-bottom:0;">
      <a class="contact" href="/en/home#contactus"> Call Us</a>
     <!-- href="http://mysite.codesation.com/#contactus" -->
    </p>
    
 <div class="accordian-main">
   <div class="col">
     <div class="tabs">
           <div class="tab" style="margin-bottom: 0;">
        <input type="checkbox" id="chck4" style="display: none;">
        <label class="tab-label" for="chck4">
                               <router-link to='/ar/home' class="ar">العربية</router-link>
                            </label>
      
        
        <!-- <div class="tab-content" style="padding-bottom: 0;">
           <router-link to='' class="en">En</router-link>
        </div> -->
        <!-- <div class="tab-content" style="padding-top: 5px;">
           <router-link to='/ar/home' class="ar">العربية</router-link>
        </div> -->
        
        <!-- <div class="tab-content">
           <router-link to='/en/itsector' class="itsector">It Sector </router-link>
        </div> -->
      </div>
     </div>


   </div>
 </div>


  </nav>
</div>
  </div>
</div>


    <header>
      <div class="logo-box">
        <img src="../assets/img/logo.png" alt>
      </div>
      <div class="nav-bar" id="myDIV">
        <ul>
          <li class="active nav-bar-li">
            <a href=""><router-link to='/en/home'>Homepage</router-link></a>
          </li>
          <li>
           
                            Information About Us
                        

            <div class="sub-menu">
              <ul>
                <li class="nav-bar-li">
                  <a href> <router-link to='/en/aboutcompany'>About Company</router-link></a>
                </li>
                <br>
                <li class="nav-bar-li">
                  <a href> <router-link to='/en/aboutchairman'>For The President</router-link> </a>
                </li>
                <br>

                  <li class="nav-bar-li">
                  <a href> <router-link to='/en/ourstrategy'>Our Strategy</router-link> </a>
                </li>
                <br>

                  <li class="nav-bar-li">
                  <a href> <router-link to='/en/philogy'>Our Philosophy</router-link> </a>
                </li>

                <br>
              </ul>
            </div>
          </li>
          <li >
         Investments
            <div class="sub-menu">
              <ul>
                <li class="nav-bar-li">
                  <a href> <router-link to='/en/ourinvestment'> Our Investments</router-link></a>
                </li>
  <br>

                <li class="nav-bar-li">
                  <a href> <router-link to='/en/petroleumsector'>Petroleum Sector</router-link></a>
                </li>
  <br>
                  <li class="nav-bar-li">
                  <a href> <router-link to='/en/powersector'> Energy Sector</router-link></a>
                </li>
  <br>

                <!-- <li class="nav-bar-li">
                  <a href> <router-link to='/en/realstatesector'>Real State Sector </router-link></a>
                </li> -->

                <li class="nav-bar-li">
                  <a href> <router-link to='/en/healthsector'>The Hotel Sector</router-link></a>
                </li>
  <br>


                  <!-- <li class="nav-bar-li">
                  <a href> <router-link to='/en/itsector'>It Sector </router-link></a>
                </li> -->

               
              </ul>
            </div>
          </li>
          <li class="nav-bar-li">
            <a href=""> <router-link to='/en/carrier'>Careers</router-link></a>
            
          </li>
          <li class="nav-bar-li">
            <a >
            <router-link to='/en/home#contactus' class="ar">Call Us</router-link></a>
          </li>

              <li>
           
                            <router-link to='/ar/home'> العربية </router-link>
                        
<!-- 
            <div class="sub-menu">
              <ul style="">
                <li class="nav-bar-li">
                  <a href> <router-link to='/en'> En </router-link></a>
                </li>

                <br>
               
               

                  <li class="nav-bar-li">
                  <a href> <router-link to='/ar/home'> العربية </router-link> </a>
                </li>

                <br>
              </ul>
            </div> -->
          </li>


        </ul>
        <div class="mobile-menu book-session">
          <img src="../assets/img/mb-btn.png" alt>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'Header',
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


