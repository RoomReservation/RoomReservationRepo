(function () {
  'use strict';

  angular
    .module('ui')
    .controller('homeController', homeController);

  /** @ngInject */
  function homeController($timeout, $scope, $http, homeFactory) {

    var main = this;

    main.rooms = homeFactory.WgetAllRooms();
    main.selectedRoom = null;
   // main.deleteRoom = homeFactory.deleteRoom(main.roomSelected);


  }


})();
