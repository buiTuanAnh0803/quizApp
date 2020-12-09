var questionShow = document.getElementById("question-text");
var answerShow = document.querySelectorAll(".answer");
var scoreShow = document.getElementById("score");
var submit = document.getElementById("test-submit");
var confirm = document.querySelectorAll(".confirm");
var submitState = false;

var timeShow = {
    hour: document.querySelectorAll(".hour")[0],
    minute: document.querySelectorAll(".minute")[0],
    second: document.querySelectorAll(".second")[0]
}
var durationText = {
    hour: "",
    minute: "",
    second: ""
}
// Add "0" before time if time < 10
if (maxDuration.hour < 10) {
    durationText.hour = "0" + maxDuration.hour;
} else {
    durationText.hour = maxDuration.hour;
}
if (maxDuration.minute < 10) {
    durationText.minute = "0" + maxDuration.minute;
} else {
    durationText.minute = maxDuration.minute;
}
if (maxDuration.second < 10) {
    durationText.second = "0" + maxDuration.second;
} else {
    durationText.second = maxDuration.second;
}

var testTitle = "Bài kiểm tra " + testName;
var testDuration = durationText.hour + ":" + durationText.minute + ":" + durationText.second
document.querySelectorAll(".title")[0].innerText = testTitle;
document.querySelectorAll(".duration")[0].innerHTML = "<span style='color:darkgreen'>Thời gian làm bài: </span>" + testDuration;
var startCount = "";

var currentQuestion = 0;
questionShow.innerText = question[currentQuestion].question;
for (let i = 0; i < answerShow.length; i++) {
    answerShow[i].innerText = question[currentQuestion].answer[i];
}

// ----------------------------- Function Field -----------------------------------

function startTest() {
    var blur = document.querySelectorAll(".blur")[0];
    document.querySelectorAll(".container")[0].removeChild(blur);
    timeStartToEnd();
}

function timeStartToEnd() {
    timeShow.hour.innerText = durationText.hour;
    timeShow.minute.innerText = durationText.minute;
    timeShow.second.innerText = durationText.second;
    startCount = setInterval(
        function () {
            if (Number(durationText.second) > 0) {
                durationText.second = Number(durationText.second) - 1;
            } else {
                if (Number(durationText.minute) > 0) {
                    durationText.minute = Number(durationText.minute) - 1;
                    durationText.second = 59;
                } else {
                    durationText.hour = Number(durationText.hour) - 1;
                    durationText.minute = 59;
                    durationText.second = 59;
                }
            }

            // Add "0" before time if time < 10
            if (Number(durationText.hour) < 10) {
                durationText.hour = "0" + Number(durationText.hour);
            }
            if (Number(durationText.minute) < 10) {
                durationText.minute = "0" + Number(durationText.minute);
            }
            if (Number(durationText.second) < 10) {
                durationText.second = "0" + Number(durationText.second);
            }

            timeShow.hour.innerText = durationText.hour;
            timeShow.minute.innerText = durationText.minute;
            timeShow.second.innerText = durationText.second;
            
            if (durationText.hour == 0 && durationText.minute == 30 && durationText.second == 0) {
                scoreShow.innerText = "You have 30 minutes left. Hurry!";
            }
            if (durationText.hour == 0 && durationText.minute == 10 && durationText.second == 0) {
                scoreShow.innerText = "You have 10 minutes left. It's time for review the answer!";
            }
            if (durationText.hour == 0 && durationText.minute == 0 && durationText.second == 30) {
                scoreShow.innerText = "The test is about to the end!!!";
            }
            if (durationText.hour == 0 && durationText.minute == 0 && durationText.second == 0) {
                alert("Timeout!! The test is finished, your one is being submit, thank you for your attending.");
                clearInterval(startCount);
                submitTest();
            }
        }
        , 1000);
}

function nextQuesion() {
    if (currentQuestion < question.length - 1) {
        currentQuestion++;
    } else {
        currentQuestion = question.length - 1;
    }

    questionShow.innerText = question[currentQuestion].question;
    for (let i = 0; i < answerShow.length; i++) {
        answerShow[i].innerText = question[currentQuestion].answer[i];
    }

    for (let i = 0; i < answerShow.length; i++) {
        answerShow[i].classList.remove("choose");
    }
    if (answerShow[question[currentQuestion].choose] !== undefined) {
        answerShow[question[currentQuestion].choose].classList.add("choose");
    }

    if (submitState) {
        showCorrectAnswer()
    }
}

function prevQuesion() {
    if (currentQuestion > 0) {
        currentQuestion--;
    } else {
        currentQuestion = 0;
    }

    questionShow.innerText = question[currentQuestion].question;
    for (let i = 0; i < answerShow.length; i++) {
        answerShow[i].innerText = question[currentQuestion].answer[i];
    }

    for (let i = 0; i < answerShow.length; i++) {
        answerShow[i].classList.remove("choose");
    }
    if (answerShow[question[currentQuestion].choose] !== undefined) {
        answerShow[question[currentQuestion].choose].classList.add("choose");
    }

    if (submitState) {
        showCorrectAnswer()
    }
}

function chooseAnswer(n) {
    for (let i = 0; i < answerShow.length; i++) {
        answerShow[i].classList.remove("choose");
    }
    if (!answerShow[n].classList.contains("choose")) {
        answerShow[n].classList.add("choose");
    }

    question[currentQuestion].choose = n;
}

function submitPressed() {
    confirm[0].classList.remove("hide");
}

function confirmSubmitTest(choice) {
    if (choice == true) {
        confirm[0].classList.add("hide");
        submitTest();
        clearInterval(startCount);
    } else {
        confirm[0].classList.add("hide");
    }
}

function submitTest() {
    var answerCorrectCount = 0;
    for (let i = 0; i < question.length; i++) {
        if (question[i].choose == question[i].correct) {
            answerCorrectCount++;
        }
    }

    submitState = true;
    confirm[0].classList.add("hide");
    submit.classList.add("hide");
    showScore(answerCorrectCount);
    showCorrectAnswer();
}

function showScore(answerCorrectCount) {
    for (let i = 0; i < answerShow.length; i++) {
        answerShow[i].setAttribute("disabled", "disabled");
        answerShow[i].classList.remove("answer-hover");
    }
    
    scoreShow.innerText = "Bài làm của bạn được " + answerCorrectCount + "/" + question.length + " điểm"
}

function showCorrectAnswer() {
    var currentAnswer = question[currentQuestion].choose;
    var currentCorrect = question[currentQuestion].correct;
    for (let i = 0; i < answerShow.length; i++) {
        answerShow[i].classList.remove("corrected");
        answerShow[i].classList.remove("incorrected");
    }
    if (currentAnswer === currentCorrect) {
        answerShow[currentCorrect].classList.add("corrected");
    } else {
        answerShow[currentCorrect].classList.add("incorrected");
    }
}