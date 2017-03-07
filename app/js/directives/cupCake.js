app.directive('cupCake', function() {
  return {
    restrict: 'E',
    scope: {
      cupcake: '='
    },
    templateUrl: 'cupCake.html'
  };
});
