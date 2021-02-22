<template>
  <div class="container-fluid">
      <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h3 class="box-title m-b-10">Add Partner </h3>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-12">
              <div class="white-box">
                  <div class="form-horizontal form-material">
                      <h3 class="box-title">Partner Info</h3>
                      <hr>
                      <div class="row" style="padding: 0px 20px;">
                          <div class="col-md-6">
                              <div class="form-group">
                                  <label class="control-label col-md-4">Partner Code <font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input ref="partnerCode" class="form-control" type="text" v-model="createData.partnerCode">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Contact Name </label>
                                  <div class="col-md-8">
                                      <input class="form-control" type="text" v-model="createData.contactName">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Email </label>
                                  <div class="col-md-8">
                                      <input class="form-control" type="text" v-model="createData.email">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Join Date </label>
                                  <div class="col-md-8">
                                    <date-picker input-class="form-control" v-model="createData.joinDate"/>
<!--                                      <input class="form-control" type="text" v-model="createData.joinDate" placeholder="2021-02-08">-->
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Address </label>
                                  <div class="col-md-8">
                                      <textarea rows="4" class="form-control" type="text" v-model="createData.address"></textarea>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <label class="control-label col-md-4">Partner Name <font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input ref="partnerName" class="form-control" type="text" v-model="createData.partnerName">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Tel</label>
                                  <div class="col-md-8">
                                      <input class="form-control" type="text" v-model="createData.tel">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Country </label>
                                  <div class="col-md-8">
                                      <select class="form-control" v-model="createData.country">
                                          <option value="">-- Please choose country --</option>
                                          <option value="Thailand">Thailand</option>
                                          <option value="Singapore">Singapore</option>
                                          <option value="Malaysia">Malaysia</option>
                                          <option value="Indonesia">Indonesia</option>
                                      </select>
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Expire Date</label>
                                  <div class="col-md-8">
                                    <date-picker input-class="form-control" v-model="createData.expireDate"/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <h3 class="box-title m-b-30">Wallet Info</h3>
                      <hr>
                      <div class="row" style="padding: 0px 20px;">
                          <div class="col-md-6">
                              <div class="form-group">
                                  <label class="control-label col-md-4">Wallet ID <font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input ref="walletId" class="form-control" type="text" v-model="createData.walletId">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Minimum Amt/Per. Transaction<font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input ref="minAmtTransaction" class="form-control" type="number" v-model="createData.minAmtTransaction">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Limit tran/Per Days<font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input ref="limitTransaction" class="form-control" type="number" v-model="createData.limitTransaction">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Remark</label>
                                  <div class="col-md-8">
                                      <input class="form-control" type="text" v-model="createData.remark">
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <label class="control-label col-md-4">Wallet Amount<font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input ref="walletAmount" class="form-control" type="number" v-model="createData.walletAmount">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Maximum Amt/Per. Transaction<font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input ref="maxAmtTransaction" class="form-control" type="number" v-model="createData.maxAmtTransaction">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Fee Amt<font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input ref="fee" class="form-control" type="number" v-model="createData.fee">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <h3 class="box-title m-b-30">API Info</h3>
                      <hr>
                      <div class="row" style="padding: 0px 20px;">
                          <div class="col-md-12">
                              <div class="form-group">
                                  <label class="control-label col-md-2">Secret Key<font style="color: red">*</font></label>
                                  <div class="col-md-10">
                                      <input ref="secretKey" class="form-control" type="text" v-model="createData.secretKey">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-2">Username<font style="color: red">*</font></label>
                                  <div class="col-md-10">
                                      <input ref="username" class="form-control" type="text" v-model="createData.username">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-2">Password<font style="color: red">*</font></label>
                                  <div class="col-md-10">
                                      <input ref="password" class="form-control" type="password" v-model="createData.password" >
                                  </div>
                              </div>
                          </div>
                      </div>
                      <br><hr><br>
                      <div class="col-12" align="center">
                          <button class="btn btn-info btn-lg" type="button" @click="onCreate">
                            <span class="btn-label"><i class=" ti-save"></i></span>
                              &nbsp;&nbsp;Save Change&nbsp;&nbsp;
                          </button>
                          &nbsp;&nbsp;
                          <NuxtLink to="/partner" class="btn btn-default btn-lg">
                            <span class="btn-label"><i class="t ti-arrow-left"></i></span>
                            &nbsp;&nbsp;Back&nbsp;&nbsp;
                          </NuxtLink>
                      </div>
                      <br>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import {authHeader} from "@/helper/auth-header";
  export default {
      components: {
      },
      data () {
          return {
              partners: [],
              errors:[],
              createData: {
                partnerCode: "",
                partnerName: "",
                contactName: "",
                email: "",
                tel: "",
                country: "",
                joinDate: new Date(),
                expireDate: null,
                address: "",
                remark: "",
                walletAmount: "",
                walletId: "",
                minAmtTransaction: "",
                maxAmtTransaction: "",
                limitTransaction: "",
                fee: "",
                username: "",
                password: "",
                secretKey: ""
              }
          }
      },
      created() {
        let oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        this.createData.expireDate = oneYearFromNow
      },
    computed: {


      },
      methods: {
        validate() {
          this.errors = [];
          if (!this.createData.partnerCode) {
            this.$refs.partnerCode.focus()
            return false
          }
          if (!this.createData.partnerName) {
            this.$refs.partnerName.focus()
            return false
          }
          if (!this.createData.walletId) {
            this.$refs.walletId.focus()
            return false
          }
          if (!this.createData.walletAmount) {
            this.$refs.walletAmount.focus()
            return false
          }
          if (!this.createData.minAmtTransaction) {
            this.$refs.minAmtTransaction.focus()
            return false
          }
          if (!this.createData.maxAmtTransaction) {
            this.$refs.maxAmtTransaction.focus()
            return false
          }
          if (!this.createData.limitTransaction) {
            this.$refs.limitTransaction.focus()
            return false
          }
          if (!this.createData.fee) {
            this.$refs.fee.focus()
            return false
          }
          if (!this.createData.secretKey) {
            this.$refs.secretKey.focus()
            return false
          }
          if (!this.createData.username) {
            this.$refs.username.focus()
            return false
          }
          if (!this.createData.password) {
            this.$refs.password.focus()
            return false
          }

         return true

        },
        async onCreate () {
          if(!this.validate()){
            return false;
          }
          await axios({
            method: 'post',
            url: this.$nuxt.$store.state.apipath+'partners',
            headers: authHeader(),
            data: this.createData
          }).then(response => {
            if(response.data.type === "success") {
              this.$nuxt.$store.dispatch('get_partners')
              this.$router.replace('/partner')
            } else {
              this.$nuxt.$store.commit('SET_ALERT',{
                text: 'Fail to Add partner',
                type: 'error'
              })
            }
          }).catch(err => {
            console.log(err.response.data.message);
            this.$nuxt.$store.commit('SET_ALERT',{
              text: err.response.data.message,
              type: 'error'
            })
          })
        }
      }
  }
</script>
