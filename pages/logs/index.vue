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
              <input class="form-control " type="text" id="search_branch"
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
              <tr v-for="log in activities">
                <td class="text-center">{{ log.date }}</td>
                <td class="text-center">{{ log.action }}</td>
                <td>{{ log.description }}</td>
                <td>{{ log.user }}</td>
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
  data() {
    return {}
  },
  components: {},
  computed: {
    activities() {
      return this.$nuxt.$store.state.activities
    }
  },
  async mounted() {
  }
}
</script>
