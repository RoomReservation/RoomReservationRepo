(function () {
  'use strict';

  angular
    .module('ui')
    .controller('usersController', usersController);

  /** @ngInject */
  function usersController(usersFactory, $uibModal) {

    var vm = this;
    vm.openAddUserModal=openAddUserModal;
    vm.deleteUser = deleteUser;
    activate();

    function activate() {
      getAllUsers();
    }

    function setActiveUser() {
      vm.selectedUser = vm.users[0];
    }

    function getAllUsers() {
      usersFactory.getAllUsers().then(function success(users) {
        vm.users = users.data;
        setActiveUser();
      }, function error(response) {
      });
    }

    function deleteUser(id) {
      usersFactory.deleteUser(id).then(function success(response) {
        activate();
      }, function error(response) {
      });
    }

    function openAddUserModal() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/users/addUsers/addUsers.html',
        controller: 'addUsersController',
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
