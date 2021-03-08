<template>
    <nav class="native-nave navbar navbar-default navbar-static-top m-b-0">
        <div class="navbar-header" style="background-color: #2cabe3 !important;">
            <div class="top-left-part">
                <!-- Logo -->
                <NuxtLink to="/" class="logo" style="text-align:center;">
                    <img src="~/assets/images/logo-w.png" style="width: 25px; display: inline-block; vertical-align: middle;">
                    <span class="hidden-xs">
                        <b> &nbsp;&nbsp;&nbsp;WALLET</b>
                    </span>
                </NuxtLink>
            </div>

            <ul class="nav navbar-top-links navbar-left">
                <li>
                    <a href="#" @click="onExpand" class="open-close waves-effect waves-light"><i class="ti-menu"></i></a>
                </li>
            </ul>
            <ul class="nav navbar-top-links navbar-right pull-right">
                <li>
                    <form role="search" class="app-search hidden-sm hidden-xs m-r-10">
                        <input type="text" placeholder="Search..." class="form-control"> <a href=""><i class="fa fa-search"></i></a>
                    </form>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="~/assets/images/users/default-avatar.png" alt="user-img" width="36" class="img-circle"><b class="hidden-xs">{{this.userName}}</b><span class="caret"></span> </a>
                    <ul class="dropdown-menu dropdown-user animated flipInY">
                        <li>
                            <div class="dw-user-box">
                                <div class="u-img"><img src="~/assets/images/users/varun.jpg" alt="user" /></div>
                                <div class="u-text">
                                    <h4>{{this.userName}}</h4>
                                    <p class="text-muted">orca@gmail.com</p><a href="profile.html" class="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                </div>
                            </div>
                        </li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#"><i class="ti-user"></i> My Profile</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#"><i class="fa fa-power-off"></i> Logout</a></li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
        </div>
    </nav>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'
export default {
  data () {
    return {
      userName: "TEST",
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('users'))
    if(user){
      this.userName = user.employeeName
    }
  },
  methods: {
    onExpand () {
        this.$nuxt.$store.commit('SET_EXPANDMENU')
    }
  },
  components: {
    Navbar, Sidebar
  }
}
</script>

<style lang="less">

    @import "~/assets/less/variables.less";
    @import "~/assets/less/common.less";
    @import "~/assets/less/sidebar-nav.less";
    .native-nave {
      background-color: #2cabe3 !important; position: fixed; z-index: 15000;
    }

    @media (max-width: 1204px) {
      .native-nave {
        width: 100%;
      }
    }

    @media (max-width: 375px) {
      .native-nave {
        width: 375px;
      }
    }
</style>
