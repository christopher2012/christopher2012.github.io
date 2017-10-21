var questionsCount = 20;
var timeRunning = 5;
var questionNumber = 1;
var questionURL = "https://christopher2012.github.io/files/questions.json"
var questionsJSON;
var isQuizFinnish = false;
var wrongAnswers = [];
var noAnswers = [];
var tempTimeLeft;
var buttonTimeout;
var labelTimeout;
var labelTimeInterval;

var tableColorRed = "";
var tableColorGreen = "";
var tableColorGrey = "";

function downloadData(){
  $.getJSON(questionURL, function(data) {
      questionsJSON = data;
      setTimeout(function(){
        generateQuizSelect();
      }, 1000);
  });
}

function generateQuizSelect(){
  $("#loading-data").slideUp();
  $("#type-quiz").slideDown();
  $("#type-quiz div h2").text(questionsJSON.quizName);

  for(i = 0; i < questionsJSON.quiz.length; i++){
    var appendString = "";
    appendString += "<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\" align=\"center\">"
    appendString += "<button class=\"btn btn-primary\">" + questionsJSON.quiz[i].type + "</button>"
    appendString += "</div>"
    $("#type-quiz div:first-child").append(appendString);
  }

  $("#type-quiz div div button").click(function(){
    questionsJSON = questionsJSON.quiz[$("#type-quiz div div button").index(this)];
    startQuiz();
  });
}

function startQuiz(){

  questionsCount = questionsJSON.questions.length;
  for (i = 0; i < questionsCount; i++) {
    var num = (Number(i) + 1)
    if (num < 10)
      num = "0" + num;
    var node = "<td>" + num + "</td>";
    $("#progress-table tr").append(node);
  }

  $("#questions div h1").text(questionsJSON.type);
  $("#type-quiz").slideUp();
  $("#questions").slideDown();

  var questionsArray = questionsJSON.questions;
  questionsJSON.questions = shuffle(questionsArray);

  for(i = 0; i < questionsJSON.questions.length; i++){
      var answersArray =  questionsJSON.questions[i].allAnswers;
      questionsJSON.questions[i].allAnswers = shuffle(answersArray);
  }

  goToQuestion(questionNumber - 1);
}


function animateProgressBar(){
  $("#time-bar div:first-child").css("animation-name", "progressBar");
  $("#time-bar div:first-child").css("animation-duration", timeRunning + "s");
  $("#time-bar div:first-child").css("animation-timing-function", "linear");
  tempTimeLeft = timeRunning;
  timeLabelUpdate();
  labelTimeInterval = setInterval(function(){
    timeLabelUpdate();
  }, 1000);
};

function timeLabelUpdate(){
  if(tempTimeLeft > 0){
    $("#time-counter label").text(tempTimeLeft + " s");
    tempTimeLeft--;
  }else{
    $("#progress-table tbody tr td").eq(questionNumber - 1).css("background", "#c6c2c2");
    beforeNextQuestion();
    if(questionNumber <= questionsCount){
      setTimeout(function(){
        goToQuestion(questionNumber - 1);
      }, 100);
    } else {
      finishQuiz();
    }
  }
}

function finishQuiz(){
  isQuizFinnish = true;

  $("#answers div button").removeClass("btn-success btn-danger").addClass("btn-primary");

  $("#progress-table tbody tr td").click(function(element){
    goToQuestion($("#progress-table tbody tr td").index(this));
  });

  $("#questions div.time-progress").slideUp();
  $("#results").slideDown();
  $("#answers").addClass("disabled-pointer");
}

$(document).ready(function() {
  downloadData();

  $("#answers div button").click(function(element){

    $("#answers").addClass("disabled-pointer");
    $("#time-bar").stop(true);
    var answerIndex = Number(questionsJSON.questions[questionNumber - 1].correctAnswer);
    var buttonIndex = $("#answers div button").index(this);

    if(buttonIndex == answerIndex){
      $("#progress-table tbody tr td").eq(questionNumber - 1).css("background", "#b2e0ac");
      $(this).removeClass("btn-primary").addClass("btn-success");
    }else{
      $("#progress-table tbody tr td").eq(questionNumber - 1).css("background", "#ce9292");
      $(this).removeClass("btn-primary").addClass("btn-danger");
      $("#answers div:nth-child(" + (answerIndex + 1) + ") button").removeClass("btn-primary").addClass("btn-success");
      wrongAnswers[questionNumber - 1] = buttonIndex;
    }

    if(questionNumber < questionsCount){
      beforeNextQuestion();
      setTimeout(function(){
        goToQuestion(questionNumber - 1);
      }, 1500);
    }else{
      beforeNextQuestion();
      setTimeout(finishQuiz, 1500);
    }
  });
});

function beforeNextQuestion(){
  questionNumber++;
  clearInterval(labelTimeInterval);
  $("#time-counter label").text(timeRunning + " s");
  $("#time-bar div:first-child").css("animation-name", "");
  $("#time-bar div:first-child").css("animation-duration", "");
  $("#time-bar div:first-child").css("animation-timing-function", "");
}

function goToQuestion(index){
  $("#question h2").text("Pytanie " + (index + 1));
  $("#question p").text(questionsJSON.questions[index].question);
  $("#answers div button span:nth-child(2)").each(function(index2){
    $(this).text(questionsJSON.questions[index].allAnswers[index2]);
  });

  $("#answers div button").removeClass("btn-success btn-danger").addClass("btn-primary");
  if(isQuizFinnish){
    var correctAnswer = Number(questionsJSON.questions[index].correctAnswer);
    $("#answers div:nth-child(" + (correctAnswer + 1) + ") button").removeClass("btn-primary").addClass("btn-success");
    if(typeof wrongAnswers[index] !==  'undefined'){
      $("#answers div:nth-child(" + (wrongAnswers[index] + 1) + ") button").removeClass("btn-primary").addClass("btn-danger");
    }
  }else{
    $("#answers").removeClass("disabled-pointer");
    animateProgressBar();
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  var correctIndex = Number(questionsJSON.questions[questionNumber - 1].correctAnswer);
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);

    if(correctIndex == currentIndex){
      correctIndex = currentIndex;
      questionsJSON.questions[questionNumber - 1].correctAnswer = correctIndex;
    }

    if(correctIndex == randomIndex){
      correctIndex = randomIndex;
      questionsJSON.questions[questionNumber - 1].correctAnswer = correctIndex;
    }
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
