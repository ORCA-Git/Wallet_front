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
                  <select class="form-control" v-model="partnersData">
                    <option value="">-- Please choose partner --</option>
                    <option v-for="partner in this.$nuxt.$store.state.partners" v-bind:value="partner"
                            value="partner.partnerName">
                      {{ partner.partnerName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">Wallet ID</label>
                <div class="col-md-8">
                  <input class="form-control" type="text" v-model="walletData.walletId" readonly
                         placeholder="WDxxxxxxxxxxxxxxx">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">Wallet Amount</label>
                <div class="col-md-8">
                  <input class="form-control" ref="amt" type="number" v-model="walletData.amount" placeholder="0.00">
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
              <span class="btn-label"><i class=" ti-save"></i></span>&nbsp;&nbsp;Save Change&nbsp;&nbsp;
            </button>&nbsp;&nbsp;
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
          + Topup Wallet
        </a>
      </div>
      <!-- /.col-lg-12 -->
    </div>
    <!-- /row -->
    <div class="row">
      <div class="col-sm-12">
        <div class="white-box">
          <form class="form-horizontal form-material">
            <div class="row" style="padding: 0px 20px 0px 20px;">
              <input class="form-control " type="text" id="search_branch" v-model="searchQuery"
                     placeholder="Input text for searching ( Code , Name , Contact , Tel .)">
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
              <tr v-for="pw in queriedData" v-if="searchQuery === ''">
                <td class="text-center">{{ pw.id }}</td>
                <td class="text-center">{{ pw.walletId }}</td>
                <td><p v-if="pw.Partner">{{ pw.Partner.partnerName }}</p></td>
                <td class="text-right">{{ toCurrencyString(pw.amount) }}</td>
                <td class="text-center">{{ pw.updatedAt }}</td>
                <td class="text-center"><span class="label label-success">Active</span></td>
                <td class="">Administrator</td>
                <td class="text-center">
                  <nuxt-link :to="{ path: `/wallet/partnerWallet/${pw.walletId}`}"
                             class="cursor-pointer ti-time text-dark"></nuxt-link>
                </td>
              </tr>
              <tr v-for="pw in queriedData" v-if="searchQuery !== ''">
                <td class="text-center">{{ pw.item.id }}</td>
                <td class="text-center">{{ pw.item.walletId }}</td>
                <td><p v-if="pw.item.Partner">{{ pw.item.Partner.partnerName }}</p></td>
                <td class="text-right">{{ toCurrencyString(pw.item.amount) }}</td>
                <td class="text-center">{{ pw.item.updatedAt }}</td>
                <td class="text-center"><span class="label label-success">Active</span></td>
                <td class="">Administrator</td>
                <td class="text-center">
                  <nuxt-link :to="{ path: `/wallet/partnerWallet/${pw.item.walletId}`}"
                             class="cursor-pointer ti-time text-dark"></nuxt-link>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="col-md-12">
              <div class="col-md-6">
                <p class="pagination">
                  Showing {{ from + 1 }} to {{ to }} of {{ total }} entries
                </p>
              </div>
              <div class="col-md-6">
                <div class="pull-right">
                  <base-pagination
                    v-model="pagination.currentPage"
                    :per-page="pagination.perPage"
                    :total="total">
                  </base-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BasePagination from "@/components/BasePagination";
import Fuse from "fuse.js";
import {authHeader} from "@/helper/auth-header";

export default {
  components: {
    BasePagination
  },
  data() {
    return {
      partnerselect: '',
      addmodal: false,
      partnerwallets: [],
      partnersData: '',
      walletData: {
        partnerId: "",
        walletId: "",
        amount: ""
      },
      tableData: [],
      searchedData: [],
      searchQuery: '',
      fuseSearch: null,
      searchProps: ["walletId", "Partner.partnerName"],
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      }
    }
  },
  created() {
    this.$nuxt.$store.dispatch('get_wallets')
  },
  computed: {
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0 || this.searchQuery.length > 0) {
        result = this.searchedData;
        console.log(result)
      }
      return result.slice(this.from, this.to);
    },
    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total() {
      return this.searchedData.length > 0
        ? this.searchedData.length
        : this.tableData.length;
    },
    partners() {
      return this.$nuxt.$store.state.partners
    },
    wallets() {
      return this.$nuxt.$store.state.wallets
    },
    partnerSelect() {
      return this.partnersData
    }
  },
  methods: {
    toCurrencyString(number) {
      return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      //return number.toLocaleString('en-US', {maximumFractionDigits:2})
    },
    onSelectPartner(event) {
      this.partnerselect = event.target.value
      console.log(event.target.value)
    },
    async onAddWallet() {
      if(this.walletData.amount === '' || this.walletData.amount === null){
        this.$nuxt.$store.commit('SET_ALERT', {
          text: 'Amount can\'t be null',
          type: 'error'
        })
        this.$refs.amt.focus()
        return false
      }
      await axios({
        method: 'POST',
        url: this.$nuxt.$store.state.apipath + 'wallets',
        headers: authHeader(),
        data: this.walletData
      }).then(response => {
        if (response.data.type === "success") {
          this.$nuxt.$store.commit('SET_ALERT', {
            text: 'Topup Success !!',
            type: 'success'
          })
          this.addmodal = false
          this.$nuxt.$store.dispatch('get_wallets')
        } else {
          this.$nuxt.$store.commit('SET_ALERT', {
            text: 'Fail to Topup',
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
      this.partnersData = ''
      this.walletData.amount =''
    }
  },
  async mounted() {
  },
  watch: {
    searchQuery(value) {
      let result = this.tableData;
      console.log(result)
      if (value !== '') {
        this.fuseSearch = new Fuse(this.tableData, {
          keys: this.searchProps,
          threshold: 0.0
        });
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    },
    partnerSelect(val) {
      console.log(val)
      this.walletData.partnerId = val.id
      if (val.Wallet) {
        this.walletData.walletId = val.Wallet.walletId
      } else {
        this.walletData.walletId = ''
      }
    },
    wallets(val) {
      this.tableData = val
    }
  }
}
</script>

<style scoped lang="less">
.form-partner-con {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
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
