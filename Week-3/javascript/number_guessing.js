function NotNumber(number){
    while(isNaN(number)){
         number = parseInt(prompt(" enter a number"));
    }
   return number
}

function playGuessingGame(numToGuess, totalGuesses=10)
{
    var attempt = 1
    var prev ;
    while(totalGuesses > 0){
        if (attempt == 1) { 

            var number = (prompt("Please enter number between 1-100"));
              
            if (number == null){
                return 0
            }
            number = parseInt(number)

            if (isNaN(number)){
                number = NotNumber(number)
            };
            prev = number
            if (number == numToGuess){
            return attempt
            }
        }
        else{
            if (prev > numToGuess)
            {
                var number = (prompt(prev +" is too large"));
            }
            else
            {
                var number = (prompt(prev +" is too small"));  
            }

            if (number == null){
                return 0
            }

            number = parseInt(number)

            if (isNaN(number)){
                number = NotNumber(number)
            };

            prev = number
               
            if (number == numToGuess){
                return attempt
            }
               
         }
         ++attempt
         --totalGuesses
    }
    return 0
}

playGuessingGame(5,5)