
    
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
    <p><router-link to='/home' class="navi">
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
        <router-link to='/aboutcompany' class="aboutcompany">  عن الشركة </router-link>
        </div>
          <div class="tab-content">
        <router-link to='/aboutchairman' class="aboutchairman">  عن الرئيس</router-link>
        </div>

          <div class="tab-content">
        <router-link to='/ourstrategy' class="ourstrategy">  استراتيجيتنا</router-link>
        </div>

          <div class="tab-content">
        <router-link to='/philogy' class="philogy">  فلسفتنا</router-link>
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
           <router-link to='/ourinvestment' class="petroleumsector">استثماراتنا </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/petroleumsector' class="powersector">قطاع البترول </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/powersector' class="realstatesector">قطاع الطاقة </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/healthsector' class="healthsector">اقطاع الفنادق  </router-link>
        </div>
        <!-- <div class="tab-content">
           <router-link to='/itsector' class="itsector">It Sector </router-link>
        </div> -->
      </div>
    </div>
  </div>
        </div>
    <p><router-link to='/carrier' class="carrier">وظائف </router-link></p>
    <p style="padding-top: 0; padding-bottom:0;"><a href="http://mysite.codesation.com/#contactus" class="contact">  اتصل بنا</a></p>
    
 <div class="accordian-main">
   <div class="col">
     <div class="tabs">
           <div class="tab" style="margin-bottom: 0;">
        <input type="checkbox" id="chck4" style="display: none;">
        <label class="tab-label" for="chck4">
                                En
                            </label>
      
        
        <div class="tab-content" style="padding-bottom: 0;">
           <router-link to='' class="en">En</router-link>
        </div>
        <div class="tab-content" style="padding-top: 5px;">
           <router-link to='' class="ar">العربية</router-link>
        </div>
        
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
            <a href=""><router-link to='/home'>الصفحة الرئيسية </router-link></a>
          </li>
          <li>
           
                            معلومات عنا
                        

            <div class="sub-menu">
              <ul>
                <li class="nav-bar-li">
                  <a href> <router-link to='/aboutcompany'> عن الشركة </router-link></a>
                </li>
                <br>
                <li class="nav-bar-li">
                  <a href> <router-link to='/aboutchairman'> عن الرئيس </router-link> </a>
                </li>
                <br>

                  <li class="nav-bar-li">
                  <a href> <router-link to='/ourstrategy'> استراتيجيتنا </router-link> </a>
                </li>
                <br>

                  <li class="nav-bar-li">
                  <a href> <router-link to='/philogy'> فلسفتنا </router-link> </a>
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
                  <a href> <router-link to='/ourinvestment'> استثماراتنا </router-link></a>
                </li>
  <br>

                <li class="nav-bar-li">
                  <a href> <router-link to='/petroleumsector'>قطاع البترول </router-link></a>
                </li>
  <br>
                  <li class="nav-bar-li">
                  <a href> <router-link to='/powersector'>قطاع الطاقة</router-link></a>
                </li>
  <br>

                <!-- <li class="nav-bar-li">
                  <a href> <router-link to='/realstatesector'>Real State Sector </router-link></a>
                </li> -->

                <li class="nav-bar-li">
                  <a href> <router-link to='/healthsector'>قطاع الفنادق</router-link></a>
                </li>
  <br>


                  <!-- <li class="nav-bar-li">
                  <a href> <router-link to='/itsector'>It Sector </router-link></a>
                </li> -->

               
              </ul>
            </div>
          </li>
          <li class="nav-bar-li">
            <a href=""> <router-link to='/carrier'>وظائف</router-link></a>
            
          </li>
          <li class="nav-bar-li">
            <a href="http://mysite.codesation.com/#contactus">اتصل بنا</a>
          </li>

              <li>
           
                            En
                        

            <div class="sub-menu">
              <ul style="">
                <li class="nav-bar-li">
                  <a href> <router-link to=''> En </router-link></a>
                </li>

                <br>
               
               

                  <li class="nav-bar-li">
                  <a href> <router-link to=''> العربية </router-link> </a>
                </li>

                <br>
              </ul>
            </div>
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
export default {
  name: 'Header',
  mounted(){

  }
}
</script>

<style>

</style>


