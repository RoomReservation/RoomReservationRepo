(function () {
  'use strict';

  angular
    .module('ui')
    .controller('addReservationController', addReservationController);

  /** @ngInject */
  function addReservationController($uibModalInstance, usersFactory, roomsFactory, activate, roomId) {

    var vmModal = this;
    vmModal.close = close;

    vmModal.reservation = {
      userId: null,
      roomId: roomId,
      dateFrom: null,
      dateTo: null
    }

    vmModal.findUserByString = findUserByString;
    vmModal.addReservation = addReservation

    /*calendar property*/
    vmModal.maxDate = new Date();

    var tempDate1 = new Date();
    tempDate1.setDate(tempDate1.getDate() + 2);
    vmModal.minDate = tempDate;

    vmModal.reservation.dateFrom = new Date();
    var tempDate = new Date();
    tempDate.setDate(tempDate.getDate() + 4);
    vmModal.reservation.dateTo = tempDate;


    vmModal.format = 'yyyy-MMMM-dd';

    vmModal.status = {
      openDateFrom: false,
      openDateTo: false
    };

    vmModal.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };


    function findUserByString(string) {
      usersFactory.getByString(string).then(function success(response) {
       return response.data.map(function(item){
         return item.name;
      }, function error(response) {
      });
    })};



    function addReservation(form){
      if(form.$valid) {
        roomsFactory.addReservations(vmModal.reservation).then(function(){
          activate();
        });
        $uibModalInstance.close();
      }
    }

    function close() {
      $uibModalInstance.dismiss();
    }


  }
})();
