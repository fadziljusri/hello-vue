<template>
  <div class="container">
    <div class="card card-register mx-auto mt-5">
      <div class="card-header">Register an Account</div>
      <div class="card-body">
        <form @submit.prevent="doReg()">
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-label-group">
                  <input type="text" id="firstName" class="form-control" placeholder="First name" required="required"
                         autofocus="autofocus" v-model="reg.fn">
                  <label for="firstName">First name</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-label-group">
                  <input type="text" id="lastName" class="form-control" placeholder="Last name" required="required" v-model="reg.ln">
                  <label for="lastName">Last name</label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required" v-model="reg.email">
              <label for="inputEmail">Email address</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-label-group">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Password"
                         required="required" v-model="reg.password">
                  <label for="inputPassword">Password</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-label-group">
                  <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm password"
                         required="required" v-model="reg.confirmPassword">
                  <label for="confirmPassword">Confirm password</label>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Register</button>
        </form>
        <div class="text-center">
          <router-link :to="{name: 'login'}" class="d-block small mt-3">Login Page</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        reg: {
          fn: 'Test',
          ln: 'Ing',
          email: 'test@test.com',
          password: 'whyevenbotherzzz',
          confirmPassword: 'whyevenbotherzzz'
        }
      }
    },
    methods: {
      doReg(){
        console.log('doing register....');
        this.$router.push({name: 'dashboard'});
      }
    }
  }
</script>
