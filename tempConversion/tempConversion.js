const ftoc = function(tempF) {

  celcius = (tempF - 32) * (5/9);
  return Math.round(celcius * 10) / 10;

}

const ctof = function(tempC) {

  fahrenheit = tempC * (9/5) + 32;
  return Math.round(fahrenheit * 10) / 10;

}

module.exports = {
  ftoc,
  ctof
}
