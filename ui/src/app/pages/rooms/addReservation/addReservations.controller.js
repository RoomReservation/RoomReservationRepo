(function () {
  'use strict';

  angular
    .module('ui')
    .controller('addReservationsController', addRoomsController);

  /** @ngInject */
  function addRoomsController($uibModalInstance, roomsFactory, getReservations, roomId, customerFactory) {

    var vmModal = this;
    vmModal.close = close;
    vmModal.addReservation = addReservation;
    vmModal.findUserByString = findUserByString;


    function addReservation(form){
      if(form.$valid) {
        vmModal.reservation.roomId = roomId;
        vmModal.reservation.userId = vmModal.selectedUser.id;
        roomsFactory.addReservation(vmModal.reservation).then(function(){

          getReservations(roomId);
        });
        $uibModalInstance.close();
      }
    }



    function findUserByString(string) {
      return customerFactory.findUserByString(string).then(function(response){
        return response.data;
      });

    };





    function close() {
      $uibModalInstance.dismiss();
    }


  }
})();
