(function () {
  'use strict';

  angular
    .module('ui')
    .controller('addCustomerController', addCustomerController);

  /** @ngInject */
  function addCustomerController($uibModalInstance, customerFactory, activate) {

    var vmModal = this;
    vmModal.close = close;
    vmModal.addCustomer = addCustomer;

    function addCustomer(form){
      if(form.$valid) {
        customerFactory.addCustomer(vmModal.customer).then(function(){
          activate();
        });
        $uibModalInstance.close();
      }
    }

    function close() {
      $uibModalInstance.dismiss();
    }


  }
})();
