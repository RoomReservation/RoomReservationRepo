(function () {
  'use strict';

  angular
    .module('ui')
    .controller('addUsersController', addUsersController);

  /** @ngInject */
  function addUsersController($uibModalInstance, usersFactory, activate) {

    var vmModal = this;
    vmModal.close = close;
    vmModal.addUser = addUser;

    function addUser(form){
      if(form.$valid) {
        usersFactory.addUser(vmModal.user).then(function(){
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
