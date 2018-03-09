$(document).ready(function(){

    // Create global variables here:
    var numberOfWins = 0;
    var numberOfLosses = 0;
    var currentCount = 0;
    
    // Write Functions here:
    var myFunctions = {
        checkScore: function(currentCount) {
            if (currentCount === randomNumber) {
                numberOfWins = numberOfWins + 1;
                $("#displayWins").text("WINS: " + numberOfWins);
                currentCount = 0;
                $("#displayCurrentCount").text("");

            }else if (currentCount > randomNumber) {
                numberOfLosses = numberOfLosses + 1;
                $("#displayLosses").text("LOSSES: " + numberOfLosses);
                currentCount = 0;
                $("#displayCurrentCount").text("");

            };
        }
    };
    
    // Generate random numbers:
    var randomNumber = 25;
    var randomOne = 1;
    var randomTwo = 2;
    var randomThree = 3;
    var randomFour = 4;
   
    // display to html
    $("#displayWins").text("WINS: " + numberOfWins);
    $("#displayLosses").text("LOSSES: " + numberOfLosses);
    $("#displayRandomNumber").text(randomNumber);
    $("#displayCurrentCount").text("");
    

    // onclick events
    $("#buttonOne").on("click", function() {
        currentCount = currentCount + randomOne;
        $("#displayCurrentCount").text(currentCount);
        myFunctions.checkScore(currentCount);
    })
    $("#buttonTwo").on("click", function() {
        currentCount = currentCount + randomTwo;
        $("#displayCurrentCount").text(currentCount);
        myFunctions.checkScore(currentCount);
    })
    $("#buttonThree").on("click", function() {
        currentCount = currentCount + randomThree;
        $("#displayCurrentCount").text(currentCount);
        myFunctions.checkScore(currentCount);
    })
    $("#buttonFour").on("click", function() {
        currentCount = currentCount + randomFour;
        $("#displayCurrentCount").text(currentCount);
        myFunctions.checkScore(currentCount);
    })

});