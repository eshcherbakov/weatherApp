(function() {

    /**
     * Controller to display weather data
     */
    weatherApp.controller("weatherController", function($scope, OpenWeatherMapService) {

        /**
         * Display current weather data for city
         */
        $scope.showWeather = function() {
            OpenWeatherMapService.getWeather($scope.cityName, callback);
        }

        /**
         * Callback function that is executed after loading weather data
         */
        var callback = function(weather) {
            // Not found city
            if(weather.cod === "404") {
                $scope.currentWeather = {
                    name: weather.message,
                    temp: '',
                    humidity: '',
                    description: ''
                }
                return;
            }

            $scope.currentWeather = {
                name: weather.name,
                temp: weather.main.temp,
                humidity: weather.main.humidity,
                description: weather.weather.length > 0 ?
                    weather.weather[0].description : ''
            }
        };
    });

})();
