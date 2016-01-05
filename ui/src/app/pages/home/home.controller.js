(function () {
  'use strict';

  angular
    .module('ui')
    .controller('homeController', homeController);

  /** @ngInject */
  function homeController(authService, $rootScope) {

    return {
      logout: logout
    }


    function logout() {
      authService.logout().then(function(){
        console.log('wylogowano');
        authService.redirectToLogin();
      }, function(){

      })
    }
  }
})();
