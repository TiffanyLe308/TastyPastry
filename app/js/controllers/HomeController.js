app.controller('HomeController', ['$scope', function($scope) {
  $scope.menus = [
    {
      name: 'Cupcakes',
      description: 'Our professional Pastry Chefs bake in small batches each day using the finest ingredients sourced from local. We hope to give the customers a taste that is unlike all the rest. When you visit our cozy shop, you will find pretty and delicious additions to accessorize your upcoming event or your day.',
      image: '../images/img_4.jpg'
    },
    {
      name: 'Cheescakes',
      description: 'We are excited to see the enjoyment that these portable little treats brought to people of every age. No matter how you slice it, cheesecake is truly a dessert that has stood the test of time. Our cakes either ready-to-eat or custom for special order are made, served and delivered with care.',
      image: '../images/img_6.jpg'
    },
    {
      name: 'Chocolate Cakes',
      description: 'You will be sure to find our love for baking by meeting our pastry chefs at the store, who are on hand to give you a taste of our classic flavors as well as our new seasional discoveries. And we are ready to whisk, pipe and sprinkle some happiness into your day.',
      image: '../images/img_5.jpg'
    }
  ];
}]);
