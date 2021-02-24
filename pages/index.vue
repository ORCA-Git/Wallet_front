<template>
  <div class="container-fluid">
      <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 class="page-title">Dashboard</h4>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-4 col-sm-12 col-xs-12">
              <div class="white-box analytics-info">
                  <h3 class="box-title">Total Partner</h3>
                  <ul class="list-inline two-part">
                      <li>
                          <div id="sparklinedash"></div>
                      </li>
                      <li class="text-right">
                        <i class="ti-arrow-up text-success"></i>
                        <span class="counter text-success">{{ partnerCount }}</span>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-xs-12">
              <div class="white-box analytics-info">
                  <h3 class="box-title">Total Wallet</h3>
                  <ul class="list-inline two-part">
                      <li>
                          <div id="sparklinedash2"></div>
                      </li>
                      <li class="text-right">
                        <i class="ti-arrow-up text-purple"></i>
                        <span class="counter text-purple">{{ wallets }}</span>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-xs-12">
              <div class="white-box analytics-info">
                  <h3 class="box-title">Total Transfer</h3>
                  <ul class="list-inline two-part">
                      <li>
                          <div id="sparklinedash3"></div>
                      </li>
                      <li class="text-right"><i class="ti-arrow-up text-info"></i>
                        <span class="counter text-info">{{ transfersCount }}</span>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-xs-12" v-show="false">
              <div class="white-box analytics-info">
                  <h3 class="box-title">Total Cancel</h3>
                  <ul class="list-inline two-part">
                      <li>
                          <div id="sparklinedash4"></div>
                      </li>
                      <li class="text-right"><i class="ti-arrow-down text-danger"></i> <span class="text-danger">12,321.00</span></li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12 col-lg-8 col-sm-12 col-xs-12" v-show="false">
              <div class="white-box">
                  <h3 class="box-title">Transaction Yearly Transfer</h3>
                  <ul class="list-inline text-right">
                      <li>
                          <h5><i class="fa fa-circle m-r-5 text-info"></i>Approved</h5>
                      </li>
                      <li>
                          <h5><i class="fa fa-circle m-r-5 text-inverse"></i>Cancel</h5>
                      </li>
                  </ul>
                  <div id="ct-visits" style="height: 405px;"></div>
              </div>
          </div>
          <div class="col-md-6 col-md-6 col-sm-6">
            <div class="sk-chat-widgets">
                <div class="panel panel-blue">
                   <div class="panel-heading">
                     TRANSACTION YEARLY TRANSFER
                   </div>
                   <div class="panel-body">
                     <chart-line :data="barChartData" :options="barChartOptions" :height="235" />
                   </div>
                </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="panel">
                  <div class="sk-chat-widgets">
                      <div class="panel panel-blue">
                          <div class="panel-heading">
                              Recent Partner
                          </div>
                          <div class="panel-body">
                              <ul class="chatonline">
                                  <li v-for="partner in partners">
                                      <a>
                                        <img src="~/assets/images/users/varun.jpg" class="img-circle">
                                          <span>
                                            {{ partner.partnerName }}
                                            <small class="text-success">{{ partner.country }}</small>
                                        </span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="white-box">
                  <div class="col-md-3 col-sm-4 col-xs-6 pull-right" v-show="false">
                      <select class="form-control pull-right row b-none">
                          <option>March 2020</option>
                          <option>April 2020</option>
                          <option>May 2020</option>
                          <option>June 2020</option>
                          <option>July 2020</option>
                      </select>
                  </div>
                  <h3 class="box-title">Recent Transfer</h3>
                  <div class="row sales-report">
                      <div class="col-md-6 col-sm-6 col-xs-6">
                          <h2>Transfer Report</h2>
                          <p>Summary  </p>
                      </div>
                      <div class="col-md-6 col-sm-6 col-xs-6 ">
                          <h1 class="text-right text-info m-t-20">{{ transfersCount }}</h1>
                      </div>
                  </div>
                  <div class="table-responsive">
                      <table class="table">
                          <thead>
                              <tr>
                                  <th>#</th>
                                  <th>Partner</th>
                                  <th>STATUS</th>
                                  <th>DATE</th>
                                  <th>Amount</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="(transfer,index) in transfers">
                                  <td>{{ index + 1 }}</td>
                                  <td class="txt-oflo">{{ transfer.from_partner }}</td>
                                  <td>
                                    <span v-if="transfer.status==='APPROVED'"  class="label label-success">Approved</span>
                                    <span v-if="transfer.status==='CANCEL'"  class="label label-danger">Cancel</span>
                                  </td>
                                  <td class="txt-oflo">{{ transfer.updatedAt }}</td>
                                  <td><span class="text-success">{{ transfer.fee }}.00</span></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <div class="col-md-12 col-lg-6 col-sm-12" v-show="false">
              <div class="panel">
                  <div class="panel-heading">MANAGE USERS</div>
                  <div class="table-responsive">
                      <table class="table table-hover manage-u-table">
                          <thead>
                              <tr>
                                  <th style="width: 70px;" class="text-center">#</th>
                                  <th>NAME</th>
                                  <th>ROLE</th>
                                  <th>EMAIL</th>
                                  <th>MANAGE</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td class="text-center">1</td>
                                  <td>
                                      <span class="font-medium">Daniel Kristeen</span>
                                      <br /><span class="text-muted">Bangkok, Thailand</span>
                                  </td>
                                  <td>
                                      Administrator
                                      <br /><span class="text-muted">Past : Support</span>
                                  </td>
                                  <td>
                                      daniel@website.com
                                      <br /><span class="text-muted">999 - 444 - 555</span>
                                  </td>
                                  <td>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="text-center">1</td>
                                  <td>
                                      <span class="font-medium">Daniel Kristeen</span>
                                      <br /><span class="text-muted">Bangkok, Thailand</span>
                                  </td>
                                  <td>
                                      Administrator
                                      <br /><span class="text-muted">Past : Support</span>
                                  </td>
                                  <td>
                                      daniel@website.com
                                      <br /><span class="text-muted">999 - 444 - 555</span>
                                  </td>
                                  <td>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="text-center">1</td>
                                  <td>
                                      <span class="font-medium">Daniel Kristeen</span>
                                      <br /><span class="text-muted">Bangkok, Thailand</span>
                                  </td>
                                  <td>
                                      Administrator
                                      <br /><span class="text-muted">Past : Support</span>
                                  </td>
                                  <td>
                                      daniel@website.com
                                      <br /><span class="text-muted">999 - 444 - 555</span>
                                  </td>
                                  <td>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="text-center">1</td>
                                  <td>
                                      <span class="font-medium">Daniel Kristeen</span>
                                      <br /><span class="text-muted">Bangkok, Thailand</span>
                                  </td>
                                  <td>
                                      Administrator
                                      <br /><span class="text-muted">Past : Support</span>
                                  </td>
                                  <td>
                                      daniel@website.com
                                      <br /><span class="text-muted">999 - 444 - 555</span>
                                  </td>
                                  <td>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="text-center">1</td>
                                  <td>
                                      <span class="font-medium">Daniel Kristeen</span>
                                      <br /><span class="text-muted">Bangkok, Thailand</span>
                                  </td>
                                  <td>
                                      Administrator
                                      <br /><span class="text-muted">Past : Support</span>
                                  </td>
                                  <td>
                                      daniel@website.com
                                      <br /><span class="text-muted">999 - 444 - 555</span>
                                  </td>
                                  <td>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="text-center">1</td>
                                  <td>
                                      <span class="font-medium">Daniel Kristeen</span>
                                      <br /><span class="text-muted">Bangkok, Thailand</span>
                                  </td>
                                  <td>
                                      Administrator
                                      <br /><span class="text-muted">Past : Support</span>
                                  </td>
                                  <td>
                                      daniel@website.com
                                      <br /><span class="text-muted">999 - 444 - 555</span>
                                  </td>
                                  <td>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                      <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
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
  export default {
    data () {
      return {
        barChartData: {
          labels: [
            '2019-06',
            '2019-07',
            '2019-08',
            '2019-09',
            '2019-10',
            '2019-11',
            '2019-12',
            '2020-01',
            '2020-02',
            '2020-03',
            '2020-04',
            '2020-05'
          ],
          datasets: [
            {
              label: 'Transaction',
              data: [10, 15, 20, 30, 40, 50, 60, 70, 34, 45, 11, 78, 45],
            }
          ]
        },barChartOptions: {
          responsive: true,
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Transaction Analytics Data',
            fontSize: 46,
            fontColor: '#6b7280'
          },
          tooltips: {
            backgroundColor: '#17BF62'
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }
      }
    },
    mounted() {
      let payload = {
        page :1,
        limit:5
      }
      this.$nuxt.$store.dispatch('get_partners_page',payload)
      this.$nuxt.$store.dispatch('get_transfers_page',payload)
    },
    computed: {
      partners () {
        return this.$nuxt.$store.state.partners
      },
      partnerCount () {
        return this.$nuxt.$store.state.partners.length
      },
      transfersCount () {
        let transfers = this.$nuxt.$store.state.transfers
        let amount = 0;
        for (var i = 0; i < transfers.length; i++) {
          amount = amount + transfers[i].amount
        }
        return this.toCurrencyString(amount)
      },
      transfers () {
        return this.$nuxt.$store.state.transfers
      },
      wallets () {
        let wallets = this.$nuxt.$store.state.wallets
        let fee = 0;
        if (wallets) {
          for (let i = 0; i < wallets.length; i++) {
            fee = fee + wallets[i].amount
          }
        }
        return this.toCurrencyString(fee)
      }
    },
    methods: {
      toCurrencyString(number) {
        if (number) {
          return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
      },
      getPartnerName (id) {
        let partners = this.$nuxt.$store.state.partners
        let partner = "";
        for (var i = 0; i < partners.length; i++) {
          if (partners[i].id == id) {
            partner = partners[i].partnerName
          }
        }
        return partner
      }
    },
    components: {
    }
  }
</script>
