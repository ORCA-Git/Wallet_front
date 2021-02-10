<template>
<div class="container-fluid">
  <div class="form-partner-con" v-if="addmodal">
    <div class="inner">
      <form class="form-horizontal form-material mfp-hide white-popup-block">
      <h3 class="text-center"><b>Add / Change Partner </b></h3>
      <hr>
      <fieldset style="border:0;">
          <div class="col-md-12">
              <div class="form-group">
                  <label class="control-label col-md-4">Partner Name<font style="color:red">*</font></label>
                  <div class="col-md-8">
                      <select class="form-control" @change="onSelectPartner($event)" v-model="walletData.partnerId">
                          <option>-- Please choose partner --</option>
                          <option v-for="partner in this.$nuxt.$store.state.partners" :value="partner.id">
                            {{ partner.contactName }}
                          </option>
                      </select>
                  </div>
              </div>
              <div class="form-group">
                  <label class="control-label col-md-4">Wallet ID</label>
                  <div class="col-md-8">
                      <input class="form-control" type="text" v-model="walletData.walletId" placeholder="WDxxxxxxxxxxxxxxx">
                  </div>
              </div>
              <div class="form-group">
                  <label class="control-label col-md-4">Wallet Amount</label>
                  <div class="col-md-8">
                      <input class="form-control" type="text" v-model="walletData.amount" placeholder="0.00">
                  </div>
              </div>
              <div class="form-group" v-show="false">
                  <label class="control-label col-md-4">Status Wallet</label>
                  <div class="col-md-8">
                      <div class="radio-list">
                          <label class="radio-inline p-0">
                              <div class="radio radio-info">
                                  <input type="radio" name="radio" id="radio1" value="option1" checked>
                                  <label for="radio1">Active</label>
                              </div>
                          </label>
                          <label class="radio-inline">
                              <div class="radio radio-info">
                                  <input type="radio" name="radio" id="radio2" value="option2">
                                  <label for="radio2">Close</label>
                              </div>
                          </label>
                      </div>
                  </div>
              </div>
              <div class="form-group" v-show="false">
                  <label class="control-label col-md-4">Remark</label>
                  <div class="col-md-8">
                      <textarea rows="4" class="form-control" type="text" name=""></textarea>
                  </div>
              </div>
          </div>
      </fieldset>
      <hr>
      <div class="col-12" align="center">
          <button class="btn btn-info btn-lg" id="" type="button" @click="onAddWallet">
            <span class="btn-label"><i class=" ti-save"></i></span>&nbsp;&nbsp;Save Change&nbsp;&nbsp;</button>&nbsp;&nbsp;
          <a href="#" class="btn btn-default btn-lg" @click="addmodal = false">
            <span class="btn-label"><i class="t ti-arrow-left"></i></span>
            &nbsp;&nbsp;Close&nbsp;&nbsp;
          </a>
      </div>
      </form>
    </div>
  </div>
  <div class="row bg-title">
      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <h3 class="box-title m-b-10">Partner Wallet</h3>
      </div>
      <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
          <a
            href="#"
            @click="addmodal = true"
            class="popup-with-form btn  btn-success pull-right m-l-20 waves-effect waves-light m-t-10">
              + Add Partner Wallet
          </a>
      </div>
      <!-- /.col-lg-12 -->
  </div>
  <!-- /row -->
  <div class="row">
      <div class="col-sm-12">
          <div class="white-box">
              <form class="form-horizontal form-material">
                  <div class="row" style="padding: 0px 15px;">
                      <h3 class="box-title m-b-10">Search</h3>
                      <div class="col-md-6 text-left">
                          <div class="form-group">
                              <label class="control-label col-md-2 col-sm-2"><h4 class="m-b-0 m-t-0"><b>Partner</b></h4></label>
                              <div class="col-md-10 col-sm-10">
                                  <select class="form-control">
                                      <option>-- Please choose partner --</option>
                                      <option v-for="partner in partners">
                                          {{ partner.contactName }}
                                      </option>
                                  </select>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6 text-left">
                          <div class="form-group">
                              <label class="control-label col-md-2 col-sm-2"><h4 class="m-b-0 m-t-0"><b>Update By</b></h4></label>
                              <div class="col-md-10 col-sm-10">
                                  <select class="form-control">
                                      <option>-- Please choose employee --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6 text-left">
                          <div class="form-group">
                              <label class="control-label col-md-2 col-sm-2"><h4><b>Start Date</b></h4></label>
                              <div class="col-md-10">
                                  <input class="form-control" type="text" name="" placeholder="11/02/2020">
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6 text-left">
                          <div class="form-group">
                              <label class="control-label col-md-2 col-sm-2"><h4><b>End Date</b></h4></label>
                              <div class="col-md-10">
                                  <input class="form-control" type="text" name="" placeholder="11/02/2020">
                              </div>
                          </div>
                      </div>
                  </div>
              </form>

              <div class="table-responsive">
                  <table id="myTable" class="table table-striped">
                      <thead>
                          <tr>
                              <th class="text-center">Seq</th>
                              <th class="text-center">Wallet ID</th>
                              <th class="">Name</th>
                              <th class="text-right">Wallet Amt</th>
                              <th class="text-center">Last Topup</th>
                              <th class="text-center">Status</th>
                              <th class="">Update By</th>
                              <th class="text-center">Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="partnerwallet in wallets">
                              <td class="text-center">1</td>
                              <td class="text-center">WD10110010010</td>
                              <td>Partner 1</td>
                              <td class="text-right">10,000.00</td>
                              <td class="text-center">01-01-2020</td>
                              <td class="text-center"><span class="label label-success">Active</span></td>
                              <td class="">Administrator</td>
                              <td class="text-center">

                                  &nbsp;&nbsp;<a href="topupwallet.html" class="cursor-pointer mdi mdi-coin text-dark"></a>
                                  &nbsp;&nbsp;<a class="cursor-pointer ti-pencil-alt text-dark"></a>
                                  &nbsp;&nbsp;<a class="cursor-pointer ti-trash text-dark"></a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
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
            partnerselect: '',
            addmodal: false,
            partnerwallets: [],
            walletData: {
              partnerId: "",
              walletId: "",
              amount: ""
            }
          }
        },
        components: {
        },
        computed: {
            bearer () {
                return this.$nuxt.$store.state.bearer
            },
            partners () {
              return this.$nuxt.$store.state.partners
            },
            wallets () {
              return this.$nuxt.$store.state.wallets
            }
        },
        methods: {
          onSelectPartner (event) {
            this.partnerselect = event.target.value
          },
          async onAddWallet () {
            await axios.post(
              'http://13.228.120.202:80/api/v1/wallets',
              {
                partnerId: "",
                walletId: "",
                amount: ""
              },
              {
                headers: { Authorization: this.bearer }
              }
            ).then(res => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            })
          }
        },
        async mounted () {
            axios.get('http://13.228.120.202:80/api/v1/wallets',
                { headers: { Authorization: this.bearer } }).then(response => {
                this.partnerwallets = response.data.data
            }).catch((error) => {
                console.log(error);
            })
        }
    }
</script>

<style scoped lang="less">
  .form-partner-con {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    z-index: 10000;
    left: 0px;
    top: 0px;
    overflow-y: scroll;
    .inner {
      position: absolute;
      width: 600px;
      left: 50%;
      margin-left: -300px;
      top: 0px;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    form {
      background: #fff;
      width: 100%;
      padding: 15px;
    }
  }
</style>
