<template>
  <div class="container-fluid">
    <div class="row bg-title">
      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h3 class="box-title m-b-10">Add User</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="white-box">
          <form class="form-horizontal form-material">
            <h3 class="box-title">Personal Info</h3>
            <hr>
            <div class="row" style="padding: 0px 20px;">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label col-md-4">Employee Code <font style="color: red">*</font></label>
                  <div class="col-md-8">
                    <input ref="employeeCode" class="form-control" type="text" v-model="createData.employeeCode">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Id Card <font style="color: red">*</font></label>
                  <div class="col-md-8">
                    <input ref="idCard" class="form-control" type="text" v-model="createData.idCard">
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label col-md-4"> Tel</label>
                  <div class="col-md-8">
                    <input class="form-control" type="text" v-model="createData.tel">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Birth Date </label>
                  <div class="col-md-8">
                    <date-picker input-class="form-control" v-model="createData.birthDate"/>
                  </div>

                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Start Job Date</label>
                  <div class="col-md-8">
                    <date-picker input-class="form-control" v-model="createData.startJobDate"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Current Address</label>
                  <div class="col-md-8">
                    <textarea rows="4" class="form-control" type="text" v-model="createData.address"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Remark</label>
                  <div class="col-md-8">
                    <textarea rows="4" class="form-control" type="text" v-model="createData.remark"></textarea>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label col-md-4">Employee Name <font style="color: red">*</font></label>
                  <div class="col-md-8">
                    <input ref="employeeName" class="form-control" type="text" v-model="createData.employeeName">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Nick Name </label>
                  <div class="col-md-8">
                    <input class="form-control" type="text" v-model="createData.nickName">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Email</label>
                  <div class="col-md-8">
                    <input class="form-control" type="text" v-model="createData.email">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Age (Year)</label>
                  <div class="col-md-8">
                    <input class="form-control" type="number" v-model="createData.age">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Role</label>
                  <div class="col-md-8">
                    <input class="form-control" type="text" v-model="createData.Role">
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <h3 class="box-title m-b-30">User Info</h3>
            <hr>
            <div class="row" style="padding: 0px 20px;">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label col-md-4">Username<font style="color: red">*</font></label>
                  <div class="col-md-8">
                    <input ref="username" class="form-control" type="text" v-model="createData.username">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label col-md-4">Password<font style="color: red">*</font></label>
                  <div class="col-md-8">
                    <input ref="password" class="form-control" type="password" v-model="createData.password">
                  </div>
                </div>
              </div>
            </div>
            <br>
            <hr>
            <br>
            <div class="col-12" align="center">
              <button class="btn btn-info btn-lg" type="button" @click="onSave">
                <span class="btn-label"><i class=" ti-save"></i></span>&nbsp;&nbsp;Save Change&nbsp;&nbsp;
              </button>&nbsp;&nbsp;
              <NuxtLink to="/users" class="btn btn-default btn-lg">
                <span class="btn-label"><i class="t ti-arrow-left"></i></span>
                &nbsp;&nbsp;Back&nbsp;&nbsp;
              </NuxtLink>
            </div>
            <br>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import {authHeader} from "@/helper/auth-header";

export default {
  data() {
    return {
      paramId: this.$route.params.id,
      createData: {
        username: "",
        password: "",
        employeeCode: "",
        employeeName: "",
        idCard: "",
        nickName: "",
        tel: "",
        email: "",
        birthDate: new Date(),
        age: "",
        startJobDate: new Date(),
        Role: "",
        address: "",
        remark: ""
      }
    }
  },
  async mounted() {
    await axios.get(this.$nuxt.$store.state.apipath + 'users/' + this.paramId,
      {headers: authHeader()})
      .then(response => {
        console.log(response.data.data)
        const val = response.data.data.result
        this.createData.employeeCode = val.employeeCode
        this.createData.idCard = val.idCard
        this.createData.tel = val.tel
        this.createData.birthDate = new Date(val.birthDate)
        this.createData.startJobDate = new Date(val.startJobDate)
        this.createData.address = val.address
        this.createData.remark = val.remark
        this.createData.employeeName = val.employeeName
        this.createData.nickName = val.nickName
        this.createData.email  =val.email
        this.createData.age = val.age
        this.createData.Role =val.Role
        this.createData.username = val.username
        this.createData.password = val.password

      }).catch(error => {
      })
  },
  methods: {
    validate() {
      if (!this.createData.employeeCode || this.createData.employeeCode === "") {
        this.$refs.employeeCode.focus()
        return false
      }
      if (!this.createData.employeeName || this.createData.employeeName === "") {
        this.$refs.employeeName.focus()
        return false
      }
      if (!this.createData.idCard || this.createData.idCard === "") {
        this.$refs.idCard.focus()
        return false
      }
      return true
    }
    ,
    async onSave() {
      if (!this.validate()) {
        return false
      }
      await axios({
        method: 'PUT',
        url: this.$nuxt.$store.state.apipath + 'users/'+ this.paramId,
        headers: authHeader(),
        data: this.createData
      }).then(response => {
        if (response.data.type === "success") {
          this.$nuxt.$store.dispatch('get_partners')
          this.$router.replace('/users')
        } else {
          this.$nuxt.$store.commit('SET_ALERT', {
            text: 'Fail to Add users',
            type: 'error'
          })
        }
      }).catch(err => {
        console.log(err.response.data.message);
        this.$nuxt.$store.commit('SET_ALERT', {
          text: err.response.data.message,
          type: 'error'
        })
      })
    }
  }
}
</script>
