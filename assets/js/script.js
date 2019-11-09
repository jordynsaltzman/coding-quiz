//declaring variables
 var viewScores = document.getElementById("viewScores");
 var instructions = document.getElementById("instructions");
 var timer = document.getElementById("timer");
 var playerName = document.getElementById("playerName");
 var submitScore = document.getElementById("submitScore");
 var finalScoreIs = document.getElementById("finalScoreIs");
 var mainDiv = document.getElementById("mainDiv");
 var finishQuizDiv = document.getElementById("finishQuizDiv");
 var startQuiz = document.getElementById("startQuiz");
 var rightOrWrong = document.getElementById("rightOrWrong");
 var quizQuestionsDiv = document.getElementById("quizQuestionsDiv");
 var questionTitle = document.getElementById("questionTitle");
 var choiceBtns = document.querySelectorAll(".choices");
 var choice1 = document.getElementById("choice1")
 var choice2 = document.getElementById("choice2")
 var choice3 = document.getElementById("choice3")
 var choice4 = document.getElementById("choice4")

 var questionNumber = 0;
 var quizQuestions = localStorage.getItem("questions");
 var secondsLeft = 60;
 

 quizQuestions = JSON.parse(quizQuestions);
 console.log(quizQuestions);
 

// hide start page elements function
function hideStartPageEl (){
    viewScores.setAttribute("style", "display: none");
    instructions.setAttribute("style", "display: none");
    startQuiz.setAttribute("style", "display: none");
}

// hide quiz elements function
function hideQuizPageEl (){
    timer.setAttribute("style", "display: none");
    mainDiv.setAttribute("style", "display: none");
    viewScores.setAttribute("style", "display: block");
}

// show finish page elements function
function showFinishPage(){
    finishQuizDiv.setAttribute("style", "display: block");
    finalScoreIs.textContent = "Your final score is "+ secondsLeft;
}


//display quiz questions function
function displayQuizQuestions(){
    quizQuestionsDiv.setAttribute("style", "display: block");
    questionTitle.textContent = questions[questionNumber].title;
    choice1.textContent = questions[questionNumber].choices[0];
    choice2.textContent = questions[questionNumber].choices[1];
    choice3.textContent = questions[questionNumber].choices[2];
    choice4.textContent = questions[questionNumber].choices[3];

}


startQuiz.addEventListener("click", function(){
    
    alert("You have 60 seconds to answer 5 questions. Good luck!");
    hideStartPageEl();
    timer.setAttribute("style", "display: block");
    displayQuizQuestions()
    
    secondsLeft = 60;
    timer.textContent = "Time: " + secondsLeft; 
    var timerInterval = setInterval(function() {
      secondsLeft -=1;
      timer.textContent = "Time: " + secondsLeft; 

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Time's up.");
        hideQuizPageEl();
        showFinishPage();
        
      }

      else if(questionNumber === questions.length){
        clearInterval(timerInterval);
        alert("Finito!");
        hideQuizPageEl();
        showFinishPage();
      }
    }, 1000);
});



//function for when user clicks one of the choice buttons
for (var i=0; i<choiceBtns.length; i++){
    choiceBtns[i].addEventListener("click", function(event){

        console.log(questions[questionNumber].answer);
        if (event.target.textContent === questions[questionNumber].answer){
            rightOrWrong.textContent = "Correct!";
            secondsLeft = secondsLeft+10;
        }

        else {
            rightOrWrong.textContent = "Incorrect.";
            secondsLeft = secondsLeft-10;
        }

        questionNumber++
        displayQuizQuestions()
    })
}


//function for submit button
submitScore.addEventListener("click", function(){

    
    localStorage.setItem("player-name", playerName.value);
    scoresList = localStorage.getItem("highscores");
     if (scoresList === null){
         scoresList = [];
     }
     else {
    scoresList = JSON.parse(scoresList);
     }
    scoresList.push([playerName.value, secondsLeft]);
    localStorage.setItem("highscores", JSON.stringify(scoresList));
    window.location.href = "./highscores.html"
    

});

