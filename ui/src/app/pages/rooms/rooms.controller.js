(function () {
  'use strict';

  angular
    .module('ui')
    .controller('roomsController', roomsController);

  /** @ngInject */
  function roomsController(roomsFactory, $uibModal) {

    var vm = this;

    vm.openAddRoomModal = openAddRoomModal;
    vm.deleteRoom = deleteRoom;
    activate();

    /*calendar property*/
    vm.maxDate = new Date(2020, 5, 22);
    vm.minDate = new Date();
    vm.dateFrom = new Date();
    vm.dateTo = new Date();
    vm.format = 'dd-MMMM-yyyy';
    vm.status = {
        openDateFrom : false,
        openDateTo : false
    };
    vm.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };


    vm.openDateFrom = function($event) {
      vm.status.openDateFrom = true;
    };

    vm.openDateTo = function($event) {
      vm.status.openDateTo = true;
    };

    function activate() {
      getAllRooms();
    }

    function setActiveUser() {
      vm.selectedRoom = vm.rooms[0];
    }

    function getAllRooms() {
      roomsFactory.getAllRooms().then(function success(rooms) {
        vm.rooms = rooms.data;
        setActiveUser();
      }, function error(response) {
      });
    }

    function deleteRoom(id) {
      roomsFactory.deleteRoom(id).then(function success(response) {
        console.log("ok");
        activate();
      }, function error(response) {
        console.log("error");
      });
    }

    function openAddRoomModal() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/rooms/addRoom/addRooms.html',
        controller: 'addRoomsController',
        controllerAs: 'add',
        size: 'md',
        resolve: {
          activate: function () {
            return activate;
          }
        }
      })
    }



  }
})();
