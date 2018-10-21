<template>
  <div>
    <navbar></navbar>
    <div id="wrapper">
      <sidebar></sidebar>

      <div id="content-wrapper">
        <div class="container-fluid">
          <!-- Pages-->
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>

      <!-- Sticky Footer -->
      <app-footer></app-footer>

    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar'
  import Navbar from "./Navbar";
  import AppFooter from "./AppFooter";

  export default {
    name: 'Dashboard',
    components: {
      AppFooter,
      Navbar,
      Sidebar
    }
  }
</script>
