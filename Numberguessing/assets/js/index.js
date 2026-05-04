const minNumber = 1;
const maxNumber = 100;
const randomAnswer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Please put in a number from ${minNumber} to ${maxNumber}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("Please put in a valid number");
    } else if (guess < minNumber || guess > maxNumber) {
        window.alert("Please put in a valid number");
    } else {
        attempts++;
        if (guess < randomAnswer) {
            window.alert("Too low!");
        } else if (guess > randomAnswer) {
            window.alert("Too high!");
        } else {
            window.alert("You win! Your total amount of guesses was: " + attempts);
            running = false;
        }
    }
}    