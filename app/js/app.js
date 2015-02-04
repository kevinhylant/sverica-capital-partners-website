(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  var scp_app = angular.module('svericaApp', [
    'ngRoute'
  ]);

  scp_app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
     .when('/app',
        {
            controller: 'SvericaController',
            templateUrl: '/app/views/app.html'
        })
    .otherwise({ redirectTo: '/app' });
  }]);

  scp_app.controller("SvericaController", function(){
    this.test = test;
  })

  var test = {
    name: "kevin"
  };

})();

