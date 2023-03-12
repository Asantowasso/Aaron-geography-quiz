//I need to render a start button, a start screen, a place for the user to enter their initials, a highscore, a container for the questions and a place to store scores

const startButton = document.getElementById('start-btn')
const questionContainerElement= document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame(){
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

}

function setNextQuestion() {

}

function selectAnswer() {

}