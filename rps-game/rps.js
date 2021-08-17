function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);
    //console.log(random, choice[random]);
    return choice[random];
}

function playRound(playerSelection, computerSelection) {
    // logic of the actual game
    // scoring, player = 1, computer = 2, draw = 0

    if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper"){
        return 2;
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors"){
        return 1;
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Rock"){
        return 0;
        
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock"){
        return 1;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Scissors"){
        return 2;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Paper"){
        return 0;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper"){
        return 1;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Rock"){
        return 2;
    }
    else (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Scissors");{
        return 0;
    }
    }

function game(){
    // five round game, and also keep score
    let pscore = 0;
    let cscore = 0;
    let draw = 0;
    alert("Best of 5 rounds! Check console for round results");
    for (let i = 0; i < 5; i++){
        let pturn = prompt("What's your move?");
        let cturn = computerPlay();
        console.log("player turn is " + pturn);
        console.log("computer turn is " + cturn);
        if (playRound(pturn, cturn) == 1){
            console.log("You Win! " + pturn + " beats " + cturn);
            //console.log(playRound(pturn, cturn));
            pscore++;
        }
        else if (playRound(pturn, cturn) == 2){
            console.log("You Loose! " + cturn + " beats " + pturn);
            //console.log(playRound(pturn, cturn));
            cscore++;
        }
        else {
            console.log("Thats a Draw! Try Again");
            //console.log(playRound(pturn, cturn));
            draw++;
        }
        

    }
    console.log("player score " + pscore);
    console.log("comp score " + cscore);

    if (pscore > cscore){
        console.log("RESULT: player wins");
        return "RESULT: You are the winner!";
    }
    else if (pscore < cscore){
        console.log("RESULT: computer wins");
        return "RESULT: You Lost!";
    }
    else{
        console.log("RESULT: DRAW");
        return "RESULT: Draw!";
    }

}

alert(game());

  //const playerSelection = "Rock";
  //const computerSelection = computerPlay();
  //console.log(playRound(playerSelection, computerSelection));