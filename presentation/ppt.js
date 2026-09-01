// =========================
// GET ELEMENTS
// =========================

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector("#next-btn");

const prevBtn = document.querySelector("#prev-btn");

const currentSlide =
    document.querySelector("#current-slide");

const startBtn =
    document.querySelector("#start-btn");


// =========================
// CURRENT SLIDE
// =========================

let currentIndex = 0;


// =========================
// SHOW SLIDE
// =========================

function showSlide(index) {

    // Remove active from all slides

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });


    // Remove active from all dots

    dots.forEach((dot) => {

        dot.classList.remove(
            "bg-purple-500",
            "w-7"
        );

        dot.classList.add(
            "bg-zinc-700",
            "w-2"
        );

    });


    // Activate selected slide

    slides[index].classList.add("active");


    // Activate selected dot

    dots[index].classList.remove(
        "bg-zinc-700",
        "w-2"
    );

    dots[index].classList.add(
        "bg-purple-500",
        "w-7"
    );


    // Update counter

    currentSlide.textContent =
        String(index + 1).padStart(2, "0");
}


// =========================
// NEXT
// =========================

function nextSlide() {

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}


// =========================
// PREVIOUS
// =========================

function previousSlide() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
}


// =========================
// BUTTON EVENTS
// =========================

nextBtn.addEventListener(
    "click",
    nextSlide
);


prevBtn.addEventListener(
    "click",
    previousSlide
);


// =========================
// DOT EVENTS
// =========================

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentIndex = index;

        showSlide(currentIndex);

    });

});


// =========================
// START BUTTON
// =========================

startBtn.addEventListener("click", () => {

    currentIndex = 1;

    showSlide(currentIndex);

});


// =========================
// KEYBOARD
// =========================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "ArrowRight") {
            nextSlide();
        }

        if (event.key === "ArrowLeft") {
            previousSlide();
        }

    }
);


// =========================
// INITIALIZE
// =========================

showSlide(0);