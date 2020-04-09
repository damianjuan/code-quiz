
//listen for click to start quiz
document.getElementById("startBtn").addEventListener('click', function () {
    document.getElementById("quizStart").setAttribute("style", "display: none");
    document.getElementById("question1").setAttribute("style", "display: show");
    document.getElementById("timer").setAttribute("style", "display: show");
});

document.getElementById("viewScores").addEventListener('click', function () {
    document.getElementById("quizStart").setAttribute("style", "display: none");
    document.getElementById("scores").setAttribute("style", "display: show");

});

document.getElementById("question1Btns").addEventListener('click', function () {
    document.getElementById("question1").setAttribute("style", "display: none");
    document.getElementById("question2").setAttribute("style", "display: show");

});

document.getElementById("question2").addEventListener('click', function () {
    document.getElementById("question2").setAttribute("style", "display: none");
    document.getElementById("question3").setAttribute("style", "display: show");

});

document.getElementById("question3").addEventListener('click', function () {
    document.getElementById("question3").setAttribute("style", "display: none");
    document.getElementById("question4").setAttribute("style", "display: show");
});

document.getElementById("question4").addEventListener('click', function () {
    document.getElementById("question4").setAttribute("style", "display: none");
    document.getElementById("question5").setAttribute("style", "display: show");
});

document.getElementById("question5").addEventListener('click', function () {
    document.getElementById("question5").setAttribute("style", "display: none");
    document.getElementById("quizOver").setAttribute("style", "display: show");
    document.getElementById("timer").setAttribute("style", "display: none");
    interval = 0;
});

document.getElementById("submitInitials").addEventListener('click', function () {
    console.log(document.getElementById("initials").value);
    document.getElementById("initials");
    document.getElementById("quizOver").setAttribute("style", "display: none");
    document.getElementById("scores").setAttribute("style", "display: show");
});

document.getElementById("retry").addEventListener('click', function () {
    document.getElementById("scores").setAttribute("style", "display: none");
    document.getElementById("quizStart").setAttribute("style", "display: show");
});

document.getElementById("clearScores").addEventListener('click', function () {
    console.log("clear button pressed");
});


function wrong() {
    console.log("wrong choice clicked");
    seconds -= 10;


};

var seconds = 60
var interval = 1000 // needed separate var for interval so can set to 0 when quiz is over to stop timer

function timer() {
    setInterval(function () {
        seconds--;
        console.log(seconds);
        timeToDisplay.textContent = seconds;
    }, interval);
};

var timeToDisplay = document.getElementById("timerDisplay");


