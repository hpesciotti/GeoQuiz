// Set the variables based on elements in the html
const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");
const optionsButtons = document.getElementsByClassName("btn-option");
const scoreBox = document.getElementById("score-box");
const instructionsIdBox = document.getElementById("instructions-id");
const quizBox = document.getElementById("quiz-box");
const optionsPanel = document.getElementById("options-panel");
const leaderboardSection = document.getElementById("leaderboard-section");
const leaderboardList = document.getElementById("leaderboard-list");
const leaderboardFinalBtn = document.getElementById("btn-final-leaderboard");
const noRecordSet = document.getElementById("no-record-set");
const leadNameScore = document.getElementById("lead-name-score");

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
let allQuestions = [];
// Defines an Array that will play the hole of questions databank in each game.
let gameQuestions = [];
// Defines an Array to used in the radomization of answer options.
let currentQuestion;
// Scoreboard variables
let currentQuestionIndex = 0;
let score = 0;
let wrongScore = 0;
let startTime; // to keep track of the start time
let elapsedTime = 0; // to keep track of the elapsed time while stopped
let leaderboardScore = 0;

// Fetches the question databank from the json file an assign them to the allQuestions variable, inspired by KevinFlanagan PP2 Project
document.addEventListener("DOMContentLoaded", (event) => {
    fetch("assets/data/questions.json")
        .then(res => res.json())
        .then(data => {
            allQuestions = data;
        }
        );
});

// Landing Menu - startquiz brings the user to next section enterPlayerName and instructions //
function startQuiz() {
    optionsPanel.style.display = "none";
    instructionsIdBox.style.display = "block";
    leaderboardSection.style.display = "none";
}

// Displays Leaderboard - Inspired by Deeksa Varma PP2 Project - iterate Leaderboard Array in local storage //
function callLeaderboard() {
    placeholderScore();
    leaderboardSection.style.display = "block";
    optionsPanel.style.display = "none";
    quizBox.style.display = "none";
    leaderboardList.innerHTML = leaderboard.map(lbScore => {
        return `<li class="white-halo">${lbScore.username}........${lbScore.score}</li>`;
    }).join('');
}

function placeholderScore() {
    // Gets score from local storage by parse
    let parameterScore = JSON.parse(localStorage.getItem("leaderboardScore"));

    // Checks if the local storage parameter .score is greater than 0
    if (parameterScore > 0) {
        noRecordSet.style.display = "none";
        leadNameScore.style.display = "block";
    } else {
        noRecordSet.style.display = "block";
        leadNameScore.style.display = "none";
    }
}

// Username inspired by Amy Richardson PP2 project
function enterPlayerName() {
    let playerName = document.getElementById("enter-player-name").value; // Get the value of the input field
    document.getElementById("player-name").innerText = "Player Name: " + playerName; // Display player name on the HTML page
    window.localStorage.setItem("playerName", playerName); // add the varible playerName to the local storage for further use in addToleaderboard()
    instructionsIdBox.style.display = "none";
    quizBox.style.display = "block";
    setGameQuestions(); //calls the game functions
    setQuestionsOptions(); //calls the game functions
    runQuiz(); //calls the game functions
}

