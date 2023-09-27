const questions = document.querySelectorAll('.question');

let timerValue = 30;
let currentQuestionIndex = 0;
let timerInterval;

// Showing the question
function showQuestion(index) {
    if (index >= 0 && index < questions.length) {
        questions[index].style.display = 'block';
        console.log(showQuestion);
    }
}

//Hiding the questions
function hideAllQuestions() {
    questions.forEach(question => {
        question.style.display = 'none';
    });
}

//starting timer
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

//Start button click
document.getElementById('startButton').addEventListener('click', () => {
    startTimer(); 
    document.getElementById('startButton').style.display = 'none'; 
    showQuestion(currentQuestionIndex); 
});

//answer choices
questions.forEach((question, index) => {
    const answerChoices = question.querySelectorAll('li');
    answerChoices.forEach(choice => {
        choice.addEventListener('click', () => {
            const isCorrect = choice.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    hideAllQuestions(); 
                    showQuestion(currentQuestionIndex); 
                } else {
                    clearInterval(timerInterval);
                    alert('Congratulations! You have completed the quiz.');
                }
            }
        });
    });
});

// Hide all questions
hideAllQuestions();



