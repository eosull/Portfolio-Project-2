/* Function handleButtonPress handles the beginning of the calculation of statistics
in the calculate sections. The function is called via a button. Each 
button is assigned a number which is passed to the function and is 
tested to determine which statistic is to be calculated.
 */

function handleButtonPress(playerNum) {
    let list, game, value, newPlayerNum;

    // If number 0-5 = goals, 6-11 = assists, > 11 = assists
    if (playerNum <= 5) {
        list = 'goal-player';
        game = 'goal-games';
        value = 'goal-amount';
        newPlayerNum = playerNum;
    } else if (playerNum > 5 && playerNum <= 11) {
        list = 'assist-player';
        game = 'assist-games';
        value = 'assist-amount';
        newPlayerNum = playerNum - 6;
    } else {
        list = 'cs-player';
        game = 'cs-game';
        value = 'cs-amount';
        newPlayerNum = playerNum - 12;
    }

    /* Variables list, game, value & newPlayerNum are assigned values that are passed
    to calculateStatistics */

    calculateStatistic(list, game, value, playerNum, newPlayerNum);
}

/* Function calculateStatistic takes the values assigned in
handleButtonPress and uses them to read data from tables. 
There is a maths operation (value/games) to produce stat. */

function calculateStatistic(list, game, value, playerNum, newPlayerNum) {

    /* Values passed from handleButtonPress are used to navigate DOM
    and extract data for individual players */

    let playerList = document.getElementsByClassName(list);
    let playerName = playerList[newPlayerNum].innerHTML;

    let gameList = document.getElementsByClassName(game);
    let games = gameList[newPlayerNum].innerHTML;

    let amountList = document.getElementsByClassName(value);
    let amount = amountList[newPlayerNum].innerHTML;

    // Stat is calculated and sent to returnStatement along with player info
    let stat = parseFloat(amount / games).toFixed(2);
    returnStatement(playerNum, playerName, stat);
}

/* Function returnStatement takes player info and produced stat
and returns a statement in the correct location on the site */

function returnStatement(playerNum, playerName, stat) {
    if (playerNum <= 5) {
        document.getElementById('gpg-statement').innerHTML = (`${playerName} Scored ${stat} Goals Per Game`);
    } else if (playerNum <= 11) {
        document.getElementById('apg-statement').innerHTML = (`${playerName} Provided ${stat} Assists Per Game`);
    } else {
        document.getElementById('csp-statement').innerHTML = (`${playerName} Kept a clean sheet in ${stat}% of games`);
    }
}


/* Function flipAward called via buttonpress. It makes
flip-award style rules active on element with id of card */

function flipAward() {
    card.classList.toggle('flip-award');
}

/* Function flipImage called via mouse hover over image and
leaving image. It makes flip-image style rules active on
element with id of image */

function flipImage() {
    image.classList.toggle('flip-image');
}

/* Function showCountry is called by 'expand' button press.
This button press passes the function a number which is used
to determine which table needs to be modified */

function showCountry(playerNum) {
    // 0 = goals, 1 = assist, 2 = clean sheets
    if (playerNum === 0) {
        // For loop to cycle through each player
        for (let i = 0; i <= 5; i++) {
            // Call modifyStyleProperty to act on each player
            modifyDataStyleProperty(i);
        }
        // Call modifyHeadingStyleProperty to act on each heading
        modifyHeadingStyleProperty(playerNum);
    } else if (playerNum === 1) {
        for (let i = 6; i <= 11; i++) {
            modifyDataStyleProperty(i);
        }
        modifyHeadingStyleProperty(playerNum);
    } else if (playerNum === 2) {
        for (let i = 12; i <= 17; i++) {
            modifyDataStyleProperty(i);
        }
        modifyHeadingStyleProperty(playerNum);
    }
}

/* Function modifyDataStyleProperty is called 6 times per table (for each player).
It uses readHeaderProperty function to read a table data element's display property 
and then uses decidePropertyValue function to set it to either 'block' or 'none' */

function modifyDataStyleProperty(i) {
    let tdId = 'country' + i;
    let tdStyleProperty = readHeaderProperty(tdId);
    document.getElementById(tdId).style.display = decidePropertyValue(tdStyleProperty);
}

/* Function modifyHeadingStyleProperty is called only once per table.It uses
readHeaderProperty function to read a table data element's display property and
then uses decidePropertyValue function to set it to either 'block' or 'none' */

function modifyHeadingStyleProperty(playerNum) {
    let thId = 'countryh' + playerNum;
    let thStyleProperty = readHeaderProperty(thId);
    document.getElementById(thId).style.display = decidePropertyValue(thStyleProperty);
}

//Function used to access and return the 'display' style property of an element
function readHeaderProperty(countryId) {
    let findElement = document.getElementById(countryId);
    let propertyValue = window.getComputedStyle(findElement).getPropertyValue('display');
    return (propertyValue);
}

//Function used to test 'display' style property of an element and return whichever is not active
function decidePropertyValue(headingCode) {
    if (headingCode === 'none') {
        headingCode = 'block';
    } else {
        headingCode = 'none';
    }
    return headingCode;
}