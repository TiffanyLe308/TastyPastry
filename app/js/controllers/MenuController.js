app.controller('MenuController', ['$scope', function($scope) {
  $scope.menus = [
    {
      name: 'Cupcakes',
      description_one: 'Mini Cupcakes from ',
      price_one: ' $1.25/pc or $15/doz',
      description_two: 'Regular Cupcakes from ',
      price_two: ' $2/pc or $24/doz',
      description_three: 'Decorated Cupcakes from ',
      price_three: ' $3/pc or $36/doz'
    },
    {
      name: 'Treats & Favours',
      description_one: 'Cookies from',
      price_one: '$1.25/pc or $15/doz ',
      description_two: 'Basic Cake Pops from',
      price_two: '$2/pc or $24/doz ',
      description_three: 'Custom Cake Pops from',
      price_three: '$2.5/pc or $32/doz ',
    },
    {
      name: 'Tiered Cakes',
      description_one: 'Single tier sponge cake from',
      price_one: ' $40',
      description_two: 'Two tier sponge cake from',
      price_two: ' $60',
      description_three: 'Three tier sponge cake from',
      price_three: ' $75',
      description_four: '*Add $10 extra for fruit cake.'
    }
  ];

  $scope.flavors = ['Vanilla', 'Fruit', 'Lemon', 'Carrot', 'Coffee', 'Chocolate', 'Coconut', 'Strawberry', 'Cinnamon', 'Mint Chocolate', 'Chocolate Orange', 'Orange Blossom'];

  $scope.sizes = [
    {
      title: 'Square Cake',
      image: '../images/icon_3.png',
      size_1: '4"',
      size_2: '6"',
      size_3: '8"',
      size_4: '10"',
      size_5: '12"',
      portion_1: '16',
      portion_2: '35',
      portion_3: '60',
      portion_4: '100',
      portion_5: '140'
    },
    {
      title: 'Round Cake',
      image: '../images/icon_2.png',
      size_1: '4"',
      size_2: '6"',
      size_3: '8"',
      size_4: '10"',
      size_5: '12"',
      portion_1: '16',
      portion_2: '35',
      portion_3: '60',
      portion_4: '100',
      portion_5: '140'
    },
    {
      title: 'Cupcake Cake',
      image: '../images/icon_1.png',
      size_1: '1"',
      size_2: '2"',
      portion_1: '1',
      portion_2: '2',
    }
  ];

  $scope.cupcake = false;
  $scope.buttons = [
    {
      title: 'Cupcakes'
    },
    {
      title: 'Treats & Favours'
    },
    {
      title: 'Cakes'
    }
  ]

  $scope.myInterval = 3000;
  $scope.menuslides = [
    {
      image: '../../images/img_4.jpg'
    },
    {
      image: '../../images/img_5.jpg'
    },
    {
      image: '../../images/img_22.jpg'
    },
    {
      image: '../../images/img_7.jpg'
    }
  ];
}]);
