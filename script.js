// Functionality for quiz cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.quiz-card');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            const options = card.querySelector('.quiz-options');
            const result = card.querySelector('.quiz-result');
            options.classList.toggle('visible');
            result.classList.toggle('visible');
        });
    });
});

function chooseAnswer(button, correctAnswer) {
    const card = button.closest('.quiz-card');
    const result = card.querySelector('.quiz-result');
    const selectedAnswer = button.textContent;
    if (selectedAnswer === correctAnswer) {
        result.textContent = "Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "Wrong! Try again.";
        result.style.color = "red";
    }
}

function checkAnswer(card, correctAnswer) {
    const options = card.querySelectorAll('.quiz-options button');
    options.forEach(option => {
        option.addEventListener('click', function () {
            chooseAnswer(option, correctAnswer);
        });
    });
}

// Functionality for notes section
const notesArea = document.getElementById('notesArea');
notesArea.addEventListener('input', function () {
    localStorage.setItem('notes', notesArea.value);
});

document.addEventListener('DOMContentLoaded', function () {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notesArea.value = savedNotes;
    }
});

// Functionality for progress tracker
let progress = 0;
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');

function updateProgress() {
    progress += 10; // Increment by 10% for demo purposes
    if (progress > 100) progress = 100;
    progressBar.style.width = progress + '%';
    progressText.innerText = `${progress}% Complete`;
}

// Simulate progress update for demo purposes
setInterval(updateProgress, 1000); // Update progress every second
