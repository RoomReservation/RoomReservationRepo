(function() {
  'use strict';

  angular
    .module('ui')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/home/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })
      .state('rooms', {
        url: '/rooms',
        templateUrl: 'app/pages/rooms/rooms.html',
        controller: 'roomsController',
        controllerAs: 'rooms'
      }).state('users', {
        url: '/users',
        templateUrl: 'app/pages/users/users.html',
        controller: 'usersController',
        controllerAs: 'users'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
