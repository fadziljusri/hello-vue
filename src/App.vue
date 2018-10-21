<template>
  <div id="app">
    <!--<div class="mukadimmah">-->
        <!--<img src="./assets/logo.png">-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<script>
import 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// import './assets/js/sb-admin'
export default {
  name: 'App'
}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "./assets/css/sb-admin.css";

/*#app>div.mukadimmah {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
