
var timeRunning = 20;
var questionNumber = 1;
var questionURL = "https://christopher2012.github.io/files/questions.json"
var questionsJSON;
var isQuizFinnish = false;
var wrongAnswersCount = 0;
var wrongAnswers = [];
var noAnswersCount = 0;
var noAnswers = [];
var correctAnswerCount = 0;
var correctAnswer = [];
var tempTimeLeft;
var buttonTimeout;
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
  $("#questions").slideDown(500, function(){
    $('html, body').animate({
        scrollTop: $("#time-bar").offset().top
    }, 500);
  });

  var questionsArray = questionsJSON.questions;
  questionsJSON.questions = shuffle(questionsArray);

  for(i = 0; i < questionsJSON.questions.length; i++){
      var answersArray =  questionsJSON.questions[i].allAnswers;
      questionsJSON.questions[i].allAnswers = shuffle(answersArray, questionsJSON.questions[i].correctAnswer, i);
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
    noAnswersCount ++;
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
  $("#answers").addClass("disabled-pointer");

  showResults();
}

function showResults(){

  $("#current-quiz-result p:nth-child(2) span").text(correctAnswerCount);
  $("#current-quiz-result p:nth-child(3) span").text(wrongAnswersCount);
  $("#current-quiz-result p:nth-child(4) span").text(noAnswersCount);

  var quizCount = 1;
  if (typeof(Storage) !== "undefined") {
    if(typeof(localStorage.quizcount) !== "undefined"){
      quizCount = Number(localStorage.quizcount) + 1;
      noAnswersCount = Number(localStorage.noanswers) + noAnswersCount;
      wrongAnswersCount = Number(localStorage.wronganswers) + wrongAnswersCount;
      correctAnswerCount = Number(localStorage.correctanswers) + correctAnswerCount;
    } else {
      localStorage.quizcount = 1;
    }

    localStorage.quizcount = quizCount;
    localStorage.correctanswers = correctAnswerCount;
    localStorage.wronganswers = wrongAnswersCount;
    localStorage.noanswers = noAnswersCount;
  }

  $("#all-quiz-result h2 span").text(quizCount);
  $("#all-quiz-result p:nth-child(2) span").text(correctAnswerCount);
  $("#all-quiz-result p:nth-child(3) span").text(wrongAnswersCount);
  $("#all-quiz-result p:nth-child(4) span").text(noAnswersCount);

  $("#results").slideDown(500, function(){
    $('html, body').animate({
        scrollTop: $("#results").offset().top
    }, 500);
  });
}

$(document).ready(function() {

  $.ajaxSetup({ cache: false });
  downloadData();

  $("#answers div button").click(function(element){

    $("#answers").addClass("disabled-pointer");
    $("#time-bar").stop(true);
    var answerIndex = Number(questionsJSON.questions[questionNumber - 1].correctAnswer);
    var buttonIndex = $("#answers div button").index(this);

    if(buttonIndex == answerIndex){
      correctAnswerCount ++;
      $("#progress-table tbody tr td").eq(questionNumber - 1).css("background", "#b2e0ac");
      $(this).removeClass("btn-primary").addClass("btn-success");
    }else{
      $("#progress-table tbody tr td").eq(questionNumber - 1).css("background", "#ce9292");
      $(this).removeClass("btn-primary").addClass("btn-danger");
      $("#answers div:nth-child(" + (answerIndex + 1) + ") button").removeClass("btn-primary").addClass("btn-success");
      wrongAnswers[questionNumber - 1] = buttonIndex;
      wrongAnswersCount ++;
    }

    beforeNextQuestion();
    if(questionNumber <= questionsCount){
      setTimeout(function(){
        goToQuestion(questionNumber - 1);
      }, 1500);
    } else {
      setTimeout(finishQuiz, 1500);
    }
  });

  document.getElementById("newQuiz").addEventListener("click", function(){
    location.reload();
  });

  document.getElementById("clearData").addEventListener("click", function(){
    if (typeof(Storage) !== "undefined") {
      localStorage.removeItem("quizcount");
      localStorage.removeItem("correctanswers");
      localStorage.removeItem("wronganswers");
      localStorage.removeItem("noanswers");
      alert("Dane zostały usunięte, rozpocznij nowy quiz!");
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

function shuffle(array, saveIndex = -1, questionIndex = -1) {

  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    if(saveIndex > -1){
      if(currentIndex == saveIndex){
        saveIndex = randomIndex;
        questionsJSON.questions[questionIndex].correctAnswer = randomIndex;
      }else if(randomIndex == saveIndex){
        saveIndex = currentIndex;
        questionsJSON.questions[questionIndex].correctAnswer = currentIndex;
      }
    }
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
