app.controller('OurServicesController', ['$scope', function($scope) {
  $scope.packages = [
    {
      title: 'Birthday Package',
      image: '../images/img_12.jpg',
      description: 'Send your loved one the very best in birthday cakes! Our gourmet delights are delivered right to your loved ones door - guaranteed on time. Choose one of our delicious selections.',
      adult: 'For Adults: ',
      children: 'For Children: ',
      detailone: '- Birthday cake $49.95 (standard cake is for 10 servings - 6 inch. If theme cake is requested, price will be recalculated).',
      detailtwo: '- 12 Cupcakes in a box $27.95 (Choice of Vanilla, Red Velvet or Chocolate)',
      detailthree: '- Flower prices upon request.',
      detailfour: '- Congratuliation Card.',
      detailfive: '- Wine and fruit basket.',
      detailsix: '- Balloons are included',
      detailseven: '- Congratuliation Card.',
      detaileight: '- Fruit basket.',
      detailnine: '- Balloons are included.'
    },
    {
      title: 'Anniversary Package',
      image: '../images/img_13.jpg',
      description: 'Ringing in another year together should be a time of celebration and elation. What better way to enjoy this wonderful moment with a bit of sweet and delicious taste.',
      detailone: '- Anniversary cake $69.95 (standard cake is for 10 servings - 6 inch. If theme cake is requested, price will be recalculated).',
      detailtwo: '- 12 Cupcakes in a box $39.95 (Choice of Vanilla, Red Velvet, Chocolate, Double Chocolate Mint, Lemon with vanilla buttercream, Vanilla-Raspberry with white chocolate buttercream, or Blueberry Lemon ).',
      detailthree: '- Flower prices upon request.',
      detailfour: '- Congratuliation Card.',
      detailfive: '- Wine and fruit basket.',
      detailsix: '- Balloons are included.'
    },
    {
      title: 'Wedding Package',
      image: '../images/img_14.jpg',
      description: 'A fantastic way to celebrate your wedding ceremony, these cakes can all be personalised with your message of love and photo, or take them as they are!',
      detailone: '- Wedding cake $400 (3 tier cake. If theme cake is requested, price will be recalculated).',
      detailtwo: '- 12 Cupcakes in a box $49.95 (Choice of Vanilla, Red Velvet, Chocolate, Double Chocolate Mint, Lemon with vanilla buttercream, Vanilla-Raspberry with white chocolate buttercream, or Blueberry Lemon with wedding theme decoration).',
      detailthree: '- Flower prices upon request.',
      detailfour: '- Congratuliation Card.',
      detailfive: '- Wine and fruit basket.',
      detailsix: '- Balloons are included.',
      notes: 'Wedding cake tasting will be arranged with our consultant. Since every cake we create is one-of-a-kind, we encourage you to bring in your own ideas: pictures, invitations, printouts, fabrics, flowers, and colors. Please let us know ahead of time if you have any special dietary restrictions.'
    }
  ];
}]);
