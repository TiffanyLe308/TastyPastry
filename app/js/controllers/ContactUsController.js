app.controller('ContactUsController', ['$scope', 'weather', function($scope, weather) {
  weather.then(function(data) {
    $scope.weather = data.data;
  });
}]);
