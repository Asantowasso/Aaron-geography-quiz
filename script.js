//I need a start button which activates a timer
// When the user answers a question it goes to the next question
// A running timer that incurs a penalty when an incorrect answer is given
// When the game is over I can enter my initals
var correctAnswer = ["British Columbia", "Rome", "Cambodia", "The Amazon", "China" ]

var incorrectAnswer = ["Quebec", "Ontario", "Newfoundland and Labrador", "Naples", "Turin", "Tyre", "India", "Vietname", "Laos","The Nile", "The Po River", "The Colorado", "Indonesia", "Nigeria", "Pakistan" ]
var timerEl = document.getElementById("timer")
const quizQuestionsElement = document.getElementById(quizQuestions)
function startClock (startTimer) {
    
    var counter = 15;


}
//A list of my questions
var quizQuestions = [
{
    question: "What is Canads's westernmost province",
    answers: {
    a: 'Quebec',
    b: 'British Columbia',
    c: 'Ontario',
    d: 'Newfoundland and Labrador'
    },
    correctAnswer: 'b'
},



{
question: "What is the capitol of Italy",
answers: {
a: 'Naples',
b: 'Turin',
c: 'Tyre',
d: 'Rome'
},
correctAnswer: 'd'
},

{
question: "What country is Angkor Wat located in",
answers: {
a: 'Cambodia',
b: 'India',
c: 'Vietnam',
d: 'Laos'
},
correctAnswer: "a"
},

{
question: "What is the longest river in the world?",
answers: {
a: 'The Nile',
b: 'The Po River',
c: 'The Amazon',
d: 'The Colorado'
},
correctAnswer: 'c'
},
{
question: "What is the most populated country in the world?",
answers: {
a: "China",
b: "Indonesia",
c: "Nigeria",
d: "Pakistan"
},
correctAnswer: 'a'
}

]

//Add fuctionallity to the questions
function displayQuestion(quizQuestionsElement) {

}

//Timer lets user now how much timer they have to answer the question
function startTimer(){
var counter = 15;
timerEl.textContent = counter;

var timer = setInterval(function(){
counter--;
timerEl.textContent = counter;

if (counter === 0) {
    clearInterval(timer);
}
}, 1000);





document.getElementById("start").addEventListener
("click", start)}