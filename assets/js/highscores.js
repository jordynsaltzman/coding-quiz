var clearScores = document.getElementById("clearScores");
var tbody = document.querySelector("#tbody");
var scoresList = localStorage.getItem("highscores");
scoresList = JSON.parse(scoresList);

if(scoresList === null){
    scoresList = [];
}

for(var i=0; i<scoresList.length; i++){

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.textContent = scoresList[i][0]; //player name
    td2.textContent = scoresList[i][1]; //score

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
};

//create clear scores button
clearScores.addEventListener("click", function(){
    localStorage.removeItem("highscores");
    tbody.setAttribute("style", "display: none");

});

