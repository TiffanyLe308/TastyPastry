var app = angular.module('tastyPastry', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../html/home.html'
    })

    .state('home.list', {
      url: '/list',
      templateUrl: '../html/list.html',
      controller: function($scope) {
          $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
      }
    })

    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
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
