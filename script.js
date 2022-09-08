var counter = 15;
//I need a start button which activates a timer
// When the user answers a question it goes to the next question
// A running timer that incurs a penalty when an incorrect answer is given
// When the game is over I can enter my initals
var correctAnswerarr = [
  "British Columbia",
  "Rome",
  "Cambodia",
  "The Amazon",
  "China",
];

var incorrectAnswer = [
  "Quebec",
  "Ontario",
  "Newfoundland and Labrador",
  "Naples",
  "Turin",
  "Tyre",
  "India",
  "Vietname",
  "Laos",
  "The Nile",
  "The Po River",
  "The Colorado",
  "Indonesia",
  "Nigeria",
  "Pakistan",
];
var timerEl = document.getElementById("timer");
const quizQuestionsContainer = document.getElementById("question-container");
var correctAnswercontainer = document.getElementById("correct-answers");
var startcontainer = document.getElementById("start-container");
//answers


//A list of my questions
var quizQuestions = [
  {
    question: "What is Canads's westernmost province",
    answers: ["British Columbia", "Quebec", "Newfoundland and Labrador", "Ontartio"],
    answer: 0

    
  },

  {
    question: "What is the capital of Italy",
    answers: ["Naples", "Turin", "Tyre", "Rome"],
    answer: 3
  },
   

  {
    question: "What country is Angkor Wat located in",
    answers: ["Cambodia", "India", "Vietnam", "Laos"],
    answer: 0
  },

  {
    question: "What is the longest river in the world?",
    answers: ["The Nile", "The Amazon", "The Colorado", "The Po River"],
    answer: 1
  },
  {
    question: "What is the most populated country in the world?",
    answers: ["Indonesia","Pakistan", "China","Nigeria"],
    answer: 2
  },
];

//Timer lets user now how much timer they have to answer the question
function start() {
  timerEl.textContent = counter;

  var timer = setInterval(function () {
    counter--;
    timerEl.textContent = counter;

    if (counter === 0) {
      clearInterval(timer);
    }
  }, 1000);

  startcontainer.classList.add("hidden");
  displayQuestion() 
}
//Add fuctionallity to the questions
function displayQuestion() {

  correctAnswercontainer.innerHTML = "";
  for (var i = 0; i < correctAnswerarr.length; i++) {
    var h1El = document.createElement("button");

    h1El.textContent = correctAnswerarr[i];
    correctAnswercontainer.append(h1El);
  }
}

document.getElementById("start").addEventListener("click", start);
