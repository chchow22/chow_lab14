// Gets the module
var app = angular.module("myModule");

app.config(function($routeProvider) {

  $routeProvider
    .when ("/", {
      controller: "routeCtrl",
      templateUrl: "dog.html"
    })

    .when("/dog", {
      controller: "routeCtrl",
      templateUrl: "dog.html"
    })

    .when("/cat", {
      controller: "routeCtrl",
      templateUrl: "cat.html"
    })

    .when("/rat", {
      controller: "routeCtrl",
      templateUrl: "rat.html"
    })

    .when("/cub", {
      controller: "routeCtrl",
      templateUrl: "cub.html"
    })

    .when("/404", {
      controller: "routeCtrl",
      templateUrl: "404.html"
    })

    .otherwise({
      redirectTo : '/404'
    });
});
