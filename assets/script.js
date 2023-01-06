function handleButtonPress(playerNum) {
    let list, game, value, newPlayerNum;

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

    calculateStatistic(list, game, value, playerNum, newPlayerNum);
}

function calculateStatistic(list, game, value, playerNum, newPlayerNum) {
    let playerList = document.getElementsByClassName(list);
    let playerName = playerList[newPlayerNum].innerHTML;

    let gameList = document.getElementsByClassName(game);
    let games = gameList[newPlayerNum].innerHTML;

    let amountList = document.getElementsByClassName(value);
    let amount = amountList[newPlayerNum].innerHTML;

    let stat = parseFloat(amount / games).toFixed(2);
    returnStatement(playerNum, playerName, stat);
}

function returnStatement(playerNum, playerName, stat) {
    if (playerNum <= 5) {
        document.getElementById('gpg-statement').innerHTML = (`${playerName} Scored ${stat} Goals Per Game`);
    } else if (playerNum <= 11) {
        document.getElementById('apg-statement').innerHTML = (`${playerName} Provided ${stat} Assists Per Game`);
    } else {
        document.getElementById('csp-statement').innerHTML = (`${playerName} Kept a clean sheet in ${stat}% of games`);
    }
}

function flipAward() {
    card.classList.toggle('flipAward');
}

function showCountry(playerNum) {
    if (playerNum === 0) {
        for (let i = 0; i <= 5; i++) {
            let playerCountry = 'country' + i;
            let styleDocCheck = document.getElementById(playerCountry);
            let countryHeading = window.getComputedStyle(styleDocCheck).getPropertyValue('display');
            document.getElementById(playerCountry).style.display = check(countryHeading);
        }
        let headingDisplay = 'countryh' + 0;
        console.log(headingDisplay);
        let styleDocCheck = document.getElementById(headingDisplay);
        let countryHeading = window.getComputedStyle(styleDocCheck).getPropertyValue('display');
        document.getElementById(headingDisplay).style.display = check(countryHeading);
    }else if (playerNum === 1) {
        for (let i = 6; i <= 11; i++) {
            let playerCountry = 'country' + i;
            let styleDocCheck = document.getElementById(playerCountry);
            let countryHeading = window.getComputedStyle(styleDocCheck).getPropertyValue('display');
            document.getElementById(playerCountry).style.display = check(countryHeading);
        }
        let headingDisplay = 'countryh' + 1;
        console.log(headingDisplay);
        let styleDocCheck = document.getElementById(headingDisplay);
        let countryHeading = window.getComputedStyle(styleDocCheck).getPropertyValue('display');
        document.getElementById(headingDisplay).style.display = check(countryHeading);
    }else if (playerNum === 2) {
        for (let i = 12; i <= 17; i++) {
            let playerCountry = 'country' + i;
            let styleDocCheck = document.getElementById(playerCountry);
            let countryHeading = window.getComputedStyle(styleDocCheck).getPropertyValue('display');
            document.getElementById(playerCountry).style.display = check(countryHeading);
        }
        let headingDisplay = 'countryh' + 2;
        console.log(headingDisplay);
        let styleDocCheck = document.getElementById(headingDisplay);
        let countryHeading = window.getComputedStyle(styleDocCheck).getPropertyValue('display');
        document.getElementById(headingDisplay).style.display = check(countryHeading);
    }
}

function check(headingCode){
    if (headingCode === 'none'){
        headingCode = 'block';
    } else {
        headingCode = 'none';
    }
    return headingCode;
}