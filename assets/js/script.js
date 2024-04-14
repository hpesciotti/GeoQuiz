let allQuestions = [
    {
        question: "There has been always a notion that the world was made up of five oceans. However, according to the most recent classifications, there are only three oceans in the world. Choose the alternative that correctly indicates their respective names:",
        answer: "c) Pacific, Atlantic and Indian",
        options: [
            "a) Arctic, Indian and Pacific",
            "b) Antarctic, Atlantic and Indian",
            "c) Pacific, Atlantic and Indian",
            "d) Arctic, Antarctic  and Atlantic"
        ]
    },
    {
        question: "What continent is the only one to span all four hemispheres?",
        answer: "d) Russia",
        options: [
            "a) Turkey",
            "b) Mongolia",
            "c) United States of America",
            "d) Russia"
        ]
    },
    {
        question: "For an area to be considered a desert, what volume of rain must it receive a year?",
        answer: "c) Less than 100mm per year",
        options: [
            "a) Less than 250mm per year",
            "b) More than 2000mm per year",
            "c) Less than 100mm per year",
            "d) More than 500mm per year"
        ]
    },
    {
        question: "Grand Canyon's Rock Layers are predominantly formed by what type of rocks?",
        answer: "b) Sedimentary rocks",
        options: [
            "a) Igneous rocks",
            "b) Sedimentary rocks",
            "c) Metamorfic Rocks",
            "d) Volcanic Rocks",
        ]
    },
    {
        question: "Dublin North is located at what margin of the Liffey river?",
        answer: "b) Left margin",
        options: [
            "a) Right margin",
            "b) Left margin",
            "c) Southern margin",
            "d) Western margin margin"
        ]
    },
    {
        question: "What percentage of the world's water do rivers and lakes hold?",
        answer: "c) 9%",
        options: [
            "a) 1%",
            "b) 15%",
            "c) 9%",
            "d) 35%"
        ]
    }
]

// Set the variables based on elements in the html
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");


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

console.log(gameQuestions);