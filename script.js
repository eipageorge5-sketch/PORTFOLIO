// 1. Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// 2. Typing Animation
const typed = new Typed('.typing', {
    strings: ['Front-End Developer', 'Digital Archivist', 'Python Learner'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// 3. Hamburger Menu Logic
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// 4. Modal Functions
function openCodeModal() {
    document.getElementById("codeModal").style.display = "block";
}

function closeCodeModal() {
    document.getElementById("codeModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById("codeModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
