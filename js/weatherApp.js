var weatherApp;

(function() {
    // Define module
    weatherApp = angular.module("weatherApp", []);

    // Define constants
    weatherApp.constant("weatherAPI", "http://api.openweathermap.org/data/2.5/weather");
    weatherApp.constant("units", "metric");
    weatherApp.constant("appId", "44db6a862fba0b067b1930da0d769e98");
})();
