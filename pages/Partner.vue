<template>
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row bg-title">
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <h3 class="box-title m-b-10">Partner List</h3>
                </div>
                <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                    <a href="partneradd.html" class="btn  btn-success pull-right m-l-20 waves-effect waves-light m-t-10">+ Add Partner</a>

                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /row -->
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
                partners: [],
                token: localStorage.getItem('token'),
            }
        },
        components: {
        },
        computed: {
            bearer () {
                return 'Bearer '.concat(this.token)
            }
        },
        async mounted () {

            let urlapi = 'http://13.228.120.202:80/api/v1/partners'
            axios.get(urlapi, { headers: { Authorization: this.bearer } }).then(response => {
                console.log(response.data.data)
                this.partners = response.data.data.result
            }).catch((error) => {
              console.log("NITT")
                console.log(error);
            })
        }
    }
</script>
