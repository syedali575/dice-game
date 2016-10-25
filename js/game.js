(function diceGame() {

  // Use document.querySelector('...') to find HTML elements
  // The argument into the function is a CSS selector!
  // Any HTML element has an `innerText` property that you can
  // access (or change) for the contents of that element.







  document.querySelector('button').addEventListener('click', function buttonClicked() {

    // Storing random dice numbers into array

    var result = game.rollDice();

    // var dieNumOne = document.querySelector('.dice aside:first-child').innerText;
document.querySelector('.dice aside:first-child').innerText = result[0];
document.querySelector('.dice aside:last-child').innerText = result[1];

// Game started stamp

document.querySelector(".game-start").innerText = "Game Started "+game.startDate;




// Tracking number of rolls to win

    var currentRoundRoll = 0;
    currentRoundRoll += 1;
    console.log(currentRoundRoll);






  // Winner calculation Logic

  if ((result[0] + result[1]) === 7) {
    // console.log("Winner");
    document.querySelector("h2").innerText = "Winner";
  }
  else if ((result[0] + result[1]) === 11) {
    // console.log("Winner");
    document.querySelector("h2").innerText = "Winner";
  }
  else {
    document.querySelector("h2").innerText = "Try Again";



  }





  document.querySelector(".message").innerText = "(It took you ____ tries and ____ Seconds)";



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
