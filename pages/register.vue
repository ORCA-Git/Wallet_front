<template>
    <div id="wrapper" class="new-login-register">
      <div class="lg-info-panel">
        <div class="inner-panel">
            <a href="" class="p-20 di">
                <i class="mdi mdi-wikipedia fa-fw" style="font-size:34px; color:white;"></i>
            </a>
            <div class="lg-content">
                <h2>PARTNER & WALLET Management</h2>
                <p class="text-muted">with transaction payment and more.. </p>
            </div>
        </div>
      </div>
      <div class="new-login-box">
          <div class="white-box">
              <h3 class="box-title m-b-0">Sign In to Admin</h3>
              <small>Enter your details below</small>
            <form class="form-horizontal new-lg-form" id="loginform" action="index.html">
              <div class="form-group  m-t-20">
                <div class="col-xs-12">
                  <label>Username</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Username"
                    v-model="user">
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-12">
                  <label>Password</label>
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    v-model="password">
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12">
                  <div class="checkbox checkbox-info pull-left p-t-0">
                    <input id="checkbox-signup" type="checkbox">
                    <label for="checkbox-signup"> Remember me </label>
                  </div>
                </div>
              </div>
              <div class="form-group text-center m-t-20">
                <div class="col-xs-12">
                    <button
                        @click="onLogin"
                        class="btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light"
                        type="button">
                        Log In
                    </button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
</template>
<script>
  export default {
    layout: 'register',
    data () {
      return {
        user: '',
        password: ''
      }
    },
    methods: {

    },
    components: {
    }
  }
</script>
