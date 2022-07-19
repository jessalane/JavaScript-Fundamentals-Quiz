var startQuiz = document.getElementById("startQuiz");
var nextQ = document.getElementById("next");
var i = 0;
var elem = document.querySelectorAll('input[type=checkbox]');
var timeLeft = 240;
var currentScore = 0;
var storedScore = [];
var scoreSub = document.querySelector("#scoreSub");

// loading score from local storage 
document.querySelector("#highest").innerHTML = "previous scores: " + window.localStorage.getItem("storedScore");

// Getting the options
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');

const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

// Getting the question
const question = document.getElementById("quizQuestion");

// Getting the timer
var QTimer = document.getElementById('timer');

// Getting the score
var QScore = document.getElementById('score');

// Getting the highest score
var QHighest = document.getElementById('highest');

// starting the timer, loading the first question
startQuiz.onclick = function(event) {
    document.getElementById('questionsForm').style.display = 'block';
    document.getElementById('startQuiz').style.display = 'none';
    document.getElementById('quizQuestion').style.visibility = 'visible';

    checkQuestions();
    startTimer();
    event.stopPropagation();
}

function startTimer() {
    // turning the score into a variable I can edit
    QScore.textContent = "current score: " + currentScore;

    // setting timer code
    var timeInterval = setInterval(function () {
    // subtracting time while the function runs
    timeLeft--;

    // adding the timer and string to the html
    QTimer.textContent = timeLeft + " seconds left";

    // clears the timer when it reaches 0
    if(timeLeft < 0) {
        clearInterval(timeInterval);
        QTimer.textContent = "Time is up!";
    }
    }, 1000);
}

// makes correct class appear
function correct() {
    document.querySelector('.correct').style.display = 'block';
    document.querySelector('.incorrect').style.display = 'none';
}

// makes incorrrect class appear
function incorrect() {
    document.querySelector('.incorrect').style.display = 'block';
    document.querySelector('.correct').style.display = 'none';
}

// Questions array with their answers
const Questions = [{
    id: 0,
    q: "How do you set a variable that can't be updated?",
    a: [{ text: "let", isCorrect: false },
        { text: "var", isCorrect: false },
        { text: "const", isCorrect: true },
        { text: "none of the above", isCorrect: false }
    ]
},
{
    id: 1,
    q: "Which is the correct syntax to select an ID called header?",
    a: [{ text: "document.getElementById('header');", isCorrect: true },
        { text: "document.querySelect('header');", isCorrect: false },
        { text: "document.getElementById('#header');", isCorrect: false },
        { text: "document.querySelectorAll('header');", isCorrect: false }
    ]
},
{
    id: 2,
    q: "How would you change the style of #Sidebar, so the visibility is hidden?",
    a: [{ text: "document.querySelect('questionsForm').style.visibility = 'hidden';", isCorrect: false },
        { text: "document.querySelector('questionsForm').style.visibility = 'hidden';", isCorrect: false },
        { text: "document.getElementById('#sidebar').style.display = 'block';", isCorrect: false },
        { text: "document.getElementById('Sidebar').style.visibility = 'hidden';", isCorrect: true }
    ]
},
{
    id: 3,
    q: "How would you declare an array called Numbers",
    a: [{ text: "var Numbers = ['1', '2', '3'];", isCorrect: true },
        { text: "var Numbers ['1', '2', '3'];", isCorrect: false },
        { text: "Numbers = ['1', '2', '3'];", isCorrect: false },
        { text: "const Numbers ['1', '2', '3'];", isCorrect: false }
    ]
},
{
    id: 4,
    q: "How do you call the second object in an array named Numbers",
    a: [{ text: "Numbers(1)", isCorrect: false },
        { text: "Numbers[2]", isCorrect: false },
        { text: "Numbers[1]", isCorrect: true },
        { text: "Numbers.(2)", isCorrect: false }
    ]
},
{
    id: 5,
    q: "How do you compare a string and number variable if you want them to be the same type?",
    a: [{ text: "===", isCorrect: false },
        { text: "==", isCorrect: true },
        { text: "=", isCorrect: false },
        { text: "none of the above", isCorrect: false }
    ]
},
{
    id: 6,
    q: "How do you concatinate two variables?",
    a: [{ text: "var1 + var2", isCorrect: true },
        { text: "'var1 + var2'", isCorrect: false },
        { text: "'var1' + 'var2'", isCorrect: false },
        { text: "'var1 var2'", isCorrect: false }
    ]
},
{
    id: 7,
    q: "How do you list two conditions in an if statement",
    a: [{ text: "if (condition one && condition two) {}", isCorrect: true },
        { text: "if (condition one & condition two) {}", isCorrect: false },
        { text: "if (condition one) && (condition two) {}", isCorrect: false },
        { text: "if (condition one) & (condition two) {}", isCorrect: false }
    ]
},
{
    id: 8,
    q: "How do you set an item called name to local storage?",
    a: [{ text: "localStorage.setItem('name');", isCorrect: false },
        { text: "localStorage.setItem(name);", isCorrect: false },
        { text: "localStorage.setItem('name', name);", isCorrect: true },
        { text: "localStorage.setItem: 'name';", isCorrect: false }
    ]
},
{
    id: 9,
    q: "How would you get the numerical value for how many objects are in an array called Cars?",
    a: [{ text: "Cars.objects", isCorrect: false },
        { text: "length(Cars)", isCorrect: false },
        { text: "Cars.value", isCorrect: false },
        { text: "Cars.length", isCorrect: true }
    ]
}
];

