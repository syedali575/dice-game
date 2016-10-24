(function diceGame() {

  // Use document.querySelector('...') to find HTML elements
  // The argument into the function is a CSS selector!
  // Any HTML element has an `innerText` property that you can
  // access (or change) for the contents of that element.



  document.querySelector('button').addEventListener('click', function buttonClicked() {

    var dieNumOne = document.querySelector('.dice aside:first-child').innerText;
    console.log(dieNumOne);



    var result = game.rollDice();
    console.log(result);



  });



  var game = {
    startDate: new Date(),
    gameRound: [],
    rollDice: function rollingDice () {
      var firstDice = Math.ceil(Math.random() * 6);
      var secondDice = Math.ceil(Math.random() * 6);
      return [firstDice, secondDice];
    }


  };







})();
