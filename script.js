//I need to render a start button, a start screen, a place for the user to enter their initials, a highscore, a container for the questions and a place to store scores

//Functions will be needed to build the quiz, show the results and bind it all together





// An array for the questions
const myQuestions = [
  {
    question: "What is the westernmost province in Canada?",
    answers: {
      a: "British Columbia",
      b: "Alberta",
      c: "Nova Scotia",
    },
    correctAnswer: "a",
  },

  {
    question: "Where is Angkor Wat located",
    answers: {
      a: "Vietnam",
      b: "Cambodia",
      c: "india",
    },
    correctAnswer: "b",
  },

  {
    question: "What is the Capital of Germany",
    answers: {
      a: "Hamburg",
      b: "Dresden",
      c: "Berlin",
    },
    correctAnswer: "c",
  },
];

// A function that will create our quiz
function buildQuiz() {
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="slide">
      <div class"question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>
        </div>`
    );
  }
);

quizContainer.innerHTML = output.join('');
}

// A function to display our results
function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // When the user answers correctly
    if (userAnswer === currentQuestion.correctAnswer) {
      // We will increase the number of question answered correctly
      numCorrect++;

      //Color the answers
      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      //for the wrong answer
      answerContainers[questionNumber].style.color = "red";
    }
    });
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  

    function showSlide(n){
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block'
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block'
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }

    }

    function showNextSlide() {
      showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }


    const quizContainer = document.getElementById("quiz");

    const resultsContainer = document.getElementById("results");
    
    const submitButton = document.getElementById("submit");
    


//A function to create the quiz
buildQuiz();

const previousButton = document.getElementById("previous");

const nextButton = document.getElementById("next")

const slides = document.querySelectorAll(".slide")

let currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide)
nextButton.addEventListener("click", showNextSlide)


