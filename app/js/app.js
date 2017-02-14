var app = angular.module('tastyPastry', ['ui.router', 'ui.bootstrap', 'ngMap']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../html/home.html',
      controller: 'HomeController'
    })
    .state('ourmenu', {
      url: '/ourmenu',
      templateUrl: '../html/ourmenu.html'
    })
    .state('ourservices', {
      url: '/ourservices',
      templateUrl: '../html/ourservices.html'
    })
    .state('events', {
      url: '/events',
      templateUrl: '../html/events.html'
    })
    .state('contactus', {
      url: '/contactus',
      templateUrl: '../html/contactus.html'
    });
});
