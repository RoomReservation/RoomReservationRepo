(function () {
  'use strict';

  angular
    .module('ui')
    .factory('usersFactory', usersFactory);

  /** @ngInject */
  function usersFactory($http) {

    var baseUrl = 'http://localhost:8080';

    return {
      getAllUsers: getAllUsers,
      deleteUser: deleteUser,
      addUser: addUser
    };

    function deleteUser(id) {
      return $http({
        method: 'DELETE',
        url: baseUrl + '/users/:id',
        params: {id: id}
      })
    }

    function getAllUsers() {
      return $http({
        method: 'GET',
        url: baseUrl + '/users'
      });
    }

    function addUser(user){
      return $http({
        method: 'POST',
        url: baseUrl + '/users',
        data: user
      });
    }




  }

})();




