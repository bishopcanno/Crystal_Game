// all 4 of the crystal buttons use the same randomization, 1-12
var redCrystalNumber = Math.floor(Math.random() * 12 ) + 1;
var blueCrystalNumber = Math.floor(Math.random() * 12 ) + 1;
var purpleCrystalNumber = Math.floor(Math.random() * 12 ) + 1;
var turquoiseCrystalNumber = Math.floor(Math.random() * 12 ) + 1;
// the target number is 40 through 120
var randomTargetNumber = Math.floor(Math.random() * 80) + 40;
// various counters used
var winsCounter = 0;
var lossesCounter = 0;
var userTotalCounter = 0;


//upon clicking the start button the game begins and the user can input with the crystal buttons
$("#startButton").click( function(){
// displays the target number for the user    
    $("#randoNumber").html(randomTargetNumber);
// each of the four crystal buttons invoke the winLoseCondition as well as add themselves to the users total    
    $("#redCrystalButton").click( function(){
        userTotalCounter = redCrystalNumber + userTotalCounter;
        winLoseCondition();
    });
    
    $("#blueCrystalButton").click( function(){
        userTotalCounter = blueCrystalNumber + userTotalCounter;
        winLoseCondition();
    });
    
    $("#purpleCrystalButton").click( function(){
        userTotalCounter = purpleCrystalNumber + userTotalCounter;
        winLoseCondition();
    });

    $("#torquoiseCrystalButton").click( function(){
        userTotalCounter = turquoiseCrystalNumber + userTotalCounter;
        winLoseCondition();
    });
});
//function to be called each time a crystal button is pushed, will inform if win/loss condition is met and display the calculation run during an onclick of any crystal button
function winLoseCondition(){
    $("#totalSpan").html(userTotalCounter);
    
    if(userTotalCounter === randomTargetNumber){
        winsCounter++;
        $("#winsSpan").html(winsCounter);
        alert("You've Won!!!");
        resetFunk();
        
    } else if (userTotalCounter > randomTargetNumber){
        lossesCounter++;
        $("#lossesSpan").html(lossesCounter)
        alert("Better get good at coding because you're a terrible miner!!!");
        resetFunk();
    }
};
// funtion that resets everything except wins losses, used by the winLoseCondition function and reset button
function resetFunk(){
    
    redCrystalNumber = Math.floor(Math.random() * 12 ) + 1;
    blueCrystalNumber = Math.floor(Math.random() * 12) + 1;
    purpleCrystalNumber = Math.floor(Math.random() * 12) + 1;
    turquoiseCrystalNumber = Math.floor(Math.random() * 12) + 1;
    randomTargetNumber = Math.floor(Math.random() * 80) + 40;
    userTotalCounter = 0;
       
    $("#randoNumber").html(randomTargetNumber);
    $("#totalSpan").html("0");
};
// Code for the reset button, calls resetFunk and clears wins/losses
$("#resetButton").click(function(){
    resetFunk();
    $("#winsSpan").html("0");
    $("#lossesSpan").html("0");
    lossesCounter = 0;
    winsCounter = 0;
});

// Wanted to build a funtion for the randomization of the crystal numbers, not sure exactly how to make that happen.
// function crystalRandomGen(){
//     var x = Math.floor(Math.random() * 12 ) + 1;
// }