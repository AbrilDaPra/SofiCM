let happyClients = 5;
let projects = 8;
let yearsOfExperience = 1;

let counters = [
    { element: document.getElementById("clients-counter"), count: happyClients },
    { element: document.getElementById("projects-counter"), count: projects },
    { element: document.getElementById("years-counter"), count: yearsOfExperience }
];

function updateCounter(counterElement, counter) {
    counterElement.textContent = counter.toString();
}

function startCounter(counterElement, count) {
    if (!counterElement.dataset.intervalStarted) {
        counterElement.dataset.intervalStarted = true;
        let currentCount = 0;
        let interval = setInterval(() => {
            updateCounter(counterElement, currentCount);
            currentCount++;
            if (currentCount > count) {
                clearInterval(interval);
                counterElement.dataset.intervalStarted = false;
            }
        }, 300);
    }
}


function checkVisibility(rect) {
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

window.addEventListener("scroll", () => {
    counters.forEach(counterInfo => {
        let rect = counterInfo.element.getBoundingClientRect();
        if (checkVisibility(rect)) {
            startCounter(counterInfo.element, counterInfo.count);
        }
    });
});

counters.forEach(counterInfo => {
    checkVisibility(counterInfo.element.getBoundingClientRect());
});

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

  







