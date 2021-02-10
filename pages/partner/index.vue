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
                          <input class="form-control " type="text" id="search_branch" placeholder="Input text for searching ( Code , Name , Contact , Tel .)">
                      </div>
                      </form>
                      <div class="table-responsive">
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
                                  <tr v-for="partner in partners">
                                      <td class="text-center">{{ partner.id }}</td>
                                      <td class="text-center">{{ partner.code }}</td>
                                      <td>{{partner.partnerName}}</td>
                                      <td>{{ partner.country }}</td>
                                      <td>{{ partner.contactName }}</td>
                                      <td class="text-center">{{ partner.tel }}</td>
                                      <td class="text-center">{{ partner.updatedAt }}</td>
                                      <td class="text-center">
                                          &nbsp;&nbsp;
                                          <nuxt-link :to="{ name: 'partner-id', params: { id: partner.id }}" class="cursor-pointer ti-pencil-alt text-dark"></nuxt-link>
                                          &nbsp;&nbsp;
                                          <a class="cursor-pointer ti-trash text-dark" @click="onDelete(partner.id, partner.email, partner.username)"></a>
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
                token: this.$nuxt.$store.state.token
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
            }
        },
        methods: {
          async onDelete (id, email, username) {
            await axios({
              method: 'DELETE',
              url: this.$nuxt.$store.state.apipath+'partners/'+id,
              headers: { Authorization: this.bearer }
            }).then(response => {
              this.$nuxt.$store.commit('SET_ALERT',{
                text: 'Delete Partner Successful',
                type: 'correct'
              })
              this.$nuxt.$store.dispatch('get_partners')
            }).catch(err => {
              this.$nuxt.$store.commit('SET_ALERT',{
                text: 'Add Partner Failed',
                type: 'error'
              })
            })
          }
        },
        async mounted () {
        }
    }
</script>
