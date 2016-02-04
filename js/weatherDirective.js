(function() {

    // Define directive
    weatherApp.directive("weather", function() {
        var directive = {};

        directive.template =
            '<table>' +
                '<tr>' +
                    '<td class="title">City</td>' +
                    '<td>{{ weather.name }}</td>' +
                '</tr>' +

                '<tr>' +
                    '<td class="title">Temperature,&nbsp;&deg;C</td>' +
                    '<td>{{ weather.temp }}</td>' +
                '</tr>' +

                '<tr>' +
                    '<td class="title">Humidity, %</td>' +
                    '<td>{{ weather.humidity }}</td>' +
                '</tr>' +

                '<tr>' +
                    '<td class="title">Description</td>' +
                    '<td>{{ weather.description }}</td>' +
                '</tr>' +
            '</table>';

        directive.scope = {
            weather: "=name"
        };

        return directive;
    });
    
})();
