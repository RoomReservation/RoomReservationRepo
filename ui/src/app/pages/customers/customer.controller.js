(function () {
  'use strict';

  angular
    .module('ui')
    .controller('customerController', customerController);

  /** @ngInject */
  function customerController(customerFactory, $uibModal, authService) {

    var vm = this;
    vm.openAddCustomerModal=openAddCustomerModal;
    vm.deleteCustomer = deleteCustomer;
    vm.logout = logout;
    activate();

    function activate() {
      getAllCustomers();
    }

    function setActiveCustomer() {
      vm.selectedCustomer = vm.customers[0];
    }

    function getAllCustomers() {
      customerFactory.getAllCustomers().then(function success(customer) {
        vm.customers = customer.data;
        setActiveCustomer();
      }, function error(response) {
      });
    }

    function deleteCustomer(id) {
      customerFactory.deleteCustomer(id).then(function success(response) {
        activate();
      }, function error(response) {
      });
    }

    function openAddCustomerModal() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/customers/addCustomer/addCustomer.html',
        controller: 'addCustomerController',
        controllerAs: 'add',
        size: 'md',
        resolve: {
          activate: function () {
            return activate;
          }
        }
      })
    }

    function logout() {
      authService.logout().then(function(){
        console.log('wylogowano');
        authService.redirectToLogin();
      }, function(){

      })
    }


  }
})();
