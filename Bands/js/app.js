angular.module('myApp',[
  "mainController",
  "dbServices",
  "ngRoute"
])
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
  .when('/prva',{
    templateUrl: 'pages/prva.html',
  })
  .when('/druga',{
    templateUrl: 'pages/druga.html'
  })
})
