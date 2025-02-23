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
