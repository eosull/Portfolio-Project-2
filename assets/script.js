
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