function callOpenWeather(destCity) {

var apiKey = "b335dca47af9b740159d13bca7acffe4";
var searchCity = "";
var startDate = "2019-09-24";
var endDate = "2019-09-30";
var weatherDetails = [{ date: "", city: "", country: "", weather: "", maxtemp: "", wind: "" }];


    // Constructing a queryURL using the animal name
    // 5 day / 3-hourly weather forecast for selected city (WORKING)
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + destCity + "&APPID=" + apiKey;


    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {

            // $(".box-weather").html("");

            var weatherP = $("<p>").text("City: " + response.city.name);
            weatherP.append("<br/>" + "Conditions: " + response.list[0].weather[0].main);
            weatherP.append("<br/>");
            weatherP.append("<canvas id='myChart' width='200' height='200'></canvas>");


            $("#box-weather").prepend(weatherP);

            // Graphing output
            var ctx = document.getElementById('myChart').getContext('2d');
 
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        (response.list[0].dt_txt).substr(5,5),
                        (response.list[8].dt_txt).substr(5,5),
                        (response.list[16].dt_txt).substr(5,5),
                        (response.list[24].dt_txt).substr(5,5),
                        (response.list[32].dt_txt).substr(5,5)
                    ],
                    datasets: [{
                        label: 'Temperature in ' + response.city.name,
                        data: [
                            parseInt((response.list[0].main.temp_max - 273.15) * 1.8) + 32,
                            parseInt((response.list[8].main.temp_max - 273.15) * 1.8) + 32,
                            parseInt((response.list[16].main.temp_max - 273.15) * 1.8) + 32,
                            parseInt((response.list[24].main.temp_max - 273.15) * 1.8) + 32,
                            parseInt((response.list[32].main.temp_max - 273.15) * 1.8) + 32
                        ],
                        backgroundColor:
                            'rgba(54, 162, 235, 0.4)',
                        borderColor:
                            'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

        });
}

