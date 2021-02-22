<template>
  <div class="container-fluid">
    <div class="row bg-title">
      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h3 class="box-title m-b-10">Transfer Lsit</h3>
      </div>
      <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
        <NuxtLink to="/wallet/transfer/add"
                  class="btn  btn-success pull-right m-l-20 waves-effect waves-light m-t-10">
          + Add Transfer
        </NuxtLink>
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
                <th class="text-center">Transaction ID</th>
                <th class="text-center">Transaction Date</th>
                <th>Partner Name</th>
                <th>Customer Name</th>
                <th class="text-right">Amount</th>
                <th class="text-center">STATUS</th>
                <th class="text-center">Update By</th>
                <th class="text-right">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="transfer,index in queriedData" v-if="searchQuery === ''">
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center">{{ transfer.order_no }}</td>
                <td class="text-center">{{ transfer.transaction_date | formatDate }}</td>
                <td>
                  <div v-if="transfer.Partner">{{ transfer.Partner.partnerName }}</div>
                </td>
                <td>{{ transfer.customer_name }}</td>
                <td class="text-right">{{ toCurrencyString(transfer.amount) }}</td>
                <td class="text-center">
                  <span v-if="transfer.status==='APPROVED'"  class="label label-success">Approved</span>
                  <span v-if="transfer.status==='CANCEL'"  class="label label-danger">Cancel</span>
                </td>
                <td class="">Administrator</td>
                <td class="text-right">
                  <nuxt-link :to="{ path: `/wallet/transfer/${transfer.id}`}"
                             class="cursor-pointer ti-eye"></nuxt-link>
                  &nbsp;&nbsp;<a v-if="transfer.status==='APPROVED'" class="cursor-pointer ti-trash text-dark"
                                 @click="onDelete(transfer.id)"></a>
                </td>
              </tr>
              <tr v-for="transfer,index in queriedData" v-if="searchQuery !== ''">
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center">{{ transfer.item.order_no }}</td>
                <td class="text-center">{{ transfer.item.transaction_date | formatDate }}</td>
                <td>
                  <div v-if="transfer.item.Partner">{{ transfer.item.Partner.partnerName }}</div>
                </td>
                <td>{{ transfer.item.customer_name }}</td>
                <td class="text-right">{{ toCurrencyString(transfer.item.amount) }}</td>
                <td class="">Administrator</td>
                <td class="text-center">
                  <nuxt-link :to="{ path: `/wallet/transfer/${transfer.item.id}`}"
                             class="cursor-pointer ti-eye"></nuxt-link>
                  &nbsp;<a class="cursor-pointer ti-trash text-dark"
                           @click="onDelete(transfer.item.id)"></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Fuse from "fuse.js";
import {authHeader} from "@/helper/auth-header";

export default {
  data() {
    return {
      token: this.$nuxt.$store.state.token,
      tableData: [],
      searchedData: [],
      searchQuery: '',
      fuseSearch: null,
      searchProps: ["id", "Partner.partnerName", "order_no"],
      pagination: {
        perPage: 20,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      }
    }
  },
  created() {
    this.$nuxt.$store.dispatch('get_transfers')
  },
  components: {},
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
    transfers() {
      return this.$nuxt.$store.state.transfers
    },
  },
  methods: {
    async onDelete(id, email, username) {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel this transaction !'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: 'DELETE',
            url: this.$nuxt.$store.state.apipath + 'transfers/' + id,
            headers: authHeader()
          }).then(response => {
            this.$nuxt.$store.commit('SET_ALERT', {
              text: 'Cancel Transaction Successful',
              type: 'correct'
            })
            this.$nuxt.$store.dispatch('get_transfers')
          }).catch(err => {
            this.$nuxt.$store.commit('SET_ALERT', {
              text: `Delete Transaction Failed (${err.response.data.message})`,
              type: 'error'
            })
          })
        }
      })
    },
    toCurrencyString(number) {
      if (number) {
        return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
      //return number.toLocaleString('en-US', {maximumFractionDigits:2})
    },
    getPartnerName(id) {
      let partners = this.$nuxt.$store.state.partners
      let partner = "";
      for (var i = 0; i < partners.length; i++) {
        if (partners[i].id == id) {
          partner = partners[i]
        }
      }
      return partner
    }
  }
  ,
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
    }
    ,
    transfers(val) {
      this.tableData = val
    }
  }
}
</script>
