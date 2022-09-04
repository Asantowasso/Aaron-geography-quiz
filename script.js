//I need a start button which activates a timer
// When the user answers a question it goes to the next question
// A running timer that incurs a penalty when an incorrect answer is given
// When the game is over I can enter my initals
var answers = ["British Columbia", "Rome", "Cambodia", "The Amazon", "China" ]
var timerEl = document.getElementById("timer")
function start (startTimer) {
    
    var counter = 15;


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