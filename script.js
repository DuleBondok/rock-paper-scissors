let randomPick;
function getComputerChoice()     //computer randomly chooses
{
    let result = Math.random() * 10;
    if (result <= 3)
    {
        randomPick = "Rock"
        return randomPick;
    }
    else if (result > 3 && result <= 7)
    {
        randomPick = "Paper";
        return randomPick;
    }
    else
    {
        randomPick = "Scissors";
        return randomPick;
    }
}



let sign;
let humanResult;
function getHumanChoice()    //human inputs
{
    humanResult = sign;
    return humanResult;
}




let humanScore = 0;             // human score set to zero
let computerScore = 0;          // computer score set to zero

function playRound(humanChoice, computerChoice)     //round starts, who wins his score is incrementing
{
    if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper")
    {
        console.log("Computer wins!");
        computerScore ++;
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors")
    {
        console.log("Human wins!");
        humanScore++;
    }

    else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock")
        {
            console.log("Human wins!");
            humanScore++;
        }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors")
    {
        console.log("Computer wins!");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock")
        {
            console.log("Computer wins!");
            computerScore++;
        }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper")
        {
            console.log("Human wins!");
            humanScore++;
        }
    else
        {
            console.log("Its draw");

        }

    }



function playGame()     //playing 5 rounds to get the total winner
{
    for(let i=1;i<=5;i++)
    {
        sign = prompt("Insert your choice");
        getHumanChoice();
        console.log(getHumanChoice());
        getComputerChoice();
        console.log(getComputerChoice());
        playRound(humanResult,randomPick);
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
        sign = 0;
    }

    if(computerScore >  humanScore)
    {
        console.log("COMPUTER IS THE TOTAL WINNER");
    }
    else if (computerScore === humanScore)
    {
        console.log("ITS DRAW!");
    }
    else
    {
        console.log("HUMAN IS THE TOTAL WINNER");
    }
}

playGame();