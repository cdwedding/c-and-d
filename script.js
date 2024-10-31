// Set the wedding date
const weddingDate = new Date("December 14, 2024 14:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "<span>Days</span>";
    document.getElementById("hours").innerHTML = hours + "<span>Hours</span>";
    document.getElementById("minutes").innerHTML = minutes + "<span>Minutes</span>";
    document.getElementById("seconds").innerHTML = seconds + "<span>Seconds</span>";
}

setInterval(updateCountdown, 1000);

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block"; // Show the modal
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none"; // Hide the modal
}

// Close the modal when clicking anywhere outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none"; // Hide the modal
        }
    }
}


// script.js
window.onload = function () {
    const countdownContainer = document.querySelector('.countdown-container');
    const img = new Image();
    img.src = './cd-bg.JPG'; // Same as the background image URL

    img.onload = function () {
        countdownContainer.classList.remove('loading');
        countdownContainer.classList.add('loaded'); // Add loaded class to fade in
    };
};

