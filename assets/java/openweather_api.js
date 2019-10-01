function callOpenWeather(destCity) {
  var apiKey = "b335dca47af9b740159d13bca7acffe4";

  // Constructing a queryURL using the animal name
  // 5 day / 3-hourly weather forecast for selected city (WORKING)
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    destCity +
    "&APPID=" +
    apiKey;

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(response);

      $("#box-weather").html("");

      var weatherP = $("<div>");

      $(weatherP).append(
        "Here is your 5-day weather forecast for " + destCity + ":"
      );

      weatherP.append("<br/>");
      weatherP.append(
        "<br/>" +
          response.list[0].dt_txt.substr(5, 2) +
          "/" +
          response.list[0].dt_txt.substr(8, 2) +
          ":  " +
          (parseInt((response.list[0].main.temp_max - 273.15) * 1.8) + 32) +
          "F     " +
          response.list[0].weather[0].main +
          "<img src='http://openweathermap.org/img/wn/" +
          response.list[0].weather[0].icon +
          "@2x.png' width='50' height='50'>"
      );
      weatherP.append(
        "<br/>" +
          response.list[0].dt_txt.substr(5, 2) +
          "/" +
          response.list[8].dt_txt.substr(8, 2) +
          ":  " +
          (parseInt((response.list[8].main.temp_max - 273.15) * 1.8) + 32) +
          "F     " +
          response.list[8].weather[0].main +
          "<img src='http://openweathermap.org/img/wn/" +
          response.list[8].weather[0].icon +
          "@2x.png' width='50' height='50'>"
      );
      weatherP.append(
        "<br/>" +
          response.list[0].dt_txt.substr(5, 2) +
          "/" +
          response.list[16].dt_txt.substr(8, 2) +
          ":  " +
          (parseInt((response.list[16].main.temp_max - 273.15) * 1.8) + 32) +
          "F     " +
          response.list[16].weather[0].main +
          "<img src='http://openweathermap.org/img/wn/" +
          response.list[16].weather[0].icon +
          "@2x.png' width='50' height='50'>"
      );
      weatherP.append(
        "<br/>" +
          response.list[0].dt_txt.substr(5, 2) +
          "/" +
          response.list[24].dt_txt.substr(8, 2) +
          ":  " +
          (parseInt((response.list[24].main.temp_max - 273.15) * 1.8) + 32) +
          "F     " +
          response.list[24].weather[0].main +
          "<img src='http://openweathermap.org/img/wn/" +
          response.list[24].weather[0].icon +
          "@2x.png' width='50' height='50'>"
      );
      weatherP.append(
        "<br/>" +
          response.list[0].dt_txt.substr(5, 2) +
          "/" +
          response.list[32].dt_txt.substr(8, 2) +
          ":  " +
          (parseInt((response.list[32].main.temp_max - 273.15) * 1.8) + 32) +
          "F     " +
          response.list[32].weather[0].main +
          "<img src='http://openweathermap.org/img/wn/" +
          response.list[32].weather[0].icon +
          "@2x.png' width='50' height='50'>"
      );

      $("#box-weather").prepend(weatherP);
    });
}
