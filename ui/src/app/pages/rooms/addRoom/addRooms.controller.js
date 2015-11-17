(function () {
  'use strict';

  angular
    .module('ui')
    .controller('addRoomsController', addRoomsController);

  /** @ngInject */
  function addRoomsController($uibModalInstance, roomsFactory, activate) {

    var vmModal = this;
    vmModal.close = close;
    vmModal.addRoom = addRoom;


    function addRoom(form){
      if(form.$valid) {
        roomsFactory.addRoom(vmModal.room);
        activate();
        $uibModalInstance.close();
      }
    }

    function close() {
      $uibModalInstance.dismiss();
    }


  }
})();