/** Leaderboards inspired by Deeksa Varma PP2 Project
 * This function gets the variables playerName and leaderboardScore(final score) from local storage
 * creates an array lbScore of 5 objects (splice), sorted by leaderboardScore/score. 
 * It also pushes the lower scores from the array after the entry of higher scores.
*/
function addToleaderboard() {
    let lbScore = {
        score: localStorage.getItem("leaderboardScore"),
        username: localStorage.getItem("playerName")
    };

    leaderboard.push(lbScore);

    leaderboard.sort((a, b) => {
        return b.score - a.score;
    });

    leaderboard.splice(5);

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

// The stopwatch is used as a variable that composes the calculus of the Final Score
function startStopwatch() {
    startTime = new Date().getTime();
}

function stopStopwatch() {
    elapsedTime = new Date().getTime() - startTime;
}

// Calculate the Final Score (LeaderboardScore) to be shown on the Leaderboard
function calcLeaderboardScore() {
    let eslapseTimeMinutes = (elapsedTime / 60000);
    leaderboardScore = Math.floor(((score * score) + (score / eslapseTimeMinutes)) * 100);
    window.localStorage.setItem("leaderboardScore", leaderboardScore); // add the varible leaderboardScore to the local storage for further use in addToleaderboard()
}

/**
 * This function generates the playable questions.
 * It takes "n" questions from the databank of questions((let i = 0; i < "n"; i++)), variable "allQuestions"
 * and returns/pushes an array of playable questions to the variable "gameQuestions".
 * These function was built inspired by this post: https://stackoverflow.com/questions/52763765/push-3-random-names-into-a-new-array
 */
function setGameQuestions() {
    for (let i = 0; i < 10; i++) {
        let randomInt = Math.round(Math.random() * (allQuestions.length - 1));
        gameQuestions.push(allQuestions[randomInt]);
        allQuestions.splice(randomInt, 1);
    }
    return gameQuestions;
}

/**
 * This function shuffles the answer options for each question from the gameQuestions array.
 * It uses Durstenfeld shuffle algorithm.
 * These function was built inspired by this post: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function setQuestionsOptions() {
    function shuffleArray(options) {
        let shuffledOptions = options.slice();
        for (var i = shuffledOptions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffledOptions[i];
            shuffledOptions[i] = shuffledOptions[j];
            shuffledOptions[j] = temp;
        }
        return shuffledOptions;
    }

    gameQuestions.forEach(question => {
        question.options = shuffleArray(question.options);
    });
}

/**
 * This function gets the gameQuestions and establishes a number for each question.
 * Then the randomized questions are displayed. The answer options are also displayed
 * based on their array position.
 */
function displayQuestion() {
    scoreBox.style.display = 'block';
    removeQuestions();
    // This section of the function was based on GreatStack's video tutorial: https://www.youtube.com/watch?v=PBcqGxrr9g8
    currentQuestion = gameQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    // The get answer code was based on Codehal's video tutorial: https://www.youtube.com/watch?v=Vp8x8-reqZA
    let optionList = `<button class="btn-option">${currentQuestion.options[0]}</button>
        <button class="btn-option">${currentQuestion.options[1]}</button>
        <button class="btn-option">${currentQuestion.options[2]}</button>
        <button class="btn-option">${currentQuestion.options[3]}</button>`;
    answersButtons.innerHTML = optionList;
    // For loop event listener to ger the chosen option
    for (let button of optionsButtons) {
        button.addEventListener("click", validateAnswer);
    }
}

//This function was partially adapated on GreatStack's video tutorial: https://www.youtube.com/watch?v=PBcqGxrr9g8
function validateAnswer(e) {
    const selectedBtn = e.target;
    const selectedOption = selectedBtn.textContent; // Collects the click option button text content
    const correctAnswer = currentQuestion.answer; // Collects the correct answer form the current question object
    const incorrectCounter = document.getElementById('incorrect-counter');
    const correctCounter = document.getElementById('correct-counter');
    /**
     * Compares the selectedBtn button to correctAnswer object. 
     * If is true, the function adds "correct" style to the object; else, it adds the "incorrect" style.
     * Then "else" runs through the array of answer.buttons to identify the correct answer
     * and Add the class "correct" to the correct answer option for further styling.
     * This function was difficult to implement. I thought of refactoring my array to resemble GreaStack' tutorial.
     * When I was about to start that process, a friend developer helped me out with an Array.from part.
     */
    if (selectedOption === correctAnswer) {
        selectedBtn.classList.add("correct");
        score++;
        correctCounter.innerHTML = `<i class="fa-regular fa-circle-check"></i> : ${score}`;
    } else {
        selectedBtn.classList.add("incorrect");
        wrongScore++;
        incorrectCounter.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> : ${wrongScore}`;
        Array.from(answersButtons.children).forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add("correct");
            }
        });
    }

    // Disables all the buttons after selection
    Array.from(answersButtons.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

// Removes the questions and answer buttons based on GreatStack's video tutorial: https://www.youtube.com/watch?v=PBcqGxrr9g8
function removeQuestions() {
    nextButton.style.display = "none";
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

// This function moves the progress bar. It was inspired by W3 School (https://www.w3schools.com/howto/howto_js_progressbar.asp)
function moveBar() {
    let myProgress = document.getElementById("my-progress");
    let progressBar = document.getElementById("progress-bar");
    function movesIf() {
        if (myProgress.style.width === '100%') {
            myProgress.style.display = 'none';
            progressBar.style.display = 'none';
        } else {
            myProgress.style.width = (((currentQuestionIndex + 1) * 10) + "%");
        }
    }
    movesIf();
}

// Moves through the questions of the quizz and reload the DOM if the user want to play again
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < gameQuestions.length) {
        handleNextButton();

    } else {
        location.reload(); // Play Again
    }
});

// Establishes the way to move through the questions of the quizz until reaches the score
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < gameQuestions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
    moveBar(); // Calls the move bar function
}

// Calls the scoreboard
function displayScore() {
    stopStopwatch();
    calcLeaderboardScore();
    addToleaderboard();
    removeQuestions();
    if (score <= 5) {
        questionElement.style.textAlign = 'center';
        questionElement.innerHTML = `You scored ${score} out of 10!<br>
        Best luck next Time!<br>
        Your final score is ${leaderboardScore}`;

    } else if (score <= 6) {
        questionElement.style.textAlign = 'center';
        questionElement.innerHTML = `You scored ${score} out of 10!<br>
        That's very good!<br>
        Your final score is ${leaderboardScore}`;

    } else if (score <= 7) {
        questionElement.style.textAlign = 'center';
        questionElement.innerHTML = `You scored ${score} out of 10!<br>
        You know your Geography!<br>
        Your final score is ${leaderboardScore}`;

    } else if (score <= 9) {
        questionElement.style.textAlign = 'center';
        questionElement.innerHTML = `You scored ${score} out of 10!<br>
        That's impressive, you are a Geography savant!<br>
        Your final score is ${leaderboardScore}`;

    } else {
        questionElement.style.textAlign = 'center';
        questionElement.innerHTML = `You scorded ${score} out of 10!<br>
        You aced the GeoQuiz! You deserve a GeoKiss!<br>
        Your final score is ${leaderboardScore}`;
    }
    nextButton.innerHTML = `<i class="fa-solid fa-circle-play"></i> Play Again`;
    nextButton.style.display = "block";
    leaderboardFinalBtn.style.display = "block";
    scoreBox.style.display = 'none';
}

// Runs the quizz
function runQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    wrongScore = 0;
    nextButton.innerHTML = "Next";
    displayQuestion();
    startStopwatch();
}