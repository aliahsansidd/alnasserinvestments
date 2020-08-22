
    
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
    <p><router-link to='/ar/home' class="navi">
     الصفحة الرئيسية 
     </router-link></p>
           <div class="accordian-main">
   <div class="col">
    <div class="tabs">
      <div class="tab" style="margin-top: 0;">
        <input type="checkbox" id="chck1">
        <label class="tab-label" for="chck1">
                                معلومات عنا
                            </label>
        <div class="tab-content">
        <router-link to='/ar/aboutcompany' class="aboutcompany">  عن الشركة </router-link>
        </div>
          <div class="tab-content">
        <router-link to='/ar/aboutchairman' class="aboutchairman">  عن الرئيس</router-link>
        </div>

          <div class="tab-content">
        <router-link to='/ar/ourstrategy' class="ourstrategy">  استراتيجيتنا</router-link>
        </div>

          <div class="tab-content">
        <router-link to='/ar/philogy' class="philogy">  فلسفتنا</router-link>
        </div>
      </div>
      <div class="tab" style="margin-bottom: 0;">
        <input type="checkbox" id="chck2">
        <label class="tab-label" for="chck2">
                                استثمارات
                            </label>
        <!-- <div class="tab-content">
           <router-link to='/ourinvestment'  class="ourinvestment"> Our Investment </router-link>
        </div> -->
        
        <div class="tab-content">
           <router-link to='/ar/ourinvestment' class="petroleumsector">استثماراتنا </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/ar/petroleumsector' class="powersector">قطاع البترول </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/ar/powersector' class="realstatesector">قطاع الطاقة </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/ar/healthsector' class="healthsector">اقطاع الفنادق  </router-link>
        </div>
        <!-- <div class="tab-content">
           <router-link to='/itsector' class="itsector">It Sector </router-link>
        </div> -->
      </div>
    </div>
  </div>
        </div>
    <p><router-link to='/ar/carrier' class="carrier">وظائف </router-link></p>
    <p style="padding-top: 0; padding-bottom:0;"><a href="#contactus" class="contact">  اتصل بنا</a></p>
    
 <div class="accordian-main">
   <div class="col">
     <div class="tabs">
           <div class="tab" style="margin-bottom: 0;">
        <input type="checkbox" id="chck4" style="display: none;">
        <label class="tab-label" for="chck4">
          <router-link to='/en/home' class="en">En</router-link>
                            </label>
      
        
        <!-- <div class="tab-content" style="padding-bottom: 0;">
           <router-link to='/en/home' class="en">En</router-link>
        </div> -->
        <!-- <div class="tab-content" style="padding-top: 5px;">
           <router-link to='' class="ar">العربية</router-link>
        </div> -->
        
        <!-- <div class="tab-content">
           <router-link to='/itsector' class="itsector">It Sector </router-link>
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
            <a href=""><router-link to='/ar/home'>الصفحة الرئيسية </router-link></a>
          </li>
          <li>
           
                            معلومات عنا
                        

            <div class="sub-menu">
              <ul>
                <li class="nav-bar-li">
                  <a href> <router-link to='/ar/aboutcompany'> عن الشركة </router-link></a>
                </li>
                <br>
                <li class="nav-bar-li">
                  <a href> <router-link to='/ar/aboutchairman'> عن الرئيس </router-link> </a>
                </li>
                <br>

                  <li class="nav-bar-li">
                  <a href> <router-link to='/ar/ourstrategy'> استراتيجيتنا </router-link> </a>
                </li>
                <br>

                  <li class="nav-bar-li">
                  <a href> <router-link to='/ar/philogy'> فلسفتنا </router-link> </a>
                </li>

                <br>
              </ul>
            </div>
          </li>
          <li >
         استثمارات
            <div class="sub-menu">
              <ul>
                <li class="nav-bar-li">
                  <a href> <router-link to='/ar/ourinvestment'> استثماراتنا </router-link></a>
                </li>
  <br>

                <li class="nav-bar-li">
                  <a href> <router-link to='/ar/petroleumsector'>قطاع البترول </router-link></a>
                </li>
  <br>
                  <li class="nav-bar-li">
                  <a href> <router-link to='/ar/powersector'>قطاع الطاقة</router-link></a>
                </li>
  <br>

                <!-- <li class="nav-bar-li">
                  <a href> <router-link to='/realstatesector'>Real State Sector </router-link></a>
                </li> -->

                <li class="nav-bar-li">
                  <a href> <router-link to='/ar/healthsector'>قطاع الفنادق</router-link></a>
                </li>
  <br>


                  <!-- <li class="nav-bar-li">
                  <a href> <router-link to='/itsector'>It Sector </router-link></a>
                </li> -->

               
              </ul>
            </div>
          </li>
          <li class="nav-bar-li">
            <a href=""> <router-link to='/ar/carrier'>وظائف</router-link></a>
            
          </li>
          <li class="nav-bar-li">
            <a href="#contactus">اتصل بنا</a>
          </li>

              <li>
           
                <router-link to='/en/home'> En </router-link>
                        

            <!-- <div class="sub-menu">
              <ul style="">
                <li class="nav-bar-li">
                  <a href> <router-link to='/en/home'> En </router-link></a>
                </li>

                <br>
               
               

                  <li class="nav-bar-li">
                  <a href> <router-link to=''> العربية </router-link> </a>
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
  name: 'HeaderAr',
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


