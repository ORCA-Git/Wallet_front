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
                    <date-picker input-class="form-control" v-model="createData.joinDate"
                                 :value="createData.joinDate"></date-picker>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Address </label>
                  <div class="col-md-8">
                    <textarea rows="4" class="form-control" type="text" v-model="createData.Address"> </textarea>
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
                      <option>-- Please choose country --</option>
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
                    <date-picker input-class="form-control" v-model="createData.expireDate"
                                 :value="createData.expireDate"/>
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
                  <label class="control-label col-md-4">Minimum Amt/Per. Transaction<font
                    style="color: red">*</font></label>
                  <div class="col-md-8">
                    <input ref="minAmtTransaction" class="form-control" type="number"
                           v-model="createData.minAmtTransaction">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Limit tran/Per Days<font style="color: red">*</font></label>
                  <div class="col-md-8">
                    <input ref="limitTransaction" class="form-control" type="number"
                           v-model="createData.limitTransaction">
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
                  <label class="control-label col-md-4">Maximum Amt/Per. Transaction<font
                    style="color: red">*</font></label>
                  <div class="col-md-8">
                    <input ref="maxAmtTransaction" class="form-control" type="number"
                           v-model="createData.maxAmtTransaction">
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
                    <input class="form-control" type="password" v-model="createData.password">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">Upload Document</label>
                  <div class="col-md-10">
                    <vue-dropify v-model="createData.document" accept="image/*"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">&nbsp;</div>
                  <div v-if="imageBase64 !== null" class="col-md-10">
                    <img  :src="'data:image.jpeg;base64,' + imageBase64" alt="Logo" class="img img-responsive">
                  </div>
                </div>
              </div>
            </div>
            <br>
            <hr>
            <br>
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
import VueDropify from 'vue-dropify';

export default {
  components: {
    'vue-dropify': VueDropify
  },
  data() {
    return {
      imageBase64:"",
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
        Address: "",
        remark: "",
        walletAmount: "",
        walletId: "",
        minAmtTransaction: "",
        maxAmtTransaction: "",
        limitTransaction: "",
        fee: "",
        username: "",
        password: "",
        secretKey: "",
        document: null,
      }
    }
  },
  computed: {},
  async mounted() {
    await axios.get(this.$nuxt.$store.state.apipath + 'partners/' + this.paramId,
      {headers: authHeader()})
      .then(response => {
        this.createData.partnerCode = response.data.data.partner.code
        this.createData.partnerName = response.data.data.partner.partnerName
        this.createData.contactName = response.data.data.partner.contactName
        this.createData.email = response.data.data.partner.email
        this.createData.tel = response.data.data.partner.tel
        this.createData.country = response.data.data.partner.country
        this.createData.joinDate = new Date(response.data.data.partner.joinDate)
        this.createData.expireDate = new Date(response.data.data.partner.expireDate)
        this.createData.Address = response.data.data.partner.uAddress
        this.createData.remark = response.data.data.partner.remark
        this.createData.walletAmount = response.data.data.wallet.amount
        this.createData.walletId = response.data.data.wallet.walletId
        this.createData.minAmtTransaction = response.data.data.wallet.minTransaction
        this.createData.maxAmtTransaction = response.data.data.wallet.maxTransaction
        this.createData.limitTransaction = response.data.data.wallet.limitTransactionPerDay
        this.createData.fee = response.data.data.wallet.fee
        this.createData.remark = response.data.data.wallet.remark
        this.createData.username = response.data.data.partner.username
        this.createData.password = response.data.data.partner.password
        this.createData.secretKey = response.data.data.partner.secretKey
        console.log(response.data.data.image)
        if(response.data.data.image) {
          this.imageBase64 = response.data.data.image.image
        }
      }).catch(error => {
      })
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
    async onCreate() {
      if (!this.validate()) {
        return false;
      }
      let formData = new FormData();
      formData.append("data", JSON.stringify(this.createData))
      if (this.createData.document) {
        formData.append("document", this.createData.document[0])
      }
      await axios({
        method: 'put',
        url: this.$nuxt.$store.state.apipath + 'partners/' + this.paramId,
        headers: authHeader('multipart/form-data'),
        data: formData
      }).then(response => {
        if (response.data.type === "success") {
          this.$nuxt.$store.dispatch('get_partners')
          this.$router.replace('/partner')
        } else {
          this.$nuxt.$store.commit('SET_ALERT', {
            text: 'Add Partner Failed',
            type: 'error'
          })
        }
      }).catch(err => {
        console.log(err)
        this.$nuxt.$store.commit('SET_ALERT', {
          text: 'Add Partner Failed',
          type: 'error'
        })
      })
    }
  }
}
</script>
