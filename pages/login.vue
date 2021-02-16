<template>
    <div id="wrapper" class="new-login-register-con">
      <div class="left-post" style="">
        <div class="inner-front middle-item">
          <div>
            <a href="" class="p-20 di">
                <i class="mdi mdi-wikipedia fa-fw" style="font-size:34px; color:white;"></i>
            </a>
            <div class="lg-content">
                <h2>PARTNER & WALLET Management</h2>
                <p class="text-muted">with transaction payment and more.. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="new-login-box-con middle-item">
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
import axios from 'axios'
export default {
  layout: 'login',
  data () {
    return {
      token: '',
      user: '',
      password: ''
    }
  },
  methods: {
    async Me(){
      await axios({
        method: 'GET',
        url: this.$nuxt.$store.state.apipath+'users/profile',
        headers: { Authorization: 'Bearer '+this.token }
      }).then(res =>{
        console.log(res.data.data)
        localStorage.setItem('users',JSON.stringify(res.data.data.profile))
      })
    },
    async onLogin () {
      if (this.user == '' || this.password == '') {
        this.$nuxt.$store.commit('SET_ALERT',{
          text: 'Field Login Missing',
          type: 'error'
        })
      } else {
        await axios.post(this.$nuxt.$store.state.apipath+'login',{
          username: this.user,
          password: this.password
        }).then(res => {
          if (res.data.type == 'success') {
            this.$nuxt.$store.commit('SET_ALERT',{
              text: 'Login Successful',
              type: 'correct',
              direct: '/'
            })
            this.$nuxt.$store.commit('SET_TOKEN',{
              token: res.data.data.token
            })
            this.token = res.data.data.token;
            this.Me()
          } else {
            this.$nuxt.$store.commit('SET_ALERT',{
              text: 'Login Fail',
              type: 'error'
            })
          }
        }).catch(err => {
          this.$nuxt.$store.commit('SET_ALERT',{
            text: 'Login Fail',
            type: 'error'
          })
        })
      }
    }
  },
  components: {
  }
}
</script>

<style lang="less">
  .left-post {
    position: absolute;
    left: 0px;
    height: 100%;
    width: 400px;
    background: url('../assets/images/login-register.jpg');
    background-position: 50% 50%;
    background-size: cover;
    .inner-front {
      background-color: rgba(0,0,0,0.6);
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      padding: 20px;
      div, a, p ,h1, h2,h3,h4,h5 {
        color: #fff !important;
      }
    }
  }
  .new-login-register-con {
    position: relative;
    padding-left: 400px;
    height: 100vh;
    background-color: #fff;
    .white-box {
      width: 400px;
      text-align: left;
    }
    .new-login-box-con {
      height: 100vh;
    }
  }
</style>
