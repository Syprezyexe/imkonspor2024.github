// script.js
function toggleAudio() {
    var audio = document.getElementById('background-audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Slayt Gösterisi (Slider) için ek JS
var index = 0;
function showSlides() {
    var slides = document.querySelectorAll('.slider img');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    index++;
    if (index > slides.length) { index = 1; }
    slides[index - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Slaytların geçiş süresi (ms cinsinden)
}
showSlides();
