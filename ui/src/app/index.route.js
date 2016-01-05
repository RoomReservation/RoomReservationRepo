(function() {
  'use strict';

  angular
    .module('ui')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      //.state('home', {
      //  url: '/',
      //  templateUrl: 'app/pages/home/home.html',
      //  controller: 'homeController',
      //  controllerAs: 'home',
      //  data: {
      //    loginRequired: true
      //  }
      //})
      .state('rooms', {
        url: '/rooms',
        templateUrl: 'app/pages/rooms/rooms.html',
        controller: 'roomsController',
        controllerAs: 'rooms',
        data: {
          loginRequired: true
        }
      }).state('customers', {
        url: '/customers',
        templateUrl: 'app/pages/customers/customer.html',
        controller: 'customerController',
        controllerAs: 'customers',
        data: {
        loginRequired: true
      }
      }).state('login', {
        url: '/login',
        templateUrl: 'app/pages/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
        data: {
        loginRequired: false
      }
      });

    $urlRouterProvider.otherwise('/rooms');
  }

})();
