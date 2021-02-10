<template>
  <div class="container-fluid">
      <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h3 class="box-title m-b-10">Change Partner </h3>
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
                                      <input class="form-control" type="text" v-model="createData.partnerCode">
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
                                      <input class="form-control" type="text" v-model="createData.joinDate" placeholder="2021-02-08">
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
                                      <input class="form-control" type="text" v-model="createData.partnerName">
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
                                          <option>-- Please choose country --</option>
                                          <option>Thailand</option>
                                      </select>
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Expire Date</label>
                                  <div class="col-md-8">
                                      <input class="form-control" type="text" placeholder="2021-02-08" v-model="createData.expireDate">
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
                                      <input class="form-control" type="text" v-model="createData.walletId">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Minimum Amt/Per. Transaction<font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input class="form-control" type="text" v-model="createData.minAmtTransaction">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Limit tran/Per Days<font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input class="form-control" type="text" v-model="createData.limitTransaction">
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
                                      <input class="form-control" type="text" v-model="createData.walletAmount">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Maximum Amt/Per. Transaction<font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input class="form-control" type="text" v-model="createData.maxAmtTransaction">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-4">Fee Amt<font style="color: red">*</font></label>
                                  <div class="col-md-8">
                                      <input class="form-control" type="text" v-model="createData.fee">
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
                                      <input class="form-control" type="text" v-model="createData.secretKey">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-2">Username<font style="color: red">*</font></label>
                                  <div class="col-md-10">
                                      <input class="form-control" type="text" v-model="createData.username">
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label class="control-label col-md-2">Password<font style="color: red">*</font></label>
                                  <div class="col-md-10">
                                      <input class="form-control" type="password" v-model="createData.password" >
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
  export default {
      data () {
          return {
              partners: [],
              paramId: this.$route.params.id,
              createData: {
                partnerCode: "",
                partnerName: "",
                contactName: "",
                email: "",
                tel: "",
                country: "",
                joinDate: "",
                expireDate: "",
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
      components: {
      },
      computed: {
          bearer () {
              return this.$nuxt.$store.state.bearer
          }
      },
      async mounted () {
        await axios.get(this.$nuxt.$store.state.apipath + 'partners/' + this.paramId,
        { headers: { Authorization: this.$nuxt.$store.state.bearer } })
        .then(response => {
          console.log(response)
          this.createData.partnerCode = response.data.data.result.code
          this.createData.partnerName = response.data.data.result.partnerName
          this.createData.contactName = response.data.data.result.contactName
          this.createData.email = response.data.data.result.email
          this.createData.tel = response.data.data.result.tel
          this.createData.country = response.data.data.result.country
          this.createData.joinDate = response.data.data.result.joinDate
          this.createData.expireDate = response.data.data.result.expireDate
          this.createData.address = response.data.data.result.address
          this.createData.remark = response.data.data.result.remark
          this.createData.walletAmount = response.data.data.result.walletAmount
          this.createData.walletId = response.data.data.result.walletId
          this.createData.minAmtTransaction = response.data.data.result.minAmtTransaction
          this.createData.maxAmtTransaction = response.data.data.result.maxAmtTransaction
          this.createData.limitTransaction = response.data.data.result.limitTransaction
          this.createData.fee = response.data.data.result.fee
          this.createData.username = response.data.data.result.username
          this.createData.password = response.data.data.result.password
          this.createData.secretKey = response.data.data.result.secretKey
        }).catch(error => {
        })
      },
      methods: {
        async onCreate () {
          await axios({
            method: 'put',
            url: this.$nuxt.$store.state.apipath+'partners/' + this.paramId,
            headers: { Authorization: this.bearer },
            data: {
                partnerCode: this.createData.partnerCode,
                partnerName: this.createData.partnerName,
                contactName: this.createData.contactName,
                email: this.createData.email,
                tel: this.createData.tel,
                country: this.createData.country,
                joinDate: this.createData.joinDate,
                expireDate: this.createData.expireDate,
                address: this.createData.address,
                remark: this.createData.remark
            }
          }).then(response => {
            console.log(response)
            if(response.data.type == "success") {
              this.$nuxt.$store.dispatch('get_partners')
              this.$router.replace('/partner')
            } else {
              this.$nuxt.$store.commit('SET_ALERT',{
                text: 'Add Partner Failed',
                type: 'error'
              })
            }
          }).catch(err => {
            console.log(err)
            this.$nuxt.$store.commit('SET_ALERT',{
              text: 'Add Partner Failed',
              type: 'error'
            })
          })
        }
      }
  }
</script>
