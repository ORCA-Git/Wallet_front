<template>
  <div class="container-fluid">
    <div class="row bg-title">
      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h3 class="box-title m-b-10">User List</h3>
      </div>
      <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
        <NuxtLink to="/users/add"
                  class="btn  btn-success pull-right m-l-20 waves-effect waves-light m-t-10">
          + Add User
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
            <table id="myTable" class="table table-striped">
              <thead>
              <tr>
                <th class="text-center">Seq</th>
                <th class="text-center">Code</th>
                <th class="text-center">Name</th>
                <th class="text-center">Role</th>
                <th class="text-center">Tel</th>
                <th class="text-center">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="user in queriedData" v-if="searchQuery === ''">
                <td class="text-center">{{ user.id }}</td>
                <td class="text-center">{{ user.employeeCode }}</td>
                <td class="text-center">{{ user.employeeName }}</td>
                <td class="text-center">{{ user.Role }}</td>
                <td class="text-center">{{ user.tel }}</td>
                <td class="text-center">
                  &nbsp;&nbsp;
                  <nuxt-link :to="{ name: 'users-id', params: { id: user.id }}"
                             class="cursor-pointer ti-pencil-alt text-dark"></nuxt-link>
                  &nbsp;&nbsp;
                  <a class="cursor-pointer ti-trash text-dark"
                     @click="onDelete(user.id)"></a>
                </td>
              </tr>
              <tr v-for="user in queriedData" v-if="searchQuery !== ''">
                <td class="text-center">{{ user.item.id }}</td>
                <td class="text-center">{{ user.item.employeeCode }}</td>
                <td class="text-center">{{ user.item.employeeName }}</td>
                <td class="text-center">{{ user.item.Role }}</td>
                <td class="text-center">{{ user.item.tel }}</td>
                <td class="text-center">
                  &nbsp;&nbsp;
                  <nuxt-link :to="{ name: 'users-id', params: { id: user.item.id }}"
                             class="cursor-pointer ti-pencil-alt text-dark"></nuxt-link>
                  &nbsp;&nbsp;
                  <a class="cursor-pointer ti-trash text-dark"
                     @click="onDelete(user.item.id)"></a>
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
import {BasePagination} from "@/components/BasePagination";

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
      searchProps: ["employeeCode", "employeeName", 'tel'],
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
    }
  },
  created() {
    this.$nuxt.$store.dispatch('get_users')
  },
  computed: {
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0 || this.searchQuery.length > 0) {
        result = this.searchedData;
      }
      console.log("RESUSER", result)
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
    users() {
      return this.$nuxt.$store.state.users
    }
  },
  methods: {
    async onDelete(id) {
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
            url: this.$nuxt.$store.state.apipath + 'users/' + id,
            headers: authHeader()
          }).then(response => {
            this.$nuxt.$store.commit('SET_ALERT', {
              text: 'Delete User Successful',
              type: 'correct'
            })
            this.$nuxt.$store.dispatch('get_users')
          }).catch(err => {
            this.$nuxt.$store.commit('SET_ALERT', {
              text: `Delete User Failed (${err.response.data.message})`,
              type: 'error'
            })
          })
        }
      })
    }
  },
  watch: {
    users(val) {
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
    //console.log("MTDATA", this.$row.index)

  }
}
</script>
