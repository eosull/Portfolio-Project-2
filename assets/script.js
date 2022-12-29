
function calculateGoalsPerGame(playerNum){
    let playerList = document.getElementsByClassName('goal-player');
    let player = playerList[playerNum].innerHTML;
    let gameList = document.getElementsByClassName('goal-games');
    let game = gameList[playerNum].innerHTML;
    let goalList = document.getElementsByClassName('goal-amount');
    let goal = goalList[playerNum].innerHTML;

    let gpg = goal/game;



    console.log(`${player} Scored ${gpg} Goals Per Game`);
}