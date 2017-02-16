app.controller('EventsController', ['$scope', function($scope) {
  $scope.events = [
    {
      title: 'Happy tastings',
      image: '../images/img_20.jpg',
      description_one: 'Cake tastings are not just for wedding couples. If you are planning a special birthday or party be sure to join us on Wednesday 5:00pm - 8:00pm. \
        We host cake tastings 1 to 2 times per month. Sample different flavors of cakes, fillings and icings! This is a free event no reservation required.'
    },
    {
      title: 'Private tastings',
      image: '../images/img_17.jpg',
      description_one: 'If you would prefer a private tasting we offer those as well. \
        They cost $30.00 and you receive three cakes in your choice of flavor. \
        These cakes are for you to sample at the bakery and we will box up your leftovers for you! \
        Or - pick up your cakes and sample them in the privacy of your own home.  Either way it is up to you!'
    },
    {
      title: 'Fabulous tastings',
      image: '../images/img_18.jpg',
      description_one: 'We also offer cake tastings for large and complex custom cakes. \
        The most enjoyable part of wedding or party planning is the cake tasting or design consultation session \
        We will have time to sit down and plan the unique design of your cake which reflects your own style. \
        For the tasting we provide several of our freshest cake and buttercream flavor combinations along with a sample of our hand-made marshmallow fondant.\
        ',
        description_two: 'Please let us know ahead of time if you have any special dietary restrictions. Tastings are completely complimentary. \
        However, we do require a credit card number be put on hold before scheduling a tasting consultation. \
        In the event that you fail to show up for your scheduled tasting without calling ahead to notify us, your credit card will be charged a $25 “no-show” fee to cover the cost of the free cake you did not show up to eat and the time we scheduled to meet with you.'
    }
  ];
}]);
