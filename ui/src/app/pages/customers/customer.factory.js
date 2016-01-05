(function () {
  'use strict';

  angular
    .module('ui')
    .factory('customerFactory', customerFactory);

  /** @ngInject */
  function customerFactory($http) {

    var baseUrl = 'http://localhost:8080/resources';

    return {
      getAllCustomers: getAllCustomers,
      deleteCustomer: deleteCustomer,
      addCustomer: addCustomer,
      findUserByString: findUserByString
    };

    function deleteCustomer(id) {
      return $http({
        method: 'DELETE',
        url: baseUrl + '/customers/:id',
        params: {id: id}
      });
    }
    function findUserByString(string) {
      return $http({
        method: 'GET',
        url: baseUrl + '/customers/:string',
        params: {string: string}
      });
    }

    function getAllCustomers() {
      return $http({
        method: 'GET',
        url: baseUrl + '/customers'
      });
    }

    function addCustomer(user){
      return $http({
        method: 'POST',
        url: baseUrl + '/customers',
        data: user
      });
    }




  }

})();




