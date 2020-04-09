var end = false;
var scoreList = document.querySelector(".score-list");
var userInput = document.querySelector("#initials");


var users = [];
var userScores = [];



function renderScores() {
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var score = userScores[i];
        var li = document.createElement("li");
        li.textContent = user;
        scoreList.appendChild(li);
    };
};


function storeUserAndScore() {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userScores", JSON.stringify(userScores));
}

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

document.getElementById("question2Btns").addEventListener('click', function () {
    document.getElementById("question2").setAttribute("style", "display: none");
    document.getElementById("question3").setAttribute("style", "display: show");

});

document.getElementById("question3Btns").addEventListener('click', function () {
    document.getElementById("question3").setAttribute("style", "display: none");
    document.getElementById("question4").setAttribute("style", "display: show");
});

document.getElementById("question4Btns").addEventListener('click', function () {
    document.getElementById("question4").setAttribute("style", "display: none");
    document.getElementById("question5").setAttribute("style", "display: show");
});

document.getElementById("question5Btns").addEventListener('click', function () {
    document.getElementById("question5").setAttribute("style", "display: none");
    document.getElementById("quizOver").setAttribute("style", "display: show");
    document.getElementById("timer").setAttribute("style", "display: none");
    end = true;
    console.log("final score: ", seconds);

});

document.getElementById("submitInitials").addEventListener('click', function () {
    console.log(document.getElementById("initials").value);
    document.getElementById("initials");
    document.getElementById("quizOver").setAttribute("style", "display: none");
    document.getElementById("scores").setAttribute("style", "display: show");

    var userText = userInput.value.trim();
    var scoreEntry = seconds;
    if (userText === "") {
        return;
    }

    users.push(userText);
    userInput.value = "";

    userScores.push(scoreEntry);
    userInput.value = "";


    storeUserAndScore();
    renderScores();


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


function timer() {
    var interval = setInterval(function () {
        if (end === true) {
            clearInterval(interval);
        }
        seconds--;
        console.log(seconds);
        timeToDisplay.textContent = seconds;
    }, 1000);
};


var timeToDisplay = document.getElementById("timerDisplay");


