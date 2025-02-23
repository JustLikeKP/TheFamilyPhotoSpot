function showEventDetails() {
    const details = document.getElementById("event-details");
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

let slideIndex = 0;
const images = ["photos/photo1.jpg"];

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

function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("submission-message").style.display = "block";
    document.getElementById("contact-form").reset();
}

function uploadPhoto() {
    const input = document.getElementById("photo-input");
    const photoContainer = document.getElementById("uploaded-photo");
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            photoContainer.innerHTML = "";
            photoContainer.appendChild(img);
        };
        
        reader.readAsDataURL(input.files[0]);
    } else {
        alert("Please select a photo to upload.");
    }
}
