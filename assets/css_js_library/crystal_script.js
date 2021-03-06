// all 4 of the crystal buttons use the same randomization, 1-12, tried to create a function down at the bottom but was unsuccessful
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

// determines if the start button has been clicked, built in because the start button being pushed more than once the game would break 
var startButtonClicked = false;

// windowsizing funtion for certain mobile responsiveness
var winWidth = $( window ).width();

function windowsizing(width){
    if(width <= 1020){
        $("#minerImg").hide();
    }
}

windowsizing(winWidth);

//upon clicking the start button the game begins by setting the startButtonClicked var to true
$("#startButton").click( function(){
    if(!startButtonClicked)
    
    {// displays the target number for the user    
    $("#randoNumber").html(randomTargetNumber);
    
    }
    startButtonClicked = true;
});

// each of the four crystal buttons invoke the winLoseCondition as well as add themselves to the users total
// they also check to make sure the game has been started
$("#redCrystalButton").click( function(){
    if(startButtonClicked){
        userTotalCounter = redCrystalNumber + userTotalCounter;
        winLoseCondition();
    } else {
        alert("You need to start the game first");
    }
});

$("#blueCrystalButton").click( function(){
    if(startButtonClicked){
        userTotalCounter = blueCrystalNumber + userTotalCounter;
        winLoseCondition();
    } else {
        alert("You need to start the game first");
    }
});

$("#purpleCrystalButton").click( function(){
    if(startButtonClicked){
        userTotalCounter = purpleCrystalNumber + userTotalCounter;
        winLoseCondition();
    } else {
        alert("You need to start the game first");
    }
});

$("#torquoiseCrystalButton").click( function(){
    if(startButtonClicked){
        userTotalCounter = turquoiseCrystalNumber + userTotalCounter;
        winLoseCondition();
    } else {
        alert("You need to start the game first");
    }
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
    if(startButtonClicked){
        resetFunk();
        $("#winsSpan").html("0");
        $("#lossesSpan").html("0");
        lossesCounter = 0;
        winsCounter = 0;
    } else{
        alert("You need to start the game first")
    }
});