(function () {
  'use strict';

  angular
    .module('ui')
    .factory('homeFactory', homeFactory);

  /** @ngInject */
  function homeFactory($http) {

    var baseUrl = 'http://localhost:8080';

    return {
      getAllRooms: getAllRooms,
      deleteRoom: deleteRoom
    };

    function getAllRooms() {
      //$http({
      //  method: 'GET',
      //  url: baseUrl + '/rooms'
      //}).then(function success(rooms) {
      //  console.log("getRooms success");
      //  return rooms;
      //}, function error(response) {
      //  console.log("getRooms error");
      //  return null;
      //});
      return $http.get(baseUrl + '/rooms');
    }

    function deleteRoom(id) {
      $http({
        method: 'DELETE',
        url: baseUrl + '/rooms/:id',
        params: {id: id}
      }).then(function success(rooms) {
        console.log("getRooms success");
      }, function error(response) {
        console.log("getRooms error");
        return null;
      });
    }


  }

})();




