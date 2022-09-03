//I need a start button which activates a timer
// When the user answers a question it goes to the next question
// A running timer that incurs a penalty when an incorrect answer is given
// When the game is over I can enter my initals
var timerEl = document.getElementById("timer")
var answers = ["British Columbia", "Rome", "Cambodia", "The Amazon", "China" ]

function start () {
    var randomIndex = Math.floor(Math.random() * answers.length);

    var chosenAwnser = answers [randomIndex];
    var givenAnswer = ""
    var timeLeft= 10;

startTimer();
}

function startTimer(){
var counter = 10;
counter--;
 var timer = setInterval(function() {  
timerEl.textContent = counter;

}, 1000);

}

document.getElementById("start").addEventListener
("click", start)