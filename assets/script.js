// $(".start-btn").click(function(){
//     $('#finish').hide();
// })

// global variable
var questions = [
    {
        problem: 'Inside which HTML element do we put the JavaScript?',
        options: ['<javascript>', '<js>', '<src>', '<script>'],
        answer: '<script>',
    },
    {
        problem: 'Inside which HTML element do we put the JavaScript is a ___ -side programming language?',
        options: ['Client', 'Server', 'Both', 'None'],
        answer: 'Both',
    },
    {
        problem: 'Which of the below is used in Java script to insert special characters?',
        options: ['&', '\\', '-', '%'],
        answer: '\\',
    },
    {
        problem: 'Which attribute needs to be changed to make elements invisible?',
        options: ['visibility', 'visible', 'invisibility', 'invisible'],
        answer: 'visibility',
    },
]
var timeEl = document.querySelector('#seconds')
timeEl.textContent = seconds


function endgame() {
    clearInterval(timerId);
    $('#quiz').hide();
    $('#finish').show();
    document.querySelector('#final-score').textContent = seconds

    // $('.initials').click('submit')
}

function clockTimer() {
    seconds--;
    timeEl.textContent = seconds
    if (seconds <= 0) {
        endgame(); //must be defined
        storeScore();
    }
}

var timerId; //undefined
$(".start-btn").click(function () {
    $('#quiz').show();
    $('#intro').hide();
    timerId = setInterval(clockTimer, 1000) //to call clocktimer you need to define it in a function
    showQuestion();
})

var seconds = questions.length * 15
// console.log(seconds)
var qIndex = 0;

var answerEl = document.querySelector('.answer-choices')

function showQuestion() {
    const item = questions[qIndex]; //each object of the array
    var askEl = document.querySelector('.ask');
    askEl.textContent = item.problem
    answerEl.innerHTML = ''; //this is making the "answer-choices" text empty?
    for (let i = 0; i < item.options.length; i++) { //this item is referring to line 67
        var answerOption = item.options[i]
        var btnOption = document.createElement('button') //dynamically creating buttons
        btnOption.setAttribute('class', 'option1')
        btnOption.setAttribute('value', answerOption)
        btnOption.textContent = i + 1 + '. ' + answerOption
        answerEl.appendChild(btnOption)
    }
}



function checkQuestion(event) {
    var buttonEl = event.target
    // var correct = questions[qIndex].answer.click

    if (!buttonEl.matches('.option1')) {
        return
    }
    // else (buttonEl.matches('.option1')) {
    //     qIndex++;
    // }

    if (buttonEl.value !== questions[qIndex].answer) {
        seconds -= 10; //if buttonEl.value == questions[qIndex].answer --> next question         

        if (seconds <= 0) {
            seconds = 0;
        }
    }
        timeEl.textContent = seconds
        qIndex++;

    if (seconds <= 0 || qIndex === questions.length) {
            endgame()
        }
        else {
            showQuestion()
        }
    }


answerEl.onclick = checkQuestion

submitButton = document.querySelector('#submit-btn')

// //object for scores 
// var score = {
//     secondsEl: seconds.value,
//     initialsEl: initials.value.trim(),
// };

// var scoreStringify = JSON.stringify(score)
// localStorage.setItem('score',scoreStringify)


// submitButton.addEventListener('click', function(){
//     localStorage.setItem('score',seconds)
// })    //need to take the seconds on timer and input it on final score line
//     //need to take intials and save in local storage
//     //need to append into score obj each time the quiz is taken
// btnOption.addEventListener('click', function(check){
// })

// $('#submit-btn').click('click', storeScore)

// seconds = localStorage.getItem('seconds')