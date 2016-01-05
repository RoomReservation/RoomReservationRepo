(function () {
  'use strict';

  angular
    .module('ui')
    .factory('roomsFactory', roomsFactory);

  /** @ngInject */
  function roomsFactory($http) {

    var baseUrl = 'http://localhost:8080/resources';

    return {
      getAllRooms: getAllRooms,
      deleteRoom: deleteRoom,
      addRoom: addRoom,
      getReservations: getReservations,
      addReservation: addReservation
    };

    function getAllRooms() {
      return $http({
        method: 'GET',
        url: baseUrl + '/rooms'
      });
    }

    function deleteRoom(id) {
      return $http({
        method: 'DELETE',
        url: baseUrl + '/rooms/'+id
      })
    }

    function addRoom(room) {
      return $http({
        method: 'POST',
        url: baseUrl + '/rooms/',
        data: room
      })
    }

    function getReservations(roomId) {
      return $http({
        method: 'GET',
        url: baseUrl + '/rooms/'+roomId+'/reservations',
      });
    }

    function addReservation(form){
      return $http({
        method: 'POST',
        url: baseUrl + '/rooms/reservations',
        data: form
      })
    }

  }


})();




