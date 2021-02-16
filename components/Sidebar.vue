<template>
  <div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav slimscrollsidebar">
      <div class="sidebar-head">
        <h3>
                  <span class="fa-fw open-close">
                    <i class="ti-close ti-menu"></i>
                  </span>
          <span class="hide-menu">
                    Navigation
                  </span>
        </h3>
      </div>
      <div class="user-profile">
        <div class="dropdown user-pro-body">
          <div><img src="~/assets/images/users/default-avatar.png" alt="user-img" class="img-circle"></div>
          <a href="#" class="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true"
             aria-expanded="false">{{ this.userName }}<span class="caret"></span></a>
          <ul class="dropdown-menu animated flipInY">
            <li><a href="#"><i class="ti-user"></i> My Profile</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="login.html22"><i class="fa fa-power-off"></i> Logout</a></li>
          </ul>
        </div>
      </div>
      <ul class="nav" id="side-menu">
        <li>
          <NuxtLink to="/" class="waves-effect t2" v-bind:class="{ 'active': $nuxt.$route.name == 'index' }">
            <i class="las la-chart-bar"></i>
            <span class="hide-menu">DashBoard</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/partner" class="waves-effect t2" v-bind:class="{ 'active': $nuxt.$route.name == 'partner' }">
            <i class="las la-users-cog"></i>
            <span class="hide-menu">Partner</span>
          </NuxtLink>
        </li>
        <li>
          <a
            class="waves-effect"
            @click="walletexpand = !walletexpand"
            v-bind:class="{ 'active': $nuxt.$route.name == 'wallet-partner-wallet' || $nuxt.$route.name == 'wallet-transfer' }">
            <i class="ti-wallet fa-fw" data-icon="v"></i>
            <span class="hide-menu"> Wallet <span class="fa arrow"></span> </span>
          </a>
          <transition name="fade">
            <ul class="nav nav-second-level" v-if="walletexpand">
              <li>
                <NuxtLink to="/wallet/partner-wallet">
                  <i class="icon-wallet fa-fw"></i>
                  <span class="hide-menu">Partner Wallet</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/wallet/transfer">
                  <i class="las la-exchange-alt"></i>
                  <span class="hide-menu">Transfer List</span>
                </NuxtLink>
              </li>
            </ul>
          </transition>
        </li>
        <li>
          <NuxtLink to="/users" class="waves-effect" v-show="false">
            <i class="icon-user fa-fw"></i>
            <span class="hide-menu">User</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/logs" class="waves-effect" v-bind:class="{ 'active': $nuxt.$route.name === 'logs' }" >
            <i class="las la-sign-in-alt"></i>
            <span class="hide-menu">Activity Log</span>
          </NuxtLink>
        </li>
        <li v-on:click="logout">
          <NuxtLink to="/" class="waves-effect">
            <i class="las la-door-open"></i>
            <span class="hide-menu">Log out</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      walletexpand: false,
      userName: "",
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('users'))
    this.userName = user.employeeName
  },
  methods: {
    logout() {
      localStorage.removeItem('users')
      localStorage.removeItem('token')
      localStorage.removeItem('TokenExpired')
      window.location.reload()
      console.log('logout ....')
    },
    goroute(link) {
      this.$router.push({
        name: link
      })
    }
  },
  computed: {},
  components: {}
}
</script>


<style lang="less">
@import "~/assets/less/variables.less";
@import "~/assets/less/common.less";
@import "~/assets/less/sidebar-nav.less";

.waves-effect {
  &.active {
    color: #fff !important;
    background-color: #f33155 !important;
  }
}

.las {
  font-size: 2rem;
}
</style>
