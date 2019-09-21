var apiKey = "b335dca47af9b740159d13bca7acffe4";
var searchCity = "";

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
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&APPID=b335dca47af9b740159d13bca7acffe4";

debugger

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(response);

            // storing the data from the AJAX request in the results variable
            // var results = response.data;
            results = response.data;

        });
});

