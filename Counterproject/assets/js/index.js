const buttonDecrease = document.getElementById("buttonDecrease");
const buttonIncrease = document.getElementById("buttonIncrease");
const buttonReset = document.getElementById("buttonReset");
const textCounter = document.getElementById("textCounter");
let counter = 0;

buttonDecrease.onclick = function(){
    counter--;
    textCounter.textContent = counter;
}

buttonIncrease.onclick = function(){
    counter++;
    textCounter.textContent = counter;
}

buttonReset.onclick = function(){
    counter = 0;
    textCounter.textContent = counter;
}