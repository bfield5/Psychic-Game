var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var wins = 0;
        var losses = 0;
//       not sure on these
        var guessesLeft = 9;
        var guessesSoFar = [];    
            
            
            
        
        
        // Whenever a user presses a key
            document.onkeyup = function(event) {
                
                var userGuess = event.key.toLowerCase();
                var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                // if it's NOT a letter, let the user know and 'return'
                // this will prevent the rest of the code below from running...
                if (computerChoices.indexOf(userGuess) === -1) {
                    alert(userGuess + " is not a letter, Please try again!");
                    return false;
                }

                // the rest of your code goes here... if the user makes it to
                // this point, that means they've made a valid guess
//                alert("good guess... " + userGuess + " is a letter.");
            
//                console.log(event.key);
                
                console.log("User Guess: " + userGuess + " Computer Guess: " + computerGuess);
                
                guessesSoFar.push(userGuess);
                if (guessesLeft === 1) {
                    alert("Game Over! Try Again");
                
                
                    }else if (userGuess === computerGuess) {
                        wins++;


                    } else {
                        losses++ && guessesLeft--;

                    }
                
               
                    
                    

                
                
                document.getElementById("wins").textContent = wins;
                document.getElementById("losses").textContent = losses;
                document.getElementById("guessesLeft").textContent = guessesLeft;
                document.getElementById("guessesSoFar").textContent = guessesSoFar;
            
            }