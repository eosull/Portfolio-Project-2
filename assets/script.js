
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