(function () {
  'use strict';

  angular
    .module('ui')
    .controller('addRoomsController', addRoomsController);

  /** @ngInject */
  function addRoomsController($uibModalInstance, roomsFactory, getAllRooms) {

    var vmModal = this;
    vmModal.close = close;
    vmModal.addRoom = addRoom;


    function addRoom(form){
      if(form.$valid) {
        roomsFactory.addRoom(vmModal.room).then(function(){

          getAllRooms();
        });
        $uibModalInstance.close();
      }
    }

    function close() {
      $uibModalInstance.dismiss();
    }


  }
})();
