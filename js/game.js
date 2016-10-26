    (function diceGame() {

      // Use document.querySelector('...') to find HTML elements
      // The argument into the function is a CSS selector!
      // Any HTML element has an `innerText` property that you can
      // access (or change) for the contents of that element.


      // Creation of Object
      var game = {
        startDate: new Date(),
        gameRounds: [  { roll:0, time:new Date() }  ],
        rollDice: function rollingDice () {
          var firstDice = Math.ceil(Math.random() * 6);
          var secondDice = Math.ceil(Math.random() * 6);
          return [firstDice, secondDice];
        }
      };

      // Game start time stamps
      var startHour = game.startDate.getHours();
      var startMinute = game.startDate.getMinutes();
      var gameStartTime = game.startDate.getTime();
      console.log(gameStartTime);
      // console.log(new Date().getHours());
      // console.log(game.startDate.getMinutes());


      document.querySelector(".game-start").innerText = "Game Started "+game.startDate.getFullYear() + "-" +(game.startDate.getMonth()+1) + "-" +game.startDate.getDate()+" at " + startHour + ":" + startMinute;;


       // Button click function
       document.querySelector('button').addEventListener('click', function buttonClicked() {

      // Storing random dice numbers into array result
      var result = game.rollDice();

        // Connecting dice boxes
        document.querySelector('.dice aside:first-child').innerText = result[0];
        document.querySelector('.dice aside:last-child').innerText = result[1];


        // Tracking number of rolls to win
        game.gameRounds[game.gameRounds.length - 1].roll += 1;
        // console.log(game.gameRounds[game.gameRounds.length - 1].roll);


          // // Tracking time to win
          // game.gameRounds[game.gameRounds.length -1].time.getTime();
          // console.log(game.gameRounds[game.gameRounds.length -1].time.getTime());

          // // time to win
          // var timeDiff = endTime - startTime;
          // console.log(timeDiff);

          // // Game end time stamp
          // var endTime = game.gameRounds[game.gameRounds.length -1].time.getTime();
          // console.log(endTime);







        // Winner logic calculation
        if ((result[0] + result[1]) === 7) {
          // console.log("Winner");
          document.querySelector("h2").innerText = "Winner";
          var nowDate = new Date();
          var winTime = (nowDate.getSeconds() - game.startDate.getSeconds());
          console.log(winTime);
          document.querySelector(".message").innerText = "It took you " + game.gameRounds[game.gameRounds.length - 1].roll + " tries and "+winTime+" Seconds";


        }
        else if ((result[0] + result[1]) === 11) {
          // console.log("Winner");
          document.querySelector("h2").innerText = "Winner";
          document.querySelector(".message").innerText = "It took you " + game.gameRounds[game.gameRounds.length - 1].roll + " tries and "+winTime+" Seconds";
          var winTime = game.startDate.getTime();
          console.log(winTime);
        }
        else {
          document.querySelector("h2").innerText = "Try Again";
        }

      });

    })();
