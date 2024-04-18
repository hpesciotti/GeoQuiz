// Set the variables based on elements in the html
const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");
const optionsButtons = document.getElementsByClassName("btn-option");

let allQuestions = [];
// Defines an Array that will play the hole of questions databank in each game.
let gameQuestions = [];
// Defines an Array to used in the radomization of answer options.
let questionOptions = [];
let currentQuestion;
// Scoreboard variable
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", (event) => {
    fetch("assets/data/questions.json")
        .then(res => res.json())
        .then(data => {
            allQuestions = data;
            setGameQuestions(); //temporary
            setQuestionsOptions(); //temporary
            runQuiz(); //temporary
        });
});

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
    } else {
        selectedBtn.classList.add("incorrect");
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
            myProgress.style.display = 'none'
            progressBar.style.display = 'none'
        } else {
            myProgress.style.width = (((currentQuestionIndex + 1) * 10) + "%");
        }
    }
    movesIf();
}

// Moves through the question of the quizz
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < gameQuestions.length) {
        handleNextButton();
    } else {
        runQuiz(); // Play Again
    }
    moveBar() // Calls the move bar function
});

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < gameQuestions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    removeQuestions();
    if (score <= 5) {
        questionElement.innerHTML = `You scored ${score} out of 10!<br>
        Best luck next Time!`
    } else if (score <= 6) {
        questionElement.innerHTML = `You scored ${score} out of 10!<br>
        That's very good!`
    } else if (score <= 7) {
        questionElement.innerHTML = `You scored ${score} out of 10!<br>
        You know your Geography!`

    } else if (score <= 8) {
        questionElement.innerHTML = `You scored ${score} out of 10!<br>
        That's impressive, you area a Geography savant!`

    } else {
        questionElement.innerHTML = `You scorded ${score} out of 10!<br>
        You aced the GeoQuiz! You deserve a GeoKiss!`
    };
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function runQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    displayQuestion();
}
