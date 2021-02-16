<template>
  <div class="container-fluid">
    <div class="row bg-title">
      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h3 class="box-title m-b-10">Activity List</h3>
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
                <th class="text-center">Date</th>
                <th class="text-center">Action</th>
                <th class="text-center">Description</th>
                <th class="text-center">Owner</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="log in queriedData" v-if="searchQuery === ''">
                <td class="text-center">{{ log.date }}</td>
                <td class="text-center">{{ log.action }}</td>
                <td>{{ log.description }}</td>
                <td>{{ log.user }}</td>
              </tr>
              <tr v-for="log in queriedData" v-if="searchQuery !== ''">
                <td class="text-center">{{ log.item.date }}</td>
                <td class="text-center">{{ log.item.action }}</td>
                <td>{{ log.item.description }}</td>
                <td>{{ log.item.user }}</td>
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
import  {BasePagination}  from "@/components/BasePagination";
import Fuse from "fuse.js";

export default {
  components: {
    BasePagination
  },
  created() {
    this.$nuxt.$store.dispatch('get_activity_log')
  },
  data() {
    return {
      tableData: [],
      searchedData: [],
      searchQuery: '',
      fuseSearch: null,
      searchProps:["date","action",'description','user'],
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      }
    }
  },
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
    activities() {
      return this.$nuxt.$store.state.activities
    }
  },
  async mounted() {
  },
  watch: {
    activities(val) {
      console.log(val)
      this.tableData = val
    },
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
  }
}
</script>
