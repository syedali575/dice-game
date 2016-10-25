(function diceGame() {

  // Use document.querySelector('...') to find HTML elements
  // The argument into the function is a CSS selector!
  // Any HTML element has an `innerText` property that you can
  // access (or change) for the contents of that element.



  document.querySelector('button').addEventListener('click', function buttonClicked() {

    var result = game.rollDice();

    // var dieNumOne = document.querySelector('.dice aside:first-child').innerText;
document.querySelector('.dice aside:first-child').innerText = result[0];
document.querySelector('.dice aside:last-child').innerText = result[1];


  if ((result[0] + result[1]) === 7) {
    console.log("Winner");
  }
  else if ((result[0] + result[1]) === 11) {
    console.log("Winner");
  }
  else {
    console.log("Try Again");
  }






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
