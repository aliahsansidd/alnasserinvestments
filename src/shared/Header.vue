
    
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
    <ul>
      <li> <router-link to='/home'> Home </router-link></li>
      <!-- <li>ABOUT</li> -->
      <!-- <li>Our Strategy</li> -->
      <!-- <li>About The Company</li> -->
      <!-- <li style="padding-bottom: 0;">Home 1</li> -->

      <li style="padding-bottom: 0;">
        <div class="accordian-main">
   <div class="col">
    <div class="tabs">
      <div class="tab" style="margin-top: 0;">
        <input type="checkbox" id="chck1">
        <label class="tab-label" for="chck1">About Us</label>
        <div class="tab-content">
        <router-link to='/aboutcompany'>  About The Company </router-link>
        </div>
          <div class="tab-content">
        <router-link to='/aboutchairman'>  About The Chairman </router-link>
        </div>

          <div class="tab-content">
        <router-link to='/ourstrategy'>  Our Stategy</router-link>
        </div>

          <div class="tab-content">
        <router-link to='/philogy'>  Our Philospy </router-link>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck2">
        <label class="tab-label" for="chck2">INVESTMENTS</label>
        <div class="tab-content">
           <router-link to='/ourinvestment'> Our Investment </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/petroleumsector'>Petroleum Sector </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/powersector'>Power Sector </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/realstatesector'>Real State Sector </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/healthsector'>Health Sector </router-link>
        </div>
        <div class="tab-content">
           <router-link to='/itsector'>It Sector </router-link>
        </div>
      </div>
    </div>
  </div>
        </div>
      </li>
       <li style="margin-top: 0; padding-top: 0;">CARRERS</li>
      <li><a href="http://mysite.codesation.com/#contactus">  CONTACT US</a></li>

    </ul>
  </nav>
</div>
  </div>
</div>


    <header>
      <div class="logo-box">
        <img src="../assets/img/logo.png" alt>
      </div>
      <div class="nav-bar">
        <ul>
          <li class="active">
            <a href=""><router-link to='/home'>HOME</router-link></a>
          </li>
          <li>
            <a href="">ABOUT US</a>

            <div class="sub-menu">
              <ul>
                <li>
                  <a href> <router-link to='/aboutcompany'> About The Company </router-link></a>
                </li>
                <li>
                  <a href> <router-link to='/aboutchairman'> About The chairman </router-link> </a>
                </li>

                  <li>
                  <a href> <router-link to='/ourstrategy'> Our Stategy </router-link> </a>
                </li>

                  <li>
                  <a href> <router-link to='/philogy'> Our Philospy </router-link> </a>
                </li>

              </ul>
            </div>
          </li>
          <li>
            <a href="">INVESTMENTS</a>
            <div class="sub-menu">
              <ul>
                <li>
                  <a href> <router-link to='/ourinvestment'> Our Investment </router-link></a>
                </li>
                <li>
                  <a href> <router-link to='/petroleumsector'>Petroleum Sector </router-link></a>
                </li>

                  <li>
                  <a href> <router-link to='/powersector'>Power Sector </router-link></a>
                </li>

                <li>
                  <a href> <router-link to='/realstatesector'>Real State Sector </router-link></a>
                </li>

                <li>
                  <a href> <router-link to='/healthsector'>Health Sector </router-link></a>
                </li>

                  <li>
                  <a href> <router-link to='/itsector'>It Sector </router-link></a>
                </li>

               
              </ul>
            </div>
          </li>
          <li>
            <a href=""> <router-link to='/carrier'>CARRERS</router-link></a>
            
          </li>
          <li>
            <a href="http://mysite.codesation.com/#contactus">  CONTACT US</a>
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


