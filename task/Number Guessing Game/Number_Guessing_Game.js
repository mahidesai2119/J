let keepPlaying = true;

while (keepPlaying) {
    const secretNum = Math.floor(Math.random() * 100) + 1;

    let turn = 0;
    const maxTurns = 10;
    let won = false;

    alert("Let's play the Number Guessing Game!\nCan you beat the challenge and guess the number from 1 to 100?\nYou only have 10 shots!");

    while (turn < maxTurns && !won) {
        let input = prompt("Attempt " + (turn + 1) + " - Enter your guess (between 1 and 100):");

        if (input === null) {
            alert("Game exited. Thank you for playing!");
            keepPlaying = false;
            break;
        }

        if (isNaN(input) || input === "") {
            alert("Please enter a valid number.");
            continue;
        }

        if (input < 1 || input > 100) {
            alert("Please enter a number between 1 and 100.");
            continue;
        }

        turn++;

        if (input == secretNum) {
            alert("Congratulations! You've guessed the correct number " + secretNum + " in " + turn + " attempts!");
            won = true;
        } else if (input < secretNum) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }

    if (!won && turn >= maxTurns) {
        alert(maxTurns + " attempts reached! The correct number was " + secretNum + ".");
    }

    let askUser = prompt("Do you want to play again? (yes/no)");

    if (askUser !== null && askUser.trim().toLowerCase() === "yes") {
        keepPlaying = true;
    } else {
        keepPlaying = false;
        alert("Thank you for playing! Goodbye!");
    }
}