const currentTemp = document.getElementById("currentTemp");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;

function convert(){
    if (toCelsius.checked){
        temp = Number(currentTemp.value);
        temp = (temp - 32) / 1.8;
        result.textContent = Math.round(temp) + "°C";
    } else if (toFahrenheit.checked){
        temp = Number(currentTemp.value);
        temp = temp * 1.8 + 32;
        result.textContent = Math.round(temp) + "°F";
    } else{
        result.textContent = "Please choose a valid conversion";
    }
}