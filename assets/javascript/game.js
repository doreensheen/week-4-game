$(document).ready(function(){

    // Create global variables here:
    var numberOfWins = 0;
    var numberOfLosses = 0;
    var currentCount = 0;

    var randomNumber;
    var randomOne;
    var randomTwo;
    var randomThree;
    var randomFour;
    
    // Write Functions here:
    var myFunctions = {
        checkScore: function(currentCount) {
            if (currentCount === randomNumber) {
                numberOfWins = numberOfWins + 1;
                $("#displayWins").text("WINS: " + numberOfWins);
                myFunctions.roundSetup();

            }else if (currentCount > randomNumber) {
                numberOfLosses = numberOfLosses + 1;
                $("#displayLosses").text("LOSSES: " + numberOfLosses);
                myFunctions.roundSetup();
                
            };
        },
        makeRandom: function(low, high) {
            var number = Math.floor((Math.random()*(high-low)) + low);
            return number;
        },
        roundSetup: function() {
            // Generate random numbers:
            randomNumber = myFunctions.makeRandom(19, 120);
            $("#displayRandomNumber").text(randomNumber);
            randomOne = myFunctions.makeRandom(1, 12);
            randomTwo = myFunctions.makeRandom(1, 12);
            randomThree = myFunctions.makeRandom(1, 12);
            randomFour = myFunctions.makeRandom(1, 12);
            currentCount = 0;
            $("#displayCurrentCount").text("");
        }
    };
    
    // call roundSetup for intial round
    myFunctions.roundSetup();
   
    // display to html
    $("#displayWins").text("WINS: " + numberOfWins);
    $("#displayLosses").text("LOSSES: " + numberOfLosses);
    

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