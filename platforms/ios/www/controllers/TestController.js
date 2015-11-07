/**
 *
 *
 */

angular.module('app')
  .controller('TestController',['$http', function($http) {
    var _vm = this;
    _vm.result = 'no action yet';

    _vm.loadHtml = function() {
      $http({
        method : 'get',
        url : 'https://www.miessagenda.nl/api/index.php/profile/deviceGuid?device=undefined'
      }).success(function(response) {
        _vm.result = 'Got Info';
      }).error(function(response) {
        _vm.result = 'Got Error';
      });
      _vm.result = 'Checking'
    }
  }]);