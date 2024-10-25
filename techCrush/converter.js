//fahrenheit to celsius
const fahValue = 120;
function fahToCelsius(fahrenheit){
return (fahValue - 32) * 5/9;
}
celsiusValue = fahToCelsius(fahValue);
 console.log(`${fahValue}°F is equal to ${celsiusValue.toFixed(2)}°C`);

module.exports = fahToCelsius;


//celsius to fahrenheit
const celValue = 50;
function celToFahrenheit(celsius){
return (celValue * 9/5) + 32;
}
fahrenheitValue = celToFahrenheit(celValue);
console.log(`${celValue}°C is equal to ${fahrenheitValue.toFixed(2)}°F`);

module.exports = celToFahrenheit;
