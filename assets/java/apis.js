var apiKey = "b335dca47af9b740159d13bca7acffe4";
var searchCity = "";
var weatherDetails = [{ date: "", city: "", country: "", weather: "", maxtemp: "", wind: "" }];

// This function handles events where one button is clicked
$("#searchBtn").on("click", function (event) {

    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    searchCity = $("#destCity").val().trim();
    console.log("searchCity: " + searchCity);

});


$(document.body).on("click", "#searchBtn", function () {

    // Constructing a queryURL using the animal name
    // Weather snapshot for selected city (WORKING)
    // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&APPID=b335dca47af9b740159d13bca7acffe4";
    // 5 day / 3-hourly weather forecast for selected city (WORKING)
    // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&APPID=b335dca47af9b740159d13bca7acffe4";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&APPID=" + apiKey;


    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(response);
            console.log(response.city.name);
            console.log(response.city.country);
            console.log(response.list[0].dt_txt);
            console.log(response.list[0].main.temp_max);
            console.log(response.list[0].weather[0].main);


            var weatherP = $("<p>").text("City: " + response.city.name);
            weatherP.append(", " + response.city.country);
            weatherP.append("<br/>" + "Date: " + response.list[0].dt_txt);
            weatherP.append("<br/>" + "Max Temp: " + (parseInt((response.list[0].main.temp_max-273.15)*1.8)+32) + "F");
            weatherP.append("<br/>" + "Conditions: " + response.list[0].weather[0].main);


            $("#weatherOutput").prepend(weatherP);

        });
});
    

