let trafficLightEl = document.querySelector('#trafficLight');
let trafficLightEl2 = document.querySelector('#trafficLight2');
let trafficLightEl3 = document.querySelector('#trafficLight3');

let clickCounter = 0;

function makeGreen() {
    trafficLightEl.style.background = 'green';
    trafficLightEl2.style.background = '';
    trafficLightEl3.style.background = '';
    clickCounter += 1;
}
trafficLightEl.addEventListener('click', changeColor);

function makeYellow() {
    trafficLightEl2.style.background = 'yellow';
    trafficLightEl.style.background = '';
    trafficLightEl3.style.background = '';
    clickCounter += 1;
}
trafficLightEl2.addEventListener('click', changeColor);

function makeRed() {
    trafficLightEl3.style.background = 'red';
    trafficLightEl.style.background = '';
    trafficLightEl2.style.background = '';
    clickCounter = 0;
}
trafficLightEl3.addEventListener('click', changeColor); 

function changeColor() {
    switch (clickCounter) {
        case 0: makeGreen();
            break;
        case 1: makeYellow();
            break;
        case 2: makeRed();
            break;
    }
}

