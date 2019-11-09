var questions = [
    {
        title: "1. Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "numbers", "alerts"],
        answer: "alerts" //D
    },
    {
        title: "2. The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses" //C
    },
    {
        title: "3. What are variables used for in JavaScript Programs?",
        choices: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of the above"],
        answer:  "Storing numbers, dates, or other values" //A
    },
    {
        title:"4. Choose the correct JavaScript syntax to change the content of the following HTML code.",
        choices: ["document.getElement(“hello”).innerHTML=”Hello World”;","document.getElementById(“hello”).innerHTML=”Hello World”","document.getId(“hello”)=”Hello World”;","document.getElementById(“hello”).innerHTML=Hello World;"],
        answer: "document.getElementById(“hello”).innerHTML=”Hello World”" //B
    },
    {
        title:"5. What is the correct syntax for referring to an external script called “script.js”?",
        choices: ["<script src=”script.js”>","<script href=”script.js”>","<script ref=”script.js”>","<script name=”script.js”>"],
        answer: "<script src=”script.js”>" //A
    }

  ];

  localStorage.setItem("questions", JSON.stringify(questions));

