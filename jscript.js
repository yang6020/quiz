
$(document).ready(function() {
  var data;
  $.getJSON('https://raw.githubusercontent.com/redacademy/adp-entrance/master/src/quiz.json?token=Ahegjo4rR8DmvyS447bzcDGK68H_qdswks5bBx-AwA%3D%3D',function (mydata){
    data = mydata;
  });

  var score = 0;
  document.getElementById("score").innerHTML = score;

     $("#firstQuiz").on("click",function(){
      $(".start-screen").css("display","none");
      $(".quiz-screen").css("display","block");
      startQuiz(0,false);
     })

     $("#secondQuiz").on("click",function(){
       $(".start-screen").css("display","none");
       $(".quiz-screen").css("display","block");
       startQuiz(1,false);
     })

  var questionIndex = 0;

  function prepData(num){
  var questionList = [];
  for(i = 0; i < data.quizzes[num].questions.length; i++) {
   questionList.push(data.quizzes[num].questions[i].question)
  }
  return questionList;
  }

 function startQuiz(num,questionList){
   if(!questionList){
     questionList = prepData(num);
     startQuiz(num,questionList);
   }
      if(questionIndex < questionList.length){
        document.getElementById("questionText").innerHTML = questionList[questionIndex];
        let answerObjectList =[];
        for(j = 0; j < data.quizzes[num].questions[questionIndex].answers.length; j++){
          answerObjectList.push(data.quizzes[num].questions[questionIndex].answers[j])
        }
        let answerList =[];
        for(k = 0; k < answerObjectList.length; k++){
          answerList.push(answerObjectList[k].content)
        }
        document.getElementById("answerOne").innerHTML = answerList[0];
        document.getElementById("answerTwo").innerHTML = answerList[1];
        document.getElementById("answerThree").innerHTML =answerList[2];
        document.getElementById("answerFour").innerHTML = answerList[3];

        $("#answerOne").off().on("click",function(){
            if(answerObjectList[0].value){
              score++;
              document.getElementById("score").innerHTML = score;
              questionIndex++;
              startQuiz(num);
            }
          else{
            questionIndex++;
          startQuiz(num);
        }})

        $("#answerTwo").off().on("click",function(){
            if(answerObjectList[1].value){
              score++;
              document.getElementById("score").innerHTML = score;
              questionIndex++;
              startQuiz(num);
            }
          else{
            questionIndex++;
        startQuiz(num);
        }})

          $("#answerThree").off().on("click",function(){
            if(answerObjectList[2].value){
              score++;
              document.getElementById("score").innerHTML = score;
              questionIndex++;
              startQuiz(num);
            }
          else{
            questionIndex++;
          startQuiz(num);
          }})


          $("#answerFour").off().on("click",function(){
            if(answerObjectList[3].value){
              score++;
              document.getElementById("score").innerHTML = score;
              questionIndex++;
              startQuiz(num);
            }
          else{
            questionIndex++;
          startQuiz(num);
          }})

         }
        else {
            document.getElementById("score2").innerHTML = score;
            resultText();
            endGame();
          }


    $("#restartButton").on("click",function(){
      window.location.reload();
    })

  function endGame(){
      $(".quiz-screen").css("display","none");
      $(".end-screen").css("display","block");
  }

  function resultText(){
  var result = "";
  if (score >= 0.5 * data.quizzes[0].questions.length  ){
     result = "CONGRATULATIONS!"}
    else{
     result = "GAME OVER"
    }
  document.getElementById("result").innerHTML = result;
  }
}
}
);
