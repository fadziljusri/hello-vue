<template>
  <ul class="sidebar navbar-nav">
    <li class="nav-item">
      <router-link :to="{name: 'dashboardPage'}" exact replace class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-fw fa-folder"></i>
        <span>Pages</span>
      </a>
      <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <h6 class="dropdown-header">Login Screens:</h6>
        <router-link :to="{name: 'login'}" class="dropdown-item">Login</router-link>
        <router-link :to="{name: 'register'}" class="dropdown-item">Register</router-link>
        <!--<a class="dropdown-item" href="forgot-password.html">Forgot Password</a>-->
        <!--<div class="dropdown-divider"></div>-->
        <!--<h6 class="dropdown-header">Other Pages:</h6>-->
        <!--<a class="dropdown-item" href="404.html">404 Page</a>-->
        <!--<a class="dropdown-item" href="blank.html">Blank Page</a>-->
      </div>
    </li>
    <li class="nav-item">
      <router-link :to="{name:'settingsPage'}" class="nav-link">
        <i class="fas fa-cog"></i>
        <span>Settings</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Sidebar'
  }
</script>

<style scoped>
  .router-link-active {
    color: #fff !important;
  }
</style>

