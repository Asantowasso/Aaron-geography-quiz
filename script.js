var counter = 90;
var answerArr = [];
let score = []
var currentIndex = 0


//I need a start button which activates a timer
// When the user answers a question it goes to the next question
// A running timer that incurs a penalty when an incorrect answer is given
// When the game is over I can enter my initals

var timerEl = document.getElementById("timer");
const quizQuestionsContainer = document.getElementById("question-container");
var correctAnswercontainer = document.getElementById("correct-answers");
var startcontainer = document.getElementById("start-container");
//answers



//A list of my questions
var quizQuestionsarr = [
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
  }, 90,000);




  startcontainer.classList.add("hidden");
  displayQuestion() 
}
//var currentIndex = 0
//Add fuctionallity to the questions
function displayQuestion() {
  var currentQObj = quizQuestionsarr[currentIndex]
    quizQuestionsContainer.innerHTML = "";    
    var h1El = document.createElement("p");
    h1El.textContent = currentQObj.question;    
    quizQuestionsContainer.append(h1El);

  for (var i = 0; i < currentQObj.answers.length; i++) {
    var h2El = document.createElement("button");
    h2El.textContent = currentQObj.answers[i];
    quizQuestionsContainer.append(h2El);
    h2El.addEventListener('click', checkAnswer)

}
}

function checkAnswer(e){
console.log(e.target)
e.target.name == quizQuestionsarr[currentIndex].answer
}




document.getElementById("start").addEventListener("click", start);
