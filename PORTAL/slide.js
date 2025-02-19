let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex += direction;
    
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    
    document.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}%)`;
    adjustTextSize();
}

// Auto-slide every 8 seconds
setInterval(() => moveSlide(1), 8000);

// Adjust text size dynamically
function adjustTextSize() {
    const textSlides = document.querySelectorAll(".text-slide");

    textSlides.forEach(text => {
        let fontSize = 18;
        text.style.fontSize = fontSize + "px";

        // Reduce font size if the text is too long
        while (text.scrollHeight > text.parentElement.clientHeight && fontSize > 12) {
            fontSize--;
            text.style.fontSize = fontSize + "px";
        }
    });
}

// Adjust text size on load & resize
window.onload = adjustTextSize;
window.addEventListener("resize", adjustTextSize);




