// let countElement = document.getElementById("counter");
// let happyClients = 5;
// let isVisible = false;
// let counterStarted = false;

// function updateCounter(counter){
//     countElement.textContent = counter;
// }

// function startCounter(){
//     if (!counterStarted){
//         counterStarted = true;
//         let currentCount = 0;
//         let interval = setInterval(() => {
//             updateCounter(currentCount);
//             currentCount++;
//             if(currentCount > happyClients){
//                 clearInterval(interval);
//             }
//         }, 300);
//     }
// }

// function checkVisibility (){
//     let rect = countElement.getBoundingClientRect();
//     if (rect.top >= 0 && rect.bottom <= window.innerHeight){
//         isVisible = true;
//     } else {
//         isVisible = false;
//         counterStarted = false;
//     }
// }

// window.addEventListener("scroll", () => {
//     checkVisibility();
//     if (isVisible){
//         startCounter();
//     }
// });

// checkVisibility();

(() => {
    "use strict";

    let backtotop = document.querySelector('.back-to-top');
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleBacktotop);
        window.addEventListener('scroll', toggleBacktotop);
    }
})();

  


function animateCounter(elementId, finalValue) {
    let countElement = document.getElementById(elementId);
    let isVisible = false;
    let counterStarted = false;

    function updateCounter(counter) {
        countElement.textContent = counter;
    }

    function startCounter() {
        if (!counterStarted) {
            counterStarted = true;
            let currentCount = 0;
            let interval = setInterval(() => {
                updateCounter(currentCount);
                currentCount++;
                if (currentCount > finalValue) {
                    clearInterval(interval);
                }
            }, 300);
        }
    }

    function checkVisibility() {
        let rect = countElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            isVisible = true;
        } else {
            isVisible = false;
            counterStarted = false;
        }
    }

    window.addEventListener("scroll", () => {
        checkVisibility();
        if (isVisible) {
            startCounter();
        }
    });

    checkVisibility();
}

// Llamar a la función para diferentes contadores
animateCounter("happy-clients-counter", 5);
animateCounter("projects-counter", 10);
animateCounter("experience-counter", 15);
