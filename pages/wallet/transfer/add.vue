<template>
  <div class="container-fluid">
      <div class="row bg-title">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h3 class="box-title m-b-10">Transfer Info ( 202001010001 ) <span class="label label-success">Approved</span> </h3>
          </div>
          <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
              <NuxtLink to="/wallet/transfer" 
              class="btn  btn-default pull-right m-l-20 waves-effect waves-light m-t-10">Back</NuxtLink>
          </div>
          <!-- /.col-lg-12 -->
      </div>
      <!-- /row -->
      <div class="row">
          <div class="col-sm-12">
              <div class="white-box">

                  <form class="form-horizontal form-material">
                      <h3 class="box-title">Transaction Info</h3>
                      <p class="text-muted m-b-30 font-13"> transaction info , wallet info , transfer , picture bill.</p>
                      <div id="exampleBasic2" class="wizard">
                          <ul class="wizard-steps" role="tablist">
                              <li class="active" role="tab">
                                  <h4><span><i class="ti-wallet"></i></span>Wallet Info</h4>
                              </li>
                              <li role="tab">
                                  <h4><span><i class="ti-user"></i></span>Customer Info</h4>
                              </li>
                              <li role="tab">
                                  <h4><span><i class="ti-check"></i></span>Confirmation</h4>
                              </li>
                          </ul>
                          <div class="wizard-content">
                              <div class="wizard-pane active" role="tabpanel">
                                  <div class="row" style="padding: 0px 20px;">
                                      <h3 class="box-title">Partner , Wallet  Info</h3>
                                      <hr>
                                      <div class="col-md-6">
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Partner Code</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Bank Name</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>

                                          <div class="form-group">
                                              <label class="control-label col-md-4">Account No</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>

                                          <div class="form-group">
                                              <label class="control-label col-md-4">Address</label>
                                              <div class="col-md-8">
                                                  <textarea rows="4" class="form-control" type="text" name=""></textarea>
                                              </div>
                                          </div>

                                          <div class="form-group">
                                              <label class="control-label col-md-4">Country</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>

                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Partner Name</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">BSB Number</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Tel</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Sub District</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">State</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Post Code</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-md-12">
                                          <h3 class="box-title">Transfer Info</h3>
                                          <hr>
                                          </div>
                                          <div class="col-md-6">
                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Transaction Order No</label>
                                                  <div class="col-md-8">
                                                      <input class="form-control" type="text" name="" disabled>
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Transfer Date</label>
                                                  <div class="col-md-8">
                                                      <input class="form-control" type="text" name="" disabled>
                                                  </div>
                                              </div>

                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Transaction Fee</label>
                                                  <div class="col-md-8">
                                                      <input class="form-control" type="text" name="" disabled>
                                                  </div>
                                              </div>

                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Transfer to Customer</label>
                                                  <div class="col-md-8">
                                                      <input class="form-control" type="text" name="" disabled>
                                                  </div>
                                              </div>

                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Reason</label>
                                                  <div class="col-md-8">
                                                      <textarea rows="4" class="form-control" type="text" name=""></textarea>
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                  <label class="control-label col-md-4">SMS</label>
                                                  <div class="col-md-8">
                                                      <textarea rows="4" class="form-control" type="text" name=""></textarea>
                                                  </div>
                                              </div>

                                          </div>
                                          <div class="col-md-6">
                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Transaction Invoice</label>
                                                  <div class="col-md-8">
                                                      <input class="form-control" type="text" name="" disabled>
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Transfer Rate</label>
                                                  <div class="col-md-8">
                                                      <input class="form-control" type="text" name="" disabled>
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Receipt Date</label>
                                                  <div class="col-md-8">
                                                      <input class="form-control" type="text" name="" disabled>
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Transfer From Partner</label>
                                                  <div class="col-md-8">
                                                      <input class="form-control" type="text" name="" disabled>
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Submitted</label>
                                                  <div class="col-md-8">
                                                      <textarea rows="4" class="form-control" type="text" name=""></textarea>
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                  <label class="control-label col-md-4">Coupon</label>
                                                  <div class="col-md-8">
                                                      <input class="form-control" type="text" name="" disabled>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              <div class="wizard-pane" role="tabpanel">
                                  <div class="row" style="padding: 0px 20px;">
                                      <h3 class="box-title">Customer , Account Info</h3>
                                      <hr>
                                      <div class="col-md-6">
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Customer ID</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Tel.</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Sub District</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Country</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Post Code</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>

                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Customer Name</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Address</label>
                                              <div class="col-md-8">
                                                  <textarea rows="4" class="form-control" type="text" name=""></textarea>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">State</label>
                                              <div class="col-md-8">
                                                  <input class="form-control" type="text" name="" disabled>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label col-md-4">Remark</label>
                                              <div class="col-md-8">
                                                  <textarea rows="4" class="form-control" type="text" name="" disabled></textarea>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="wizard-pane" role="tabpanel">
                                  <h3 class="box-title">Upload Slip Transfer To Customer</h3>
                                  <input type="file" id="input-file-now" class="dropify" />
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
              <br>
              <hr>
              <br>
              <div class="col-12" align="center">
                  <a href="transfer.html" class="btn btn-default btn-lg"><span class="btn-label"><i class="t ti-arrow-left"></i></span>&nbsp;&nbsp;Back&nbsp;&nbsp;</a>
              </div>
              <br>
          </div>
      </div>
  </div>
</template>
