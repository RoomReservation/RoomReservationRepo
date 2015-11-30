(function () {
  'use strict';

  angular
    .module('ui')
    .controller('roomsController', roomsController);

  /** @ngInject */
  function roomsController(roomsFactory, $uibModal, $rootScope, $scope) {

    var vm = this;


    vm.openAddRoomModal = openAddRoomModal;
    vm.openAddReservationModal = openAddReservationModal;
    vm.deleteRoom = deleteRoom;


    /*calendar property*/
    vm.maxDate = new Date(2020, 5, 22);
    vm.minDate = new Date();

    vm.dateFrom = new Date();
    var tempDate = new Date();
    tempDate.setDate(tempDate.getDate() + 4);
    vm.dateTo = tempDate;


    vm.format = 'yyyy-MMMM-dd';

    vm.status = {
      openDateFrom: false,
      openDateTo: false
    };

    vm.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    activate();

vm.onChangeRoom = function(){
  onChangeRoom();
}

    vm.openDateFrom = function ($event) {
      vm.status.openDateFrom = true;
    };

    vm.openDateTo = function ($event) {
      vm.status.openDateTo = true;
    };

    vm.onChangeChartDateFrom = function(){
      onChangeChartDateFrom();
    };

    vm.onChangeChartDateTo = function(){
      onChangeChartDateTo();
    };

    function activate() {
      getAllRooms();
      drawChart();
    }

    function setActiveUser() {
      vm.selectedRoom = vm.rooms[0];
    }

    function getAllRooms() {
      roomsFactory.getAllRooms().then(function success(rooms) {
        vm.rooms = rooms.data;
        setActiveUser();
        getReservations(vm.selectedRoom.id);
      }, function error(response) {
      });
    }

    function getReservations(roomId){
      roomsFactory.getReservations(roomId).then(function success(response){
        //vm.reservationss = response.data;
        vm.reservations = [];
        angular.forEach(response.data, function(data){

          var newDateMoment = moment(data.validFrom).format("MM/DD/YYYY");
          var validFrom = new Date(data.validFrom);


          var validTo = new Date(data.validTo);

          vm.gruopId = 1;
          while(validFrom <= validTo) {
            vm.reservations.push({
              x: angular.copy(validFrom),
              y: 10,
              group: 2
            })

            validFrom.setDate(validFrom.getDate() + 1);
            //validFrom = moment(validFrom).add(1, 'years');
          }

          vm.gruopId++;
        });
        $rootScope.$broadcast('updateChart');
      })

    }

    $scope.$on('updateChart', function(event, args) {
     vm.dataset.clear();
     vm.dataset.update(vm.reservations);
    });

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

    function openAddReservationModal() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/rooms/addReservation/addReservation.html',
        controller: 'addReservationController',
        controllerAs: 'add',
        size: 'md',
        resolve: {
          activate: function () {
            return activate;
          },
          roomId: vm.selectedRoom
        }
      })
    }


    function drawChart() {
      var container = document.getElementById('visualization');

      //vm.items = [];

      vm.dataset = new vis.DataSet();
      vm.groups = new vis.DataSet();
      vm.groups.add({
        id: 1,
        content: 'group 1',
        options: {
          drawPoints: false, // or style: 'circle'/'square'
          shaded: {
            orientation: 'bottom' // top, bottom
          }
        }
      });
      vm.groups.add({
        id: 2,
        content: 'group 2',
        options: {
          drawPoints: false, // or style: 'circle'/'square'
          shaded: {
            orientation: 'bottom' // top, bottom
          }
        }
      });

      var options = {
        style: 'bar',
        barChart: {width: 50, align: 'center', sideBySide: true},
        zoomMax: 1880000000,
        zoomMin: 1880000000,
        start: vm.dateFrom,
        end: vm.dateTo,

        //zoomable: false
      };
      vm.graph2d = new vis.Graph2d(container, vm.dataset, vm.groups,  options);
      //var temp = new Date();
      //temp.setDate(temp.getDate() - 50);
      //var temp2 =  new Date();
      //temp2.setDate(temp2.getDate() - 40);

      //vm.dateTo = temp;
      //graph2d.setWindow(temp, temp2);
    }


    function onChangeRoom() {
      getReservations(vm.selectedRoom.id);
    }

    function onChangeChartDateFrom(){
      var validFrom = moment(vm.dateFrom).format("MM/DD/YYYY");
      vm.dateTo = moment(validFrom).add(11, 'days');
      vm.graph2d.setWindow(validFrom, vm.dateTo);
    }

    function onChangeChartDateTo(){
      var validTo = moment(vm.dateTo).format("MM/DD/YYYY");
      vm.dateFrom = moment(vm.dateFrom).add(11, 'days');
      vm.graph2d.setWindow(validTo, vm.dateTo);
    }


  }
})();
