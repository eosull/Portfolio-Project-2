let card = document.getElementById('gb');
card.addEventListener("click", flipCard);

function flipCard(){
    card.classList.toggle("flipCard");
}


function calculateGoalsPerGame(playerNum){
    let playerList = document.getElementsByClassName('goal-player');
    let player = playerList[playerNum].innerHTML;
    let gameList = document.getElementsByClassName('goal-games');
    let game = gameList[playerNum].innerHTML;
    let goalList = document.getElementsByClassName('goal-amount');
    let goal = goalList[playerNum].innerHTML;

    let gpg = parseFloat(goal/game).toFixed(2);

    document.getElementById('gpg-statement').innerHTML = (`${player} Scored ${gpg} Goals Per Game`);
}

function calculateAssistsPerGame(playerNum){
    let playerList = document.getElementsByClassName('assist-player');
    let player = playerList[playerNum].innerHTML;
    let gameList = document.getElementsByClassName('assist-games');
    let game = gameList[playerNum].innerHTML;
    let assistList = document.getElementsByClassName('assist-amount');
    let assist = assistList[playerNum].innerHTML;

    let apg = parseFloat(assist/game).toFixed(2);

    document.getElementById('apg-statement').innerHTML = (`${player} Provided ${apg} Assists Per Game`);
}

function calculateCSP(playerNum){
    let playerList = document.getElementsByClassName('cs-player');
    let player = playerList[playerNum].innerHTML;
    let gameList = document.getElementsByClassName('cs-game');
    let game = gameList[playerNum].innerHTML;
    let csList = document.getElementsByClassName('cs-amount');
    let cs = csList[playerNum].innerHTML;

    let csp = parseFloat((cs/game) * 100).toFixed(2);

    document.getElementById('csp-statement').innerHTML = (`${player} Kept a clean sheet in ${csp}% of games`);
}