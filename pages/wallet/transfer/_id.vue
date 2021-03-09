<template>
  <div class="container-fluid">
    <div class="row bg-title">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <h3 class="box-title m-b-10">Transfer Info
        </h3>
      </div>
      <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
        <NuxtLink to="/wallet/transfer"
                  class="btn  btn-default pull-right m-l-20 waves-effect waves-light m-t-10">Back
        </NuxtLink>
      </div>
      <!-- /.col-lg-12 -->
    </div>
    <!-- /row -->
    <div class="row">
      <div class="col-sm-12">
        <div class="white-box">

          <form class="form-horizontal form-material">
            <h3 class="box-title">Transaction Info</h3>
            <p class="text-muted m-b-30 font-13"> transaction info , wallet info , transfer , picture bill.</p>
            <div id="exampleBasic2" class="wizard">
              <ul class="wizard-steps" role="tablist">
                <li class="active" role="tab">
                  <h4><span><i class="ti-wallet"></i></span>Wallet Info</h4>
                </li>
                <li role="tab">
                  <h4><span><i class="ti-user"></i></span>Customer Info</h4>
                </li>
                <li role="tab">
                  <h4><span><i class="ti-check"></i></span>Confirmation</h4>
                </li>
              </ul>
              <div class="wizard-content">
                <div class="wizard-pane active" role="tabpanel">
                  <div class="row" style="padding: 0px 20px;">
                    <h3 class="box-title">Partner , Wallet Info</h3>
                    <hr>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label col-md-4">Partner Code <span style="color: red">*</span></label>
                        <div class="col-md-8">
                          <select ref="partnerCode" class="form-control" v-model="createData.partnerCode">
                            <option value="">-- Please choose partner --</option>
                            <option v-for="partner in this.$nuxt.$store.state.partners" v-bind:value="partner.code"
                                    value="partner.code">
                              {{ partner.code }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Wallet ID</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.walletID" readonly>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Balance</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.balance" readonly>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <h3 class="box-title">Transfer Info</h3>
                      <hr>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label col-md-4">Transaction Order No</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.order_no">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Transfer Date <span style="color:red;">*</span></label>
                        <div class="col-md-8">
                          <date-picker ref="transactionDate" input-class="form-control"
                                       v-model="createData.transaction_date"/>
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="control-label col-md-4">Transaction Fee <span style="color:red">*</span> </label>
                        <div class="col-md-8">
                          <input ref="fee" class="form-control" type="number" name="" v-model="createData.fee">
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="control-label col-md-4">Reason</label>
                        <div class="col-md-8">
                          <textarea rows="4" class="form-control" type="text" name=""
                                    v-model="createData.reason"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">SMS</label>
                        <div class="col-md-8">
                          <textarea rows="4" class="form-control" name=""
                                    v-model="createData.sms"></textarea>
                        </div>
                      </div>

                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label col-md-4">Transaction Invoice</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.invoice">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Amount <span style="color:red;">*</span></label>
                        <div class="col-md-8">
                          <input ref="amount" class="form-control" type="number" name="" v-model="createData.amount">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Transfer Rate <span style="color:red">*</span> </label>
                        <div class="col-md-8">
                          <input ref="rate" class="form-control" type="number" name="" v-model="createData.rate">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Receipt Date <span style="color:red;">*</span></label>
                        <div class="col-md-8">
                          <date-picker ref="receiptDate" input-class="form-control" v-model="createData.receipt_date"/>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Submitted</label>
                        <div class="col-md-8">
                          <textarea rows="4" class="form-control" type="text" name=""
                                    v-model="createData.submitted"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Coupon</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.coupon">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wizard-pane" role="tabpanel">
                  <div class="row" style="padding: 0px 20px;">
                    <h3 class="box-title">Customer , Account Info</h3>
                    <hr>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label col-md-4">Customer Name</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.customer_name">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Tel.</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.customer_tel">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Bank Name</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.customer_bank">
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="control-label col-md-4">Account No</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.customer_account">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Address</label>
                        <div class="col-md-8">
                          <textarea rows="4" class="form-control" type="text" name=""
                                    v-model="createData.customer_address"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label col-md-4">Sub District</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.customer_subdistrict">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Country</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.customer_country">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Zip Code</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.customer_postcode">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">State</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" name="" v-model="createData.customer_state">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-4">Remark</label>
                        <div class="col-md-8">
                          <textarea rows="4" class="form-control" type="text" name=""
                                    v-model="createData.customer_remark"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wizard-pane">
                  <h3 class="box-title">Upload Slip Transfer To Customer</h3>
                  <div v-for="imageBase64 in ImagesData" class="m-b-5">
                    <img  :src="'data:image.jpeg;base64,' + imageBase64" alt="Logo" class="img img-responsive">
                  </div>
                  <h3 v-if="ImagesData.length <= 0">No Image</h3>
                </div>
              </div>
            </div>
          </form>
        </div>
        <br>
        <hr>
        <br>
        <div class="col-12" align="center">
          <NuxtLink to="/wallet/transfer" class="btn btn-default btn-lg">
            <span class="btn-label"><i class="t ti-arrow-left"></i></span>
            &nbsp;&nbsp;Back&nbsp;&nbsp;
          </NuxtLink>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
import VueDropify from 'vue-dropify';
import axios from "axios";
import {authHeader} from "@/helper/auth-header";

export default {
  components: {
    'vue-dropify': VueDropify
  },
  data() {
    return {
      paramId: this.$route.params.id,
      ImagesData:[],
      createData: {
        partnerId:"",
        walletID:'',
        balance:0,
        amount: 0,
        slip: null,
        partnerCode: "",
        bankName: "",
        bsbNumber: "",
        accountNo: "",
        order_no: "",
        invoice: "",
        transaction_date: new Date(),
        rate: 0,
        fee: 0,
        receipt_date: new Date(),
        to_customer: "",
        from_partner: "",
        reason: "",
        submitted: "",
        sms: "",
        coupon: "",
        customer_bank:"",
        customer_account: "",
        customer_id: "",
        customer_tel: "",
        customer_subdistrict: "",
        customer_country: "",
        customer_postcode: "",
        customer_name: "",
        customer_address: "",
        customer_state: "",
        customer_remark: ""
      }
    }
  },
  computed:{
    walletID() {
      return this.$nuxt.$store.state.walletId
    }
  },
  async mounted() {
    await axios.get(this.$nuxt.$store.state.apipath + 'transfers/' + this.paramId,
      {headers: authHeader()})
      .then(response => {
        const val = response.data.data.result
        console.log(val)
        if(val.Wallet){
          this.createData.walletID = val.Wallet.walletId
          this.createData.balance = val.Wallet.amount
        }
        if(response.data.data.image.length >0 ) {
          this.ImagesData = response.data.data.image
        }
        this.createData.slip = val.slip
        this.createData.partnerCode = val.from_partner;
        this.createData.customer_bank = val.customer_bank
        this.createData.bsbNumber = val.bsbNumber
        this.createData.customer_account = val.customer_account
        this.createData.order_no = val.order_no
        this.createData.invoice = val.invoice
        this.createData.transaction_date = new Date(val.transaction_date)
        this.createData.rate = val.rate
        this.createData.fee = val.fee
        this.createData.receipt_date = new Date(val.receipt_date)
        this.createData.to_customer = val.to_customer
        this.createData.from_partner = val.from_partner
        this.createData.reason = val.reason
        this.createData.submitted = val.submited
        this.createData.amount = val.amount
        this.createData.sms = val.sms
        this.createData.coupon = val.coupon
        this.createData.customer_id = val.customer_id
        this.createData.customer_tel = val.customer_tel
        this.createData.customer_subdistrict = val.customer_subdistrict
        this.createData.customer_country = val.customer_country
        this.createData.customer_postcode = val.customer_postcode
        this.createData.customer_name = val.customer_name
        this.createData.customer_address = val.customer_address
        this.createData.customer_state = val.customer_state
        this.createData.customer_remark = val.customer_remark
        this.createData.customer_remark = val.customer_remark
      }).catch(error => {
      })
  },
  methods: {
    validate() {
      if (this.createData.partnerCode === "" || this.createData.partnerCode === null) {
        this.$refs.partnerCode.focus()
        return false
      }
      if (this.createData.rate === "" || this.createData.rate === null) {
        this.$refs.rate.focus()
        return false
      }
      if (this.createData.fee === "" || this.createData.fee === null) {
        this.$refs.fee.focus()
        return false
      }
      if (this.createData.transaction_date === "" || this.createData.transaction_date === null) {
        this.$refs.transactionDate.focus()
        return false
      }
      if (this.createData.receipt_date === "" || this.createData.receipt_date === null) {
        this.$refs.receiptDate.focus()
        return false
      }

      return true
    },
    async saveData() {
      if (!this.validate()) {
        return false
      }
      let formData = new FormData();
      formData.append("data", JSON.stringify(this.createData))
      if (this.createData.slip !== null || this.createData.slip) {
        formData.append("slip", this.createData.slip[0])
      } else {
        formData.append("slip", null)
      }
      await axios({
        method: 'POST',
        url: this.$nuxt.$store.state.apipath + 'transfers',
        headers: authHeader('multipart/form-data'),
        data: formData,
      }).then(response => {
        if (response.data.type === "success") {
          this.$nuxt.$store.dispatch('get_partners')
          this.$router.replace('/wallet/transfer')
        } else {
          this.$nuxt.$store.commit('SET_ALERT', {
            text: 'Fail to Add partner',
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
  ,
  watch: {
    walletID(val){
      this.createData.walletID = val
    }
  }
}
</script>
