
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
      startQuizOne();
     })

     $("#secondQuiz").on("click",function(){
       $(".start-screen").css("display","none");
       $(".quiz-screen").css("display","block");
       startQuizTwo();
       })


  var questionIndex = 0;




     function startQuizOne(){
       var questionList = [];
       for(i = 0; i < data.quizzes[0].questions.length; i++) {
        questionList.push(data.quizzes[0].questions[i].question)
       }

       if(questionIndex < data.quizzes[0].questions.length +1 )
       {
       document.getElementById("questionText").innerHTML = questionList[questionIndex];
       let answerObjectList =[];
       for(j = 0; j < data.quizzes[0].questions[questionIndex].answers.length; j++){
         answerObjectList.push(data.quizzes[0].questions[questionIndex].answers[j])
       }

       let answerList =[];
       for(k = 0; k < answerObjectList.length; k++){
         answerList.push(answerObjectList[k].content)
       }
       document.getElementById("answerOne").innerHTML = answerList[0];
       document.getElementById("answerTwo").innerHTML = answerList[1];
       document.getElementById("answerThree").innerHTML =answerList[2];
       document.getElementById("answerFour").innerHTML = answerList[3];

       $("#answerOne").on("click",function(){
         if(answerObjectList[0].value){
           score++;
           document.getElementById("score").innerHTML = score;
           console.log(questionIndex);
           questionIndex++;
           console.log(questionIndex);
           console.log(answerObjectList[0]);
           startQuizOne();
         }
       else{
         console.log(answerObjectList[0].value);
            console.log(questionIndex);
         questionIndex++;
            console.log(questionIndex);
         startQuizOne();
       }})

       $("#answerTwo").on("click",function(){
         if(answerObjectList[1].value){
           score++;
           document.getElementById("score").innerHTML = score;
           questionIndex++;
           startQuizOne();
         }
       else{
         questionIndex++;
         startQuizOne();
       }})

       $("#answerThree").on("click",function(){
         if(answerObjectList[2].value){
           score++;
           document.getElementById("score").innerHTML = score;
           questionIndex++;
           startQuizOne();
         }
       else{
         questionIndex++;
         startQuizOne();
       }})

       $("#answerFour").on("click",function(){
         if(answerObjectList[3].value){
           score++;
           document.getElementById("score").innerHTML = score;
           questionIndex++;
           startQuizOne();
         }
       else{
         questionIndex++;
         startQuizOne();
       }})
      }
     else {
         document.getElementById("score2").innerHTML = score;
         resultText();
         endGame();
       }
   }



        function startQuizTwo(){
          var questionList = [];
          for(i = 0; i < data.quizzes[1].questions.length; i++) {
           questionList.push(data.quizzes[1].questions[i].question)
         }

          if(questionIndex < data.quizzes[1].questions.length + 1)
          {
          document.getElementById("questionText").innerHTML = questionList[questionIndex];
          console.log(questionList[questionIndex]);
          let answerObjectList =[];
          for(j = 0; j < data.quizzes[1].questions[questionIndex].answers.length; j++){
            answerObjectList.push(data.quizzes[1].questions[questionIndex].answers[j])
          }

          let answerList =[];
          for(k = 0; k < answerObjectList.length; k++){
            answerList.push(answerObjectList[k].content)
          }
          document.getElementById("answerOne").innerHTML = answerList[0];
          document.getElementById("answerTwo").innerHTML = answerList[1];
          document.getElementById("answerThree").innerHTML =answerList[2];
          document.getElementById("answerFour").innerHTML = answerList[3];

          $("#answerOne").on("click",function(){
            if(answerObjectList[0].value){
              console.log(score);
              score++;
              document.getElementById("score").innerHTML = score;
              console.log(score);
              questionIndex++;
              startQuizTwo();
            }
          else{
            console.log(score);
            questionIndex++;
          startQuizTwo();
          console.log(score);
          }})

          $("#answerTwo").on("click",function(){
            if(answerObjectList[1].value){
              console.log(score);
              score++;
              document.getElementById("score").innerHTML = score;
              console.log(score);
              questionIndex++;
              startQuizTwo();
            }
          else{
            console.log(score);
            questionIndex++;
          startQuizTwo();
          console.log(score);
          }})

          $("#answerThree").on("click",function(){
            if(answerObjectList[2].value){
              console.log(score);
              score++;
              document.getElementById("score").innerHTML = score;
              console.log(score);
              questionIndex++;
              startQuizTwo();
            }
          else{
            console.log(score);
            questionIndex++;
          startQuizTwo();
          console.log(score);
          }})


          $("#answerFour").on("click",function(){
            if(answerObjectList[3].value){
              console.log(score);
              score++;
              document.getElementById("score").innerHTML = score;
              console.log(score);
              questionIndex++;
              startQuizTwo();
            }
          else{
            console.log(score);
            questionIndex++;
          startQuizTwo();
          console.log(score);
          }})

         }
        else {
            document.getElementById("score2").innerHTML = score;
            resultText();
            endGame();
          }
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
);