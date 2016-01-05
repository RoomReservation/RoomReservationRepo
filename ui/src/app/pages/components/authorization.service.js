(function () {
  'use strict';

  angular
    .module('ui')
    .service('authService', authService);

  /** @ngInject */
  function authService(store, $state, $http) {

    var baseUrl = 'http://localhost:8080/resources';

    return {
      isUserAllowed: isUserAllowed,
      login: login,
      logout: logout,
      saveUserData: saveUserData,
      redirectToLogin: redirectToLogin
    };


    function isUserAllowed(state) {
      // State is not restricted or user is authenticated
      if (!state.data.loginRequired || isAuthenticated()) {
        return true;
      }
      // State is restricted and user is not authenticated
      return false;
    }


    function isAuthenticated() {
      var user = getCurrentUser();
      return angular.isObject(user) &&
        user.hasOwnProperty('access_token') &&
        user.hasOwnProperty('refresh_token') &&
        user.hasOwnProperty('username');
    }

    function getCurrentUser() {
      return store.get('currentUser');
    }
    function saveUserData(response){
      console.log(response);

    }

    function login(form) {
      return $http({
        method: 'POST',
        url: baseUrl + '/login',
        data: form
      });
    }
    function logout() {
      return $http({
        method: 'POST',
        url: baseUrl + '/logout'
      });
    }

    function redirectToLogin(){
      $state.go('login');
    }


  }

})();


