var app = angular.module('tastyPastry', ['ui.router', 'ui.bootstrap', 'ngMap', 'ngAnimate']);

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
      templateUrl: '../html/ourmenu.html',
      controller: 'MenuController'
    })
    .state('ourservices', {
      url: '/ourservices',
      templateUrl: '../html/ourservices.html',
      controller: 'OurServicesController'
    })
    .state('events', {
      url: '/events',
      templateUrl: '../html/events.html',
      controller: 'EventsController'
    })
    .state('contactus', {
      url: '/contactus',
      templateUrl: '../html/contactus.html',
      controller: 'ContactUsController'
    });
});
