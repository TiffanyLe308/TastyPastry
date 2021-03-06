app.controller('HomeController', ['$scope', function($scope) {
  $scope.myInterval = 3000;
  $scope.homeslides = [
    {
      image: '../../images/img_1.jpg'
    },
    {
      image: '../../images/img_2.jpg'
    },
    {
      image: '../../images/img_3.jpg'
    }
  ];

  $scope.menus = [
    {
      name: 'Cupcakes',
      description: 'Our professional Pastry Chefs bake in small batches each day using the finest ingredients. We hope to give the customers a taste that is unlike all the rest. When you visit our cozy shop, you will find pretty and delicious additions to accessorize your upcoming event or your day.',
      image: '../images/img_4.jpg'
    },
    {
      name: 'Treats & Favours',
      description: 'We are excited to see the enjoyment that these portable little treats brought to people of every age. No matter how you slice it, it is truly a dessert that has stood the test of time. Our cakes either ready-to-eat or custom for special order are made, served and delivered with care.',
      image: '../images/img_6.jpg'
    },
    {
      name: 'Chocolate Cakes',
      description: 'You will be sure to find our love for baking by meeting our pastry chefs at the store, who are on hand to give you a taste of our classic flavors as well as our new seasional discoveries. And we are ready to whisk, pipe and sprinkle some happiness into your day.',
      image: '../images/img_5.jpg'
    }
  ];
  $scope.services = [
    {
      name: 'Birthday Party',
      description: 'We can customize your cakes or cupcakes so your special one can have their very own design. We try our best to bring any dessert lover back to their childhood, choose from a wide range of rich, moist and delicious dessert. An amazing gift wrapped up in a sweet box.',
      image: '../images/img_9.jpg'
    },
    {
      name: 'Anniversary Party',
      description: 'We are ready to delight your lovely guests with our amazing desserts. TastyPastry has a wonderful selection of fresh baked cupcakes and cakes are the perfect solution to create tasty and truly memorable for the special events in your life.',
      image: '../images/img_8.jpg'
    },
    {
      name: 'Wedding Ceremony',
      description: 'Sweeten your wedding day with TastyPastry. We offer endless possibilities to celebrate your special day with our beautiful handmade desserts that taste as good as they look. Your wedding cake should be a reflection of your style and taste.',
      image: '../images/img_7.jpg'
    }
  ];
}]);
