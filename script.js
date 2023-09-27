// Selecting all questions
const questions = document.querySelectorAll('.question');

let timerValue = 30;
let currentQuestionIndex = 0;
let timerInterval;

// Showing the question
function showQuestion(index) {
    if (index >= 0 && index < questions.length) {
        questions[index].style.display = 'block';
    }
}

// Hiding all questions
function hideAllQuestions() {
    questions.forEach(question => {
        question.style.display = 'none';
    });
}

// Starting the timer
function startTimer() {
    timerInterval = setInterval(() => {
        timerValue--;
        document.getElementById('timer').textContent = `Time: ${timerValue}`;
        if (timerValue === 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
        }
    }, 1000);
}

// Correct answer
function handleCorrectAnswer() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        hideAllQuestions();
        showQuestion(currentQuestionIndex);
    } else {
        clearInterval(timerInterval);
        alert('Congratulations! You have completed the quiz.');
    }
}

// Start button click
document.getElementById('startButton').addEventListener('click', () => {
    startTimer();
    document.getElementById('startButton').style.display = 'none';
    showQuestion(currentQuestionIndex);
});

// Answer choices
questions.forEach((question, index) => {
    const answerChoices = question.querySelectorAll('li');
    answerChoices.forEach(choice => {
        choice.addEventListener('click', () => {
            const isCorrect = choice.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                handleCorrectAnswer();
            }
        });
    });
});

// Hide all questions initially
hideAllQuestions();
