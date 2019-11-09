//declaring variables
 var viewScores = document.getElementById("viewScores");
 var instructions = document.getElementById("instructions");
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

 quizQuestions = JSON.parse(quizQuestions);
 console.log(quizQuestions);
 


// hide elements function
function hideStartPageEl (){
    viewScores.setAttribute("style", "display: none");
    instructions.setAttribute("style", "display: none");
    startQuiz.setAttribute("style", "display: none");
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


//function for when user clicks one of the choice buttons
for (var i=0; i<choiceBtns.length; i++){
    choiceBtns[i].addEventListener("click", function(event){

        console.log(questions[questionNumber].answer);
        if (event.target.textContent === questions[questionNumber].answer){
            rightOrWrong.textContent = "Correct!";
        }

        else {
            rightOrWrong.textContent = "Incorrect.";
        }
    })
}


$("#startQuiz").on("click", function(){
    
    alert("You have 75 seconds to answer 5 questions. Good luck!");
    hideStartPageEl();
    // timeFunction();
    displayQuizQuestions()
      
        
    

});



var secondsLeft = 75;
    var timerInterval = setInterval(function() {
      secondsLeft -=1;
      $("#time").text(secondsLeft);

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        $("#time").text("Time is up.");
      }
  
    }, 1000);



//If user selects right answer, score goes up by 1
//and the next question in the array appears

//Otherwise, user clicks wrong, time does down by 5 seconds
//and the next question appears

//When last question has been answered OR when time = 0 
//display end screen with score
//and allow user to enter initials in a form

//when user clicks, "Submit", save score and initials to localStorage
//and redirect to the highscore page

//On highscore page
//display high scores
//"clear highscores" button should clear all data
//"go back" button should redirect to the homepage
