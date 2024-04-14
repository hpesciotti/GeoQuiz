let allQuestions = [
    {
        question: "There has been always a notion that the world was made up of five oceans. However, according to the most recent classifications, there are only three oceans in the world. Choose the alternative that correctly indicates their respective names:",
        answer: "Pacific, Atlantic and Indian",
        options: [
            "Arctic, Indian and Pacific",
            "Antarctic, Atlantic and Indian",
            "Pacific, Atlantic and Indian",
            "Arctic, Antarctic  and Atlantic"
        ]
    },
    {
        question: "What continent is the only one to span all four hemispheres?",
        answer: "Russia",
        options: [
            "Turkey",
            "Mongolia",
            "United States of America",
            "Russia"
        ]
    },
    {
        question: "For an area to be considered a desert, what volume of rain must it receive a year?",
        answer: "Less than 100mm per year",
        options: [
            "Less than 250mm per year",
            "More than 2000mm per year",
            "Less than 100mm per year",
            "More than 500mm per year"
        ]
    },
    {
        question: "Grand Canyon's Rock Layers are predominantly formed by what type of rocks?",
        answer: "Sedimentary rocks",
        options: [
            "Igneous rocks",
            "Sedimentary rocks",
            "Metamorfic Rocks",
            "Volcanic Rocks",
        ]
    },
    {
        question: "Dublin North is located at what margin of the Liffey river?",
        answer: "Left margin",
        options: [
            "Right margin",
            "Left margin",
            "Southern margin",
            "Western margin margin"
        ]
    },
    {
        question: "What percentage of the world's water do rivers and lakes hold?",
        answer: "9%",
        options: [
            "1%",
            "15%",
            "9%",
            "35%"
        ]
    }
]



// Set the variables based on elements in the html
const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");
const optionButton = document.getElementsByClass("btn-option")

// Defines an Array that will play the hole of questions databank in each game.
let gameQuestions = []
// Defines an Array to used in the radomization of answer options.
let questionOptions = []
let currentQuestion;
// Scoreboard variable
let currentQuestionIndex = 0;
let score = 0;

/**
 * This function generates the playable questions.
 * It takes "n" questions from the databank of questions((let i = 0; i < "n"; i++)), variable "allQuestions"
 * and returns/pushes an array of playable questions to the variable "gameQuestions".
 * These function was built inpired by this post: https://stackoverflow.com/questions/52763765/push-3-random-names-into-a-new-array
 */
function setGameQuestions() {
    ;
    for (let i = 0; i < 3; i++) {
        let randomInt = Math.round(Math.random() * (allQuestions.length - 1));
        gameQuestions.push(allQuestions[randomInt]);
        allQuestions.splice(randomInt, 1);
    }
    return gameQuestions;
}
setGameQuestions();


/**
 * This function shuffles the answer options for each question from the gameQuestions array.
 * It is uses Durstenfeld shuffle algorithm.
 * These function was built inpired by this post: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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
setQuestionsOptions();

// Run the Quiz and execute the displayQuestion function
function runQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    displayQuestion();
}

/**
 * This function gets the gameQuestions and establishes a number for each question.
 * Then the randomized questions area displayed. The answer options are also displayed
 * based on their array position.
 */
function displayQuestion() {
    // This section of the function was based on GreatStack's video tutorial: https://www.youtube.com/watch?v=PBcqGxrr9g8
    let currentQuestion = gameQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // The get answer code was based on Codehal's video tutorial: https://www.youtube.com/watch?v=Vp8x8-reqZA
    let optionList = `<button class="btn-option"> a) ${currentQuestion.options[0]}</button>
        <button class="btn-option"> b) ${currentQuestion.options[1]}</button>
        <button class="btn-option"> c) ${currentQuestion.options[2]}</button>
        <button class="btn-option"> d) ${currentQuestion.options[3]}</button>`;

    answersButton.innerHTML = optionList;
}
runQuiz();
