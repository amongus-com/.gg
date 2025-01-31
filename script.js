// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Fade-in effect for elements
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 200);
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
    });
});
