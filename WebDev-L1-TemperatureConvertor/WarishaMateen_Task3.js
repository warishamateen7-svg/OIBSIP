const inputField = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const errorMessage = document.getElementById("error");

const celsiusOutput = document.getElementById("celsiusResult");
const fahrenheitOutput = document.getElementById("fahrenheitResult");
const kelvinOutput = document.getElementById("kelvinResult");

convertBtn.addEventListener("click", () => {

    errorMessage.textContent = "";

    const inputValue = inputField.value.trim();

    if (inputValue === "") {
        errorMessage.textContent = "Please enter a temperature value.";
        return;
    }

    const temperature = Number(inputValue);
    const selectedUnit = unitSelect.value;

    if (
        (selectedUnit === "celsius" && temperature < -273.15) ||
        (selectedUnit === "fahrenheit" && temperature < -459.67) ||
        (selectedUnit === "kelvin" && temperature < 0)
    ) {
        errorMessage.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    switch (selectedUnit) {

        case "celsius":
            celsius = temperature;
            fahrenheit = (temperature * 9 / 5) + 32;
            kelvin = temperature + 273.15;
            break;

        case "fahrenheit":
            fahrenheit = temperature;
            celsius = (temperature - 32) * 5 / 9;
            kelvin = celsius + 273.15;
            break;

        case "kelvin":
            kelvin = temperature;
            celsius = temperature - 273.15;
            fahrenheit = (celsius * 9 / 5) + 32;
            break;
    }

    celsiusOutput.textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    fahrenheitOutput.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    kelvinOutput.textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
    const resetBtn = document.getElementById("resetBtn");

});

resetBtn.addEventListener("click", () => {

    inputField.value = "";
    unitSelect.selectedIndex = 0;

    errorMessage.textContent = "";

    celsiusOutput.textContent = "Celsius: --";
    fahrenheitOutput.textContent = "Fahrenheit: --";
    kelvinOutput.textContent = "Kelvin: --";

});

inputField.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        convertBtn.click();
    }

});