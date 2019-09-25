var clientID = "MTg1ODQzODR8MTU2OTM2NjgzOC4zNQ";
var searchCity = "";
var startDate = "2019-09-24";
var endDate = "2019-09-30";
var weatherDetails = [{ date: "", city: "", country: "", weather: "", maxtemp: "", wind: "" }];

// This function handles events where one button is clicked
$("#searchBtn").on("click", function (event) {

    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    searchCity = $("#destCity").val().trim();
    console.log("searchCity: " + searchCity);

    // This line will grab the startDate from the input box
    startDate = $("#startDate").val().trim();
    console.log("startDate: " + startDate);

    // This line will grab the endDate from the input box
    endDate = $("#endDate").val().trim();
    console.log("endDate: " + endDate);


});


$(document.body).on("click", "#searchBtn", function () {

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.seatgeek.com/2/events?venue.city=" + encodeURIComponent(searchCity) + "&datetime_utc.gte=" + startDate + "&datetime_utc.lte=" + endDate + "&taxonomies.name=concert&client_id=" + clientID;
    console.log("queryURL: " + queryURL);

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {

            console.log(response);

            var concertsP = $("<p>").text("Concerts while you are there:");

            // Log list of concerts to the console
            for (var i=0; i < response.events.length; i++) {
            console.log(response.events[i].datetime_local + ": " + response.events[i].title);
            $(concertsP).append("<br/>" + "<img width=30 height=30 src = " + response.events[i].performers[0].image + ">");
            $(concertsP).append("  " + 
            response.events[i].datetime_local[5] + 
            response.events[i].datetime_local[6] + 
            response.events[i].datetime_local[7] + 
            response.events[i].datetime_local[8] + 
            response.events[i].datetime_local[9] + 
            // response.events[i].datetime_local[10] + 
            ": " + response.events[i].title);
            };

            $("#concertsOutput").prepend(concertsP);

        });
});


