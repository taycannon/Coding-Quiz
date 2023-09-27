/*** setting html elements variable */
const welcomePage = document.getElementById('welcomePage');
const quizPage = document.getElementById('quizPage');
const startButton = document.getElementById('startButton');
let sectionsArray = [welcomePage, quizPage]

let quizTime = 30;
let timer = document.getElementById('timer');
timer.textContent = `Time: ${quizTime}`;
let timeLeft;

/** quiz content */
let questionContent = [
    question1 = {
        question:"What colour is the ocean?",
        answers:["red", "brown", "yellow", "blue"],
        correctAnswer:"blue"
    },
    question2 = {
        question:"What colour is the OCEAN?",
        answers:["red", "brown", "yellow", "blue"],
        correctAnswer:"blue"
    },
    question3 = {
        question:"What COLOUR is the ocean?",
        answers:["red", "brown", "yellow", "blue"],
        correctAnswer:"blue"
    }
];


startButton.addEventListener('click', startGame);

function startGame(){
    countDown();
    hideSections();
    quizPage.classList.remove('hide');
}

function hideSections(){
    for (let index = 0; index < sectionsArray.length; index++) {
       if(!sectionsArray[index].classList.contains('hide')){
            sectionsArray[index].classList.add('hide');
       }
        
    }
}

function countDown(){
    timeLeft = quizTime;
    let countDown = setInterval(() => {
        timeLeft--;
        timer.textContent = `Time: ${timeLeft}`;

        if (timeLeft < 0){
            clearInterval(countDown);
            timer.classList.add('hide');
        }
    }, 1000);
}