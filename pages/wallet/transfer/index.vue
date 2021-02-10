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
                            <div class="row" style="padding: 0px 15px;">
                                <h3 class="box-title m-b-10">Search</h3>
                                <div class="col-md-6 text-left">
                                    <div class="form-group">
                                        <label class="control-label col-md-2 col-sm-2"><h4 class="m-b-0 m-t-0"><b>Customer</b></h4></label>
                                        <div class="col-md-10">
                                            <input class="form-control" type="text" name="" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 text-left">
                                    <div class="form-group">
                                        <label class="control-label col-md-2 col-sm-2"><h4 class="m-b-0 m-t-0"><b>Partner</b></h4></label>
                                        <div class="col-md-10 col-sm-10">
                                            <select class="form-control">
                                                <option>-- Please choose partner --</option>
                                                <option v-for="partner in this.$nuxt.$store.state.partners">{{ partner.partnerName }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 text-left">
                                    <div class="form-group">
                                        <label class="control-label col-md-2 col-sm-2"><h4 class="m-b-0 m-t-0"><b>Status</b></h4></label>
                                        <div class="col-md-10 col-sm-10">
                                            <select class="form-control">
                                                <option>-- Please choose status --</option>
                                                <option>Approve</option>
                                                <option>Waiting</option>
                                                <option>Cancel</option>
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
                                        <th class="text-center">Transaction ID</th>
                                        <th class="text-center">Transaction Date</th>
                                        <th>Partner Name</th>
                                        <th>Customer Name</th>
                                        <th>Account No</th>
                                        <th class="text-right">Amount</th>
                                        <th class="text-center">Status</th>
                                        <th class="">Update By</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="transfer,index in transfers">
                                        <td class="text-center">{{ index+1 }}</td>
                                        <td class="text-center">{{ transfer.order_no }}</td>
                                        <td class="text-center">{{ transfer.transaction_date }}</td>
                                        <td>{{ getPartnerName(transfer.from_partner).partnerName }}</td>
                                        <td>Customer 1</td>
                                        <td>{{ transfer.transaction_date }}</td>
                                        <td class="text-right">{{ transfer.fee }}</td>
                                        <td class="text-center"><span class="label label-success">Approved</span></td>
                                        <td class="">Administrator</td>
                                        <td class="text-center">
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
                return 'Bearer '.concat(this.token)
            },
            partners () {
              return this.$nuxt.$store.state.partners
            },
            transfers () {
              return this.$nuxt.$store.state.transfers
            },
        },
        methods: {
            getPartnerName (id) {
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
    }
</script>
