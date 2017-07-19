// Gets the module
var app = angular.module("myModule");

app.config(function($routeProvider) {

  $routeProvider
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

    .otherwise({
      controller: "routeCtrl",
      templateUrl: "404.html"
    });
});
