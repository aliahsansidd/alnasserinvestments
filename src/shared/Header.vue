
    
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
      <li>Home</li>
      <li>World</li>
      <li>Our Strategy</li>
      <li>About The Company</li>
      <li style="padding-bottom: 0;">Home 1</li>

      <li>
        <div class="accordian-main">
   <div class="col">
    <div class="tabs">
      <div class="tab" style="margin-top: 0;">
        <input type="checkbox" id="chck1">
        <label class="tab-label" for="chck1">About Us</label>
        <div class="tab-content">
         About The Company 
        </div>
          <div class="tab-content">
         About The Chairman 
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck2">
        <label class="tab-label" for="chck2">Item 2</label>
        <div class="tab-content">
           About The Chairman 
        </div>
      </div>
    </div>
  </div>
        </div>
      </li>

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
            <a href=""><router-link to='/about'>ABOUT US</router-link></a>

            <div class="sub-menu">
              <ul>
                <li>
                  <a href>About The Company</a>
                </li>
                <li>
                  <a href>About The chairman</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">INVESTMENTS</a>
            <div class="sub-menu">
              <ul>
                <li>
                  <a href>Our Investment</a>
                </li>
                <li>
                  <a href>Perroleom Sector</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">CARRERS</a>
          </li>
          <li>
            <a href="">CONTACT US</a>
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


