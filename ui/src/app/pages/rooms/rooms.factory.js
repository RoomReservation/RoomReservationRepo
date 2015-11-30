(function () {
  'use strict';

  angular
    .module('ui')
    .factory('roomsFactory', roomsFactory);

  /** @ngInject */
  function roomsFactory($http) {

    var baseUrl = 'http://localhost:8080';

    return {
      getAllRooms: getAllRooms,
      deleteRoom: deleteRoom,
      addRoom: addRoom,
      getReservations: getReservations,
      addReservations: addReservations
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

    function addReservations(reservation) {
      return $http({
        method: 'POST',
        url: baseUrl + '/rooms/'+roomId+'/reservations',
        data: reservation
      });
    }



  }


})();




