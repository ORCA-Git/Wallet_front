<template>
  <div class="container-fluid">
    <div class="row bg-title">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h3 class="box-title m-b-10">Wallet ID : {{ this.paramId }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="white-box">
          <div class="form-horizontal form-material">
            <h3 class="box-title">Wallet Info</h3>
            <hr>
            <div class="row" style="padding: 0px 20px;">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label col-md-4">Partner Code</label>
                  <div class="col-md-8">
                    <input ref="partnerCode" class="form-control" type="text" readonly v-model="createData.partnerCode">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">Contact Name </label>
                  <div class="col-md-8">
                    <input class="form-control" type="text" readonly v-model="createData.contactName">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">WalletID </label>
                  <div class="col-md-8">
                    <input class="form-control" type="text" readonly v-model="createData.walletId">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label col-md-4">Partner Name</label>
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
                  <label class="control-label col-md-4">Wallet Amount</label>
                  <div class="col-md-8">
                    <input class="form-control" type="text" v-model="createData.walletAmount">
                  </div>
                </div>
              </div>
            </div>
            <br>
            <hr>
            <br>
            <div class="table-responsive">
              <table id="myTable" class="table table-striped">
                <thead>
                <tr>
                  <th class="text-center">Seq</th>
                  <th class="text-center">Date</th>
                  <th class="text-right">Amount</th>
                  <th class="text-center">Topup By</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="pw in queriedData" v-if="searchQuery === ''">
                  <td class="text-center">{{ pw.id }}</td>
                  <td class="text-center">{{ pw.createdDate }}</td>
                  <td class="text-right">{{ pw.amount }}</td>
                  <td class="text-center"><p v-if="pw.User">{{ pw.User.employeeCode }}</p></td>
                </tr>
                <tr v-for="pw in queriedData" v-if="searchQuery !== ''">
                  <td class="text-center">{{ pw.id }}</td>
                  <td class="text-center">{{ pw.cretedDate }}</td>
                  <td class="text-right">{{ pw.amount }}</td>
                  <td class="text-center"><p v-if="pw.User">{{ pw.User.employeeCode }}</p></td>
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
            <div class="col-12" align="center">
              <NuxtLink to="/wallet/partnerWallet" class="btn btn-default btn-lg">
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
  data() {
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
        secretKey: ""
      },
      tableData: [],
      searchedData: [],
      searchQuery: '',
      fuseSearch: null,
      searchProps: ["walletId","Partner.partnerName"],
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      }
    }
  },
  created() {
    this.$nuxt.$store.dispatch('get_wallets_history',this.paramId)
  },
  components: {},
  computed: {
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0 || this.searchQuery.length > 0) {
        result = this.searchedData;

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
    history() {
      return this.$nuxt.$store.state.walletsHistory
    },
  },
  async mounted() {
    await axios.get(this.$nuxt.$store.state.apipath + 'wallets/' + this.paramId,
      {headers: authHeader()})
      .then(response => {
        if(response.data.data.result.Partner) {
          this.createData.partnerCode = response.data.data.result.Partner.code
          this.createData.partnerName = response.data.data.result.Partner.partnerName
          this.createData.contactName = response.data.data.result.Partner.contactName
          this.createData.email = response.data.data.result.Partner.email
          this.createData.tel = response.data.data.result.Partner.tel
          this.createData.country = response.data.data.result.Partner.country
        }
        this.createData.walletAmount = response.data.data.result.amount
        this.createData.walletId = response.data.data.result.walletId
      }).catch(error => {
        console.log(error)
      })
  },
  methods: {},
  watch: {
    history(val) {
      this.tableData = val
    }
  }
}
</script>
