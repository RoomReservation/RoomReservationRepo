(function () {
  'use strict';

  angular
    .module('ui')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(authService, $rootScope, $scope, $state, userFactory, store) {


    var vm = this;
    vm.login = login;

    function login(form) {
      //if (form.$valid) {
          authService.login(getUser()).then(function (response) {
            authService.saveUserData(response)

            userFactory.current().then(function (response){

              store.set('currentUser', response.data);

            })

            vm.authorized = true;
            redirect()
        }, function (data) {
            vm.authorized = false;
          });
      //}
    }


    function getUser() {
      return {
        'login': vm.userLogin.login,
        'password': vm.userLogin.password
        //'rememberMe': $scope.rememberMe
      }
    }


    function redirect() {
      if (vm.authorized == true) {
        $state.go('rooms');
      }
    }



  }
})();

