<template>
  <div class="container">
    <div class="card card-login mx-auto mt-5">
      <div class="card-header">Login</div>
      <div class="card-body">
        <form @submit.prevent="doLogin()">
          <div class="form-group">
            <div class="form-label-group">
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required"
                     autofocus="autofocus" v-model="login.email">
              <label for="inputEmail">Email address</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="required" v-model="login.password">
              <label for="inputPassword">Password</label>
            </div>
          </div>
          <div class="form-group">
            <div class="checkbox">
              <label>
                <input type="checkbox" value="remember-me">
                Remember Password
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
        <div class="text-center">
          <router-link :to="{name:'register'}" class="d-block small mt-3" href="register.html">Register an Account</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        login: {
          email: 'test@test.com',
          password: 'itsjustadummypasswordwhybother'
        }
      }
    },
    methods:{
      doLogin(){
        console.log('doing login..');
        this.$router.push({name: 'dashboard'});
      }
    }
  }
</script>
