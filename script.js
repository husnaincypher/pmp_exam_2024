// Functionality for quiz cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });
});

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
