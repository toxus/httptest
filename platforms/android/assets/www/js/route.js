/**
 * The router
 */

angular.module('app')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/test/index.html',
        controller: 'TestController',
        controllerAs: 'test'
      })
      .otherwise({
        redirectTo: '/'
      });


  });
