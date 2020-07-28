
    
<template>
  <div id="header">
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


