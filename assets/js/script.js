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
        question: "Certain places on planet Earth are home to more extraordinary biodiversity. Which regions have the most remarkable diversity of fauna and flora?",
        answer: "Tropical forests",
        options: [
            "Tropical forests",
            "Oceans",
            "Deserts",
            "Temperate forests"
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
    },
    {
        "question": "Which of the following events was not related to the Cold War?",
        "answer": "Spanish Civil War",
        "options": [
            "Spanish Civil War",
            "Korean War",
            "Cuban Revolution",
            "Latin American dictatorships"
        ]
    },
    {
        "question": "Which nation did NOT have a socialist government during the Cold War years?",
        "answer": "South Africa",
        "options": [
            "Albania",
            "Poland",
            "Vietnam",
            "South Africa"
        ]
    },
    {
        "question": "Africa is divided into two large regions: North Africa and Sub-Saharan Africa. A sociocultural characteristic of North Africa is:",
        "answer": "The predominant population practices Islam.",
        "options": [
            "The small cultural diversity of the local native groups.",
            "Colonization of the region by Asian countries.",
            "Great social equality among the region's inhabitants.",
            "The predominant population practices Islam."
        ]
    },
    {
        "question": "What is the hottest desert in the world?",
        "answer": "Sahara",
        "options": [
            "Sahara",
            "Atacama",
            "Gobi",
            "Kalahari"
        ]
    },
    {
        "question": "Africa has an expanding demographic landscape. One indicator that explains Africa's population growth is:",
        "answer": "The high fertility rate.",
        "options": [
            "Increasing infant mortality.",
            "Low life expectancy.",
            "The low replacement rate.",
            "The high fertility rate."
        ]
    },
    {
        "question": "The Mid-Atlantic ridge results from what kind of tectonic plate boundaries?",
        "answer": "Divergent boundaries",
        "options": [
            "Divergent boundaries",
            "Convergent boundary",
            "Transform boundary",
            "Subduction zone"
        ]
    },
    {
        "question": "Which tectonic activity formed the Andes Mountains in South America?",
        "answer": "Subduction zone",
        "options": [
            "Subduction zone",
            "Transform boundary",
            "Divergent boundaries",
            "Rift"
        ]
    },
    {
        "question": "Listed below are the countries and their most polluted cities, except:",
        "answer": "Finland - Helsinki",
        "options": [
            "Russia - Dzerzhinsk",
            "Ukraine - Chernobyl",
            "Finland - Helsinki",
            "India - Vapi"
        ]
    },
    {
        "question": "Countries located north of the equator belong to the Northern Hemisphere:",
        "answer": "Northern Hemisphere",
        "options": [
            "Western Hemisphere",
            "Northern Hemisphere",
            "Southern Hemisphere",
            "Eastern Hemisphere"
        ]
    },
    {
        "question": "The continent with the highest concentration of fresh water is:",
        "answer": "America",
        "options": [
            "America",
            "Asia",
            "Oceania",
            "Africa"
        ]
    },
    {
        "question": "What rock outcrops form the important landmark of Giant's Causeway in Northern Ireland?",
        "answer": "Basalt",
        "options": [
            "Diorite",
            "Granite",
            "Marble",
            "Basalt"
        ]
    }
]

// Set the variables based on elements in the html
const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");
const optionsButtons = document.getElementsByClassName("btn-option");

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
setGameQuestions();


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
setQuestionsOptions();

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

// A
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < gameQuestions.length) {
        handleNextButton();
    } else {
        runQuiz();
    }

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
        questionElement.innerHTML = `You scorded ${score} out of 10!
        Best luck next Time!`
    } else if (score <= 6) {
        questionElement.innerHTML = `You scorded ${score} out of 10!
        That's very good!` 
    } else if (score <= 7) {
        questionElement.innerHTML = `You scorded ${score} out of 10!
        You know your Geography!`

    } else if (score <= 8) {
        questionElement.innerHTML = `You scorded ${score} out of 10!
        That's impressive, 
        You area a Geography savant!`

    } else {
        questionElement.innerHTML = `You scorded ${score} out of 10! 
        You aced the GeoQuiz!
        You deserve a GeoKiss!` 
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

runQuiz();
