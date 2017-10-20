var questionsCount = 20;
var timeRunning = 20;
var questionNumber = 1;
var questionURL = "https://christopher2012.github.io/questions.json"
var questionsJSON;
var isQuizFinnish = false;

$.getJSON('https://christopher2012.github.io/questions.json', function(data) {
    questionsJSON = data;
    $("#type-quiz").removeClass("disabled");
});

$(document).ready(function() {


  $("#type-quiz div div button").click(function(){
    $("#type-quiz").slideUp();
    $("#questions").slideDown();

    questionsCount = questionsJSON.questions.length;

    for (i = 0; i < questionsCount; i++) {
      var num = (Number(i) + 1)
      if (num < 10)
        num = "0" + num;
      var node = "<td>" + num + "</td>";
      $("#progress-table tr").append(node);
    }




    $("#answers div button span:nth-child(2)").each(function(index){

    });

    animateProgressBar();
    updateQuestion();
  });


  function animateProgressBar(){
    $("#time-bar div:first-child").css("animation-name", "progressBar");
    $("#time-bar div:first-child").css("animation-duration", "20s");
    $("#time-bar div:first-child").css("animation-timing-function", "linear");
  };

  $("#answers div button").click(function(element){

    $("#answers").addClass("disabled-pointer");
    $("#time-bar").stop(true);
    var answerIndex = questionsJSON.questions[questionNumber - 1].correctAnswer;

    if($("#answers div button").index(this) == answerIndex){
      $("#progress-table tbody tr td").eq(questionNumber - 1).css("background", "green");
      $(this).removeClass("btn-primary").addClass("btn-success");

    }else{
      $("#progress-table tbody tr td").eq(questionNumber - 1).css("background", "red");
      $(this).removeClass("btn-primary").addClass("btn-danger");
      $("#answers div:nth-child(" + (answerIndex + 1) + ") button").removeClass("btn-primary").addClass("btn-success");
    }

    if(questionNumber < questionsCount){
      questionNumber++;
      setTimeout(updateQuestion, 1500);
    }else{
      finishQuiz();
    }
  });

});

function goToQuestion(index){
  $("#question h2").text("Pytanie " + (index + 1));
  $("#question p").text(questionsJSON.questions[index].question);
  $("#answers div button span:nth-child(2)").each(function(index2){
    $(this).text(questionsJSON.questions[index].allAnswers[index2]);
  });

  $("#answers div button").removeClass("btn-success btn-danger").addClass("btn-primary");
  if(isQuizFinnish){
    var correctAnswer = questionsJSON.questions[index].correctAnswer;
    $("#answers div:nth-child(" + (correctAnswer + 1) + ") button").removeClass("btn-primary").addClass("btn-success");
  }

}

function finishQuiz(){
  isQuizFinnish = true;

  $("#progress-table tbody tr td").click(function(element){
    goToQuestion($("#progress-table tbody tr td").index(this));
  });

  $("#questions div.time-progress").slideUp();
  $("#results").slideDown();
  $("#answers").addClass("disabled-pointer");
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


function updateQuestion(){

  $("#answers").removeClass("disabled-pointer");
  $("#answers div button").removeClass("btn-success btn-danger").addClass("btn-primary");

  $("#question h2").text("Pytanie " + questionNumber);
  $("#question p").text(questionsJSON.questions[questionNumber - 1].question);

  var questionsArray =  questionsJSON.questions[questionNumber - 1].allAnswers;

  questionsJSON.questions[questionNumber - 1].allAnswers = shuffle(questionsArray);

  $("#answers div button span:nth-child(2)").each(function(index){
    $(this).text(questionsJSON.questions[questionNumber - 1].allAnswers[index]);
  });
}

function progressBar(timeleft, timetotal, $element){
  var progressBarWidth = timeleft * $element.width() / timetotal;
  //$element.find("div:first-child").css("width", progressBarWidth);

  $element.find("div:first-child").animate({width: progressBarWidth}, timeleft == timetotal ? 0 : 1000, "linear");
  $("#time-bar label").html(timeleft + " s");
  if(timeleft == 10)
    $("#time-bar div:first-child").css("background", "#efde5f")
  if(timeleft ==5)
    $("#time-bar div:first-child").css("background", "#f26363")

  if(timeleft > 0){
    setTimeout(function(){
      progressBar(timeleft - 1, timetotal, $element);
    }, 1000);
  }
}

//var xhttp = new XMLHttpRequest();
//xhttp.open("GET", "https://christopher2012.github.io/questions.json", true);
//xhttp.setRequestHeader("Content-type", "application/json");
//xhttp.send();
//console.log(xhttp.responseText);
//var response = JSON.parse(xhttp.responseText);

//$("#time-bar div").addClass("progress-bar-animation");
$(function(){
    $.getJSON('https://christopher2012.github.io/questions.json', function(data) {
        console.log(data);
    });
});
