// -----------------------------
// GAME STATE
// -----------------------------

let secretNumber = null;

let minNumber = 1;
let maxNumber = 99;

let currentGuess = 50;
let guessCount = 1;


// -----------------------------
// SCREEN MANAGEMENT
// -----------------------------

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}


// -----------------------------
// START BUTTON
// -----------------------------

document.getElementById("startBtn").addEventListener("click", () => {

    document.getElementById("numberInput").value = "";
    document.getElementById("inputError").textContent = "";

    showScreen("setupScreen");
});


// -----------------------------
// BEGIN GAME
// -----------------------------

document.getElementById("beginBtn").addEventListener("click", () => {

    const input = document.getElementById("numberInput");
    const error = document.getElementById("inputError");

    const number = Number(input.value);

    if (!Number.isInteger(number) || number < 1 || number > 99) {

        error.textContent = "Please enter a whole number between 1 and 99.";

        return;
    }

    secretNumber = number;

    // Reset game
    minNumber = 1;
    maxNumber = 99;
    guessCount = 1;

    currentGuess = Math.floor((minNumber + maxNumber) / 2);

    updateGameUI();

    showScreen("gameScreen");
});


// -----------------------------
// UPDATE GAME UI
// -----------------------------

function updateGameUI() {

    document.getElementById("currentGuess").textContent = currentGuess;

    document.getElementById("guessCount").textContent = guessCount;

    document.getElementById("rangeDisplay").textContent =
        `${minNumber} - ${maxNumber}`;
}


// -----------------------------
// ANSWER BUTTONS
// -----------------------------

document.querySelectorAll(".answer-btn").forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.dataset.answer;

        processAnswer(answer);
    });

});


// -----------------------------
// PROCESS PLAYER ANSWER
// -----------------------------

function processAnswer(answer) {

    /*
        The four responses describe the computer's guess.

        Example:

        Computer: 50

        Secret: 80

        Player:
        "Extremely Low"

        We know the number is considerably higher,
        so the lower half can be discarded.

        "Low" simply means the number is higher.
    */


    if (answer === "low") {

        minNumber = currentGuess + 1;

    }

    else if (answer === "high") {

        maxNumber = currentGuess - 1;

    }

    else if (answer === "extremely-low") {

        // Stronger upward adjustment

        minNumber = Math.min(
            currentGuess + 1,
            Math.floor(currentGuess + (maxNumber - currentGuess) * 0.35)
        );

    }

    else if (answer === "extremely-high") {

        // Stronger downward adjustment

        maxNumber = Math.max(
            currentGuess - 1,
            Math.ceil(currentGuess - (currentGuess - minNumber) * 0.35)
        );
    }


    // Safety check
    if (minNumber > maxNumber) {

        minNumber = 1;
        maxNumber = 99;

        console.log("Inconsistent answers detected.");
    }


    // If there is only one possible number,
    // that's our answer.
    if (minNumber === maxNumber) {

        currentGuess = minNumber;

        finishGame();

        return;
    }


    // Next binary-search guess
    currentGuess = Math.floor(
        (minNumber + maxNumber) / 2
    );

    guessCount++;

    updateGameUI();
}


// -----------------------------
// FINISH GAME
// -----------------------------

function finishGame() {

    document.getElementById("finalNumber").textContent =
        currentGuess;

    document.getElementById("finalGuesses").textContent =
        guessCount;

    showScreen("winScreen");
}


// -----------------------------
// PLAY AGAIN
// -----------------------------

document.getElementById("playAgainBtn").addEventListener("click", () => {

    document.getElementById("numberInput").value = "";

    showScreen("setupScreen");
});


// -----------------------------
// HOME
// -----------------------------

document.getElementById("homeBtn").addEventListener("click", () => {

    showScreen("homeScreen");
});