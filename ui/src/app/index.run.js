(function() {
  'use strict';

  angular
    .module('ui')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, authService, $state) {

    $rootScope.$on('$stateChangeStart', onStateChangeStart);
    //$rootScope.$on('$stateChangeStart', function(event, toState){
    //  onStateChangeStart(event, toState, authService)
    //});

    $log.debug('runBlock end');


    function onStateChangeStart(event, toState, toParams, fromState, fromParams) {

      var isUserAllowed = authService.isUserAllowed(toState);

      if (isUserAllowed) {
        //event.preventDefault();
        $state.go('rooms');
      }
    }
  }
})();
