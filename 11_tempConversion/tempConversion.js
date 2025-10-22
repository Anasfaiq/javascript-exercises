const convertToCelsius = function(tempF) {
  result = (tempF - 32) * 0.5556
  rounded = parseFloat(result.toFixed(1));
  return rounded;
};

const convertToFahrenheit = function(tempC) {
  result = (tempC * 1.8) + 32;
  rounded = parseFloat(result.toFixed(1));
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
