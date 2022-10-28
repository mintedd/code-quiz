var timeEl = document.querySelector('#seconds');
var startPage = document.querySelector('#intro');
var btnEl = document.querySelector('.start-btn');
var quizStart = document.querySelector('#quiz');
var answerChoices= document.querySelector('.answer-choices')
var questionHTMLEl= document.querySelector('.ask')


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
];

function count() {
    var time = timeEl.textContent
    time--;
    timeEl.textContent = time;
}

function startTimer() {
    setInterval(count,1000) //need a function to call here
};

btnEl.addEventListener('click', function(){
    $('#intro').hide();
    $('#quiz').show();
    startTimer();
});


function createBtns(e) {
    // var button = document.createElement('button');
    // answerChoices.append(button);
    for (let i = 0; i < questions[0].options.length; i++) {
        const element = questions[0].options[i];
        var button = document.createElement('button');
        answerChoices.append(button);
       button.textContent = element;
    }
}

function populateQuestions() {
   questionHTMLEl.textContent = questions[0].problem
}
populateQuestions();
createBtns();
// var questionIndex = 0
// createBtns(questionIndex);
