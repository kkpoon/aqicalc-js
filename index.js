var d3 = require('d3');

var SO2 = [0, 50, 150, 475, 800, 1600, 2100, 2620];
var NO2 = [0, 40, 80, 180, 280, 565, 750, 940];
var PM10 = [0, 50, 150, 250, 350, 420, 500, 600];
var CO = [0, 2, 4, 14, 24, 36, 48, 60];
var O3 = [0, 160, 200, 300, 400, 800, 1000, 1200];
var PM25 = [0, 35, 75, 115, 150, 250, 350, 500];
var IAQI = [0, 50, 100, 150, 200, 300, 400, 500];

function constrain(x, a, b) {
  return x < a ? a : (x > b ? b : x);
}

module.exports = function(so2, no2, pm10, co, o3, pm2_5) {
  var iaqiScale = d3.scale.linear().range(IAQI);
  var aq = [
    { aqi: constrain(iaqiScale.domain(SO2)(so2)), primary: "SO2" },
    { aqi: constrain(iaqiScale.domain(NO2)(no2)), primary: "NO2" },
    { aqi: constrain(iaqiScale.domain(PM10)(pm10)), primary: "PM10" },
    { aqi: constrain(iaqiScale.domain(CO)(co)), primary: "CO" },
    { aqi: constrain(iaqiScale.domain(O3)(o3)), primary: "O3" },
    { aqi: constrain(iaqiScale.domain(PM25)(pm2_5)), primary: "PM2.5" }
  ].reduce(function(a, b) { return a.aqi <= b.aqi ? b : a; });
  aq.aqi = Math.round(aq.aqi);
  return aq;
};
