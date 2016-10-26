    (function diceGame() {

      // Use document.querySelector('...') to find HTML elements
      // The argument into the function is a CSS selector!
      // Any HTML element has an `innerText` property that you can
      // access (or change) for the contents of that element.


      // Creation of Object
      var game = {
        startDate: new Date,
        gameRounds: [  { roll:0, time:new Date() }  ],
        rollDice: function rollingDice () {
          var firstDice = Math.ceil(Math.random() * 6);
          var secondDice = Math.ceil(Math.random() * 6);
          return [firstDice, secondDice];
        }
      };

      // Game start time stamp
      var startTime = game.startDate.getTime();
      // console.log(startTime);
      document.querySelector(".game-start").innerText = "Game Started "+game.startDate.getFullYear() + "-" +(game.startDate.getMonth()+1) + " at " + startTime;


       // Button click function
       document.querySelector('button').addEventListener('click', function buttonClicked() {

      // Storing random dice numbers into array result
      var result = game.rollDice();

        // Connecting dice boxes
        document.querySelector('.dice aside:first-child').innerText = result[0];
        document.querySelector('.dice aside:last-child').innerText = result[1];


        // Game end time stamp
        var endTime = game.gameRounds[game.gameRounds.length -1].time.getTime();
        console.log(endTime);


        // Tracking number of rolls to win
        game.gameRounds[game.gameRounds.length - 1].roll += 1;
        // console.log(game.gameRounds[game.gameRounds.length - 1].roll);

          // time to win
          var timeDiff = endTime - startTime;
          console.log(timeDiff);

          // // Tracking time to win
          // game.gameRounds[game.gameRounds.length -1].time.getTime();
          // console.log(game.gameRounds[game.gameRounds.length -1].time.getTime());



        // Winner logic calculation
        if ((result[0] + result[1]) === 7) {
          // console.log("Winner");
          document.querySelector("h2").innerText = "Winner";
          document.querySelector(".message").innerText = "It took you " + game.gameRounds[game.gameRounds.length - 1].roll + " tries and Seconds)";
        }
        else if ((result[0] + result[1]) === 11) {
          // console.log("Winner");
          document.querySelector("h2").innerText = "Winner";
        }
        else {
          document.querySelector("h2").innerText = "Try Again";
        }

      });

    })();
