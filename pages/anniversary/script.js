function goToLetterPage() {
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("letter-page").style.display = "block";
    document.getElementById("letter-page").classList.add("fade-in");
}

function goToGalleryPage() {
    document.getElementById("letter-page").style.display = "none";
    document.getElementById("gallery-page").style.display = "block";
    document.getElementById("gallery-page").classList.add("fade-in");
}

function goToClosingPage() {
    document.getElementById("gallery-page").style.display = "none";
    document.getElementById("closing-page").style.display = "block";
    document.getElementById("closing-page").classList.add("fade-in");
}

function reloadPage() {
    location.reload();
}

let slideIndex = 0;

// Function to show slides
function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Loop back to the first slide if necessary
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].style.display = "block";  // Show the current slide
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;  // Move the index by n (+1 or -1)
    showSlides();  // Update slideshow
}

// Initialize the slideshow
const playlist = [
    "undeniableyou.mp3",
    "doyouknow.mp3",
    "lovingiseasy.mp3"
];

let currentTrack = 0;
const audioPlayer = document.getElementById("background-music");

function startPlaylist() {
    // Start with the first track
    currentTrack = 0;
    playTrack(currentTrack);

    // Automatically move to the next song when one ends
    audioPlayer.addEventListener('ended', function() {
        currentTrack++;
        if (currentTrack >= playlist.length) {
            currentTrack = 0;  // Loop back to first song
        }
        playTrack(currentTrack);
    });
}

function playTrack(index) {
    audioPlayer.src = playlist[index];
    audioPlayer.play();
}