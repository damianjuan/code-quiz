
//listen for click to start quiz
document.getElementById("startBtn").addEventListener('click', function () {
    document.getElementById("quizStart").setAttribute("style", "display: none");
    document.getElementById("question1").setAttribute("style", "display: show");
});

function wrong() {
    console.log("butts")

};

//having trouble with this line i want to know which button i press i tried adding a div for just the buttons in the html. i believe i am just not using the dom correctly to get what i want
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
});

document.getElementById("submitInitials").addEventListener('click', function () {
    console.log(document.getElementById("initials").value);
    document.getElementById("initials").localStorage.setItem("Score", this.val());
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