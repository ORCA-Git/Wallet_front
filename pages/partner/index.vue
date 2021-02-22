<template>
  <div class="container-fluid">
    <div class="row bg-title">
      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h3 class="box-title m-b-10">Partner List</h3>
      </div>
      <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
        <NuxtLink to="/partner/add"
                  class="btn  btn-success pull-right m-l-20 waves-effect waves-light m-t-10">
          + Add Partner
        </NuxtLink>
      </div>
    </div>
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
            <!--            <el-table :data="partners" class="table table-striped">-->
            <!--              <el-table-column-->
            <!--                v-for="column in tableColumns"-->
            <!--                :key="column.label"-->
            <!--                :min-width="column.minWidth"-->
            <!--                :prop="column.prop"-->
            <!--                :label="column.label"-->
            <!--              >-->
            <!--              </el-table-column>-->
            <!--              <el-table-column :min-width="135" align="right" label="Actions">-->
            <!--                <div slot-scope="props">-->
            <!--                  <nuxt-link :to="{ name: 'partner-id', params: { id: props.id }}"-->
            <!--                             class="cursor-pointer ti-pencil-alt text-dark"></nuxt-link>-->
            <!--                  &nbsp;&nbsp;-->
            <!--                  <a class="cursor-pointer ti-trash text-dark"-->
            <!--                     @click="onDelete(props.id, props.email, props.username)"></a>-->
            <!--                </div>-->
            <!--              </el-table-column>-->
            <!--            </el-table>-->
            <table id="myTable" class="table table-striped">
              <thead>
              <tr>
                <th class="text-center">Seq</th>
                <th class="text-center">Code</th>
                <th class="text-center">Name</th>
                <th class="text-center">Country</th>
                <th class="text-center">Contact</th>
                <th class="text-center">Tel</th>
                <th class="text-center">Join Date</th>
                <th class="text-center">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="partner in queriedData" v-if="searchQuery === ''">
                <td class="text-center">{{ partner.id }}</td>
                <td class="text-center">{{ partner.code }}</td>
                <td>{{ partner.partnerName }}</td>
                <td>{{ partner.country }}</td>
                <td>{{ partner.contactName }}</td>
                <td class="text-center">{{ partner.tel }}</td>
                <td class="text-center">{{ partner.joinDate | formatDate }}</td>
                <td class="text-center">
                  &nbsp;&nbsp;
                  <nuxt-link :to="{ name: 'partner-id', params: { id: partner.id }}"
                             class="cursor-pointer ti-pencil-alt text-dark"></nuxt-link>
                  &nbsp;&nbsp;
                  <a class="cursor-pointer ti-trash text-dark"
                     @click="onDelete(partner.id, partner.email, partner.username)"></a>
                </td>
              </tr>
              <tr v-for="partner in queriedData" v-if="searchQuery !== ''">
                <td class="text-center">{{ partner.item.id }}</td>
                <td class="text-center">{{ partner.item.code }}</td>
                <td>{{ partner.item.partnerName }}</td>
                <td>{{ partner.item.country }}</td>
                <td>{{ partner.item.contactName }}</td>
                <td class="text-center">{{ partner.item.tel }}</td>
                <td class="text-center">{{ partner.item.joinDate | formatDate}}</td>
                <td class="text-center">
                  &nbsp;&nbsp;
                  <nuxt-link :to="{ name: 'partner-id', params: { id: partner.item.id }}"
                             class="cursor-pointer ti-pencil-alt text-dark"></nuxt-link>
                  &nbsp;&nbsp;
                  <a class="cursor-pointer ti-trash text-dark"
                     @click="onDelete(partner.item.id, partner.item.email, partner.item.username)"></a>
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
import {authHeader} from "@/helper/auth-header";
import Fuse from 'fuse.js';
import BasePagination from "@/components/BasePagination";
import moment from "moment";

export default {
  components: {
    BasePagination
  },
  data() {
    return {
      tableData: [],
      searchedData: [],
      searchQuery: '',
      fuseSearch: null,
      searchProps: ["code", "partnerName", 'contactName', 'tel'],
      pagination: {
        perPage: 20,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
    }
  },
  created() {
    this.$nuxt.$store.dispatch('get_partners')
  },
  computed: {
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0 || this.searchQuery.length > 0) {
        result = this.searchedData;
      }
      console.log("RES", result)
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
    }
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
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: 'DELETE',
            url: this.$nuxt.$store.state.apipath + 'partners/' + id,
            headers: authHeader()
          }).then(response => {
            this.$nuxt.$store.commit('SET_ALERT', {
              text: 'Delete Partner Successful',
              type: 'correct'
            })
            this.$nuxt.$store.dispatch('get_partners')
          }).catch(err => {
            this.$nuxt.$store.commit('SET_ALERT', {
              text: `Delete Partner Failed (${err.response.data.message})`,
              type: 'error'
            })
          })
        }
      })
    }
  },
  watch: {
    partners(val) {
      this.tableData = val
    },
    searchQuery(value) {
      let result = this.tableData;
      if (value !== '') {
        this.fuseSearch = new Fuse(this.tableData, {
          keys: this.searchProps,
          threshold: 0.0
        });
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    }
  },
  mounted() {
    // Fuse search initialization.
    console.log("MTDATA", this.tableData)

  }
}
</script>
