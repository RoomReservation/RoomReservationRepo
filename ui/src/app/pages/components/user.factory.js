(function () {
  'use strict';

  angular
    .module('ui')
    .service('userFactory', userFactory);

  /** @ngInject */
  function userFactory($http) {

    var baseUrl = 'http://localhost:8080/resources';

    return {
      current: current

    };


    function current() {
      return $http({
        method: 'GET',
        url: baseUrl + '/users/current'
      });
    }


  }

})();


