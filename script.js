function showEventDetails() {
    const details = document.getElementById("event-details");
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

let slideIndex = 0;
const images = ["path-to-image1.jpg", "path-to-image2.jpg", "path-to-image3.jpg"];

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= images.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }
    document.getElementById("slideshow-image").src = images[slideIndex];
}

function startTimer() {
    let minutes = parseInt(document.getElementById("minutes").value);
    let seconds = parseInt(document.getElementById("seconds").value);
    let totalSeconds = minutes * 60 + seconds;
    
    const timerDisplay = document.getElementById("timer-display");
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const interval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(interval);
            alert("Time's up!");
        } else {
            totalSeconds--;
            let mins = Math.floor(totalSeconds / 60);
            let secs = totalSeconds % 60;
            timerDisplay.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        }
    }, 1000);
}
