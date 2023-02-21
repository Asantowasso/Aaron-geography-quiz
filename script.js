//I need to render a start button, a start screen, a place for the user to enter their initials, a highscore, a container for the questions and a place to store scores
var startButton = document.getElementById("start-button");
var intro = document.getElementById("into");
var initials = document.getElementById("initials");
var highscore = document.getElementById("highscore");
var questionContainer = document.getElementById("question-container");
var scoresChart = document.getElementById("scores");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var score = 0;
var qIndex = 0;


const Questions = [
  {
    q: "What is the westernmost province of Canada?",
    o: ["Alberta", "Ontario", "British Columbia", "Quebec"],

    a: "British Columbia",
  },
  {
    q: "What country is Angkor Wat located in ",
    o: ["Vietnam", "Nepal", "India", "Cambodia"],

    a: "Cambodia",
  },
  {
    q: "How Many islands make up Hawaii",
    o: ["120", "12", "137", "86"],

    a: "137",
  },

  {
    q: "How many continents are there",
    o: ["8", "7", "11", "5"],

    a: "7",
  },

  {
    id: 4,
    q: "What is the capital of Japan",
    o: ["Tokyo", "Osaka", "Kyoto", "Kobe"],

    a: "Tokyo",
  },
];


//Content needs to be hidden upon load
c1.style.display = "none"
c2.style.display = "none"
c3.style.display = "none"
c4.style.display = "none"
document.getElementById("initials").style.display = "none";
document.getElementById("enter").style.display = "none";

// Set start
function start() {
  c1.style.display = "";
  c2.style.display = "";
  c3.style.display = "";
  c4.style.display = "";
  cycle(0);
}

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  // Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  var selected = "";

  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
  });

  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
  });
}

if (start) {
  iterate("0");
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
  }
});
