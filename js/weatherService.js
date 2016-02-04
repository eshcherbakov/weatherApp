(function() {

    /**
     * Service to loading weater data for city
     */
    weatherApp.service("OpenWeatherMapService", function($http, weatherAPI, units, appId) {

        /**
         * Load weater data for city
         * @param {String} cityName
         * @param {function} callback. Callback function
         */
        this.getWeather = function(cityName, callback) {
            if(cityName === undefined) {
                var weather = {
                    "cod": "404",
                    "message": "Error: Not found city"
                }
                callback(weather);
                return;
            }

            var url = weatherAPI
                + "?q=" + cityName
                + "&units=" + units
                + "&appid=" + appId;

            $http.get(url).success(function(response) {
                callback(response);
            });
        }
    });
    
})();