// funciton to run the quiz
function checkQuestions() {
    // runs the function if there are still questions in the array
    if (i < Questions.length && timeLeft > 0) {
        var select = '';

        // Setting the question text
        question.innerText = Questions[i].q;

        // Providing option text 
        ans1.innerText = Questions[i].a[0].text;
        ans2.innerText = Questions[i].a[1].text;
        ans3.innerText = Questions[i].a[2].text;
        ans4.innerText = Questions[i].a[3].text;

        // Providing the true or false value to the options
        op1.value = Questions[i].a[0].isCorrect;
        op2.value = Questions[i].a[1].isCorrect;
        op3.value = Questions[i].a[2].isCorrect;
        op4.value = Questions[i].a[3].isCorrect;

        nextQ.onclick = function() {
            // Show selection for op1
            if (document.getElementById('op1').checked) {
                select = op1.value;
            }

            // Show selection for op2
            if (document.getElementById('op2').checked) {
                select = op2.value;
            }

            // Show selection for op3
            if (document.getElementById('op3').checked) {
                select = op3.value;
            }
        
            // Show selection for op4
            if (document.getElementById('op4').checked) {
                select = op4.value;
            }

            // display correct message
            if (select === "true") {
                i++;
                op1.checked = false;
                op2.checked = false;
                op3.checked = false;
                op4.checked = false;
                currentScore = currentScore + 1;
                correct();
                checkQuestions();
            } 
            
            //display incorrect message
            else {
                i++;
                op1.checked = false;
                op2.checked = false;
                op3.checked = false;
                op4.checked = false;
                timeLeft -= 10;
                QTimer.textContent = timeLeft + " seconds left";
                incorrect();
                checkQuestions();
            }
        }
    } else {
        // removing the timer
        // QTimer.textContent = "The Quiz is Complete!";
        timeLeft -= timeLeft;
        
        // hide the quiz form 
        document.getElementById("questionsForm").style.display = "none";
        document.getElementById("quizQuestion").style.visibility = "hidden";

        // hide the corred and incorrect declaratsions
        document.querySelector(".correct").style.display = "none";
        document.querySelector(".incorrect").style.display = "none";

        // display the score input form
        document.querySelector("#hScore").style.display = "block";
        document.querySelector("#scoreSub").style.display = "block";

        scoreSub.addEventListener("click", function() {
            var storedScore = localStorage.getItem("storedScore");
            var newEntry = document.querySelector("#hScore").value;

            if(storedScore == null) { 
                storedScore = [];
                var storedScore = document.querySelector("#hScore").value;

                localStorage.setItem("storedScore", storedScore.toString());

            } else {
                storedScore = storedScore ? storedScore.split(",") : [];

                storedScore.push(newEntry);
                localStorage.setItem("storedScore", storedScore.toString());
            }
        });
    }
}