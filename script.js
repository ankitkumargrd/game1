    let userScore = 0;
    let compScore = 0;
    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const userScorePara = document.querySelector("#user-score");
    const compScorePara = document.querySelector("#comp-score");
    
    const genCompChoice = () => {
        const options = ["rock", "paper", "scissors"];
        const randIdx = Math.floor(Math.random() *3);
        return options[randIdx];
    }

    const drawGame = () => {
        msg.innerText = "Game was Draw. Play again";
        msg.style.backgroundColor = "#081b31";
    }

    const showWinner = (userWin, userchoice, compchoice) => {
        if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `you win! Your ${userchoice} beats Computer ${compchoice}`;
            msg.style.backgroundColor = "green";

        } else {
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `you lose! Computer ${compchoice} beats Your ${userchoice}`;
            msg.style.backgroundColor = "red";
        }

    }
    const playGame = (userChoice) => {
        const compChoice = genCompChoice();
        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;
            if(userChoice ==="rock") {
            userWin = compChoice ==="paper" ? false : true;  
            } else if (userChoice ==="paper") {
                userWin = compChoice ==="scissors" ? false : true;
            } else {
                userWin = compChoice ==="scissors" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
    }
    
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userchoice = choice.getAttribute("id");
            playGame(userchoice);
        });
    });