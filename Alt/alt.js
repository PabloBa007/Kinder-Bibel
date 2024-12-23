// Image Slider
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;
    const interval = 8000; // 8 Sekunden

    function changeImage() {
        // Entferne die "active"-Klasse vom aktuellen Bild
        images[currentIndex].classList.remove('active');

        // Bestimme das nächste Bild
        currentIndex = (currentIndex + 1) % images.length;

        // Füge die "active"-Klasse zum nächsten Bild hinzu
        images[currentIndex].classList.add('active');
    }

    // Starte den Intervall
    setInterval(changeImage, interval);
});
