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
      .state('home2', {
        url: '/home2',
        templateUrl: 'app/pages/main/home2.html',
        controller: 'Home2Controller',
        controllerAs: 'home2'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
