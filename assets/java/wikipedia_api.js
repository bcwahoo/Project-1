function callWikipedia(destCity) {
    var apiKey = "";
    // Constructing a queryURL
    var queryURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent(destCity);
    console.log("queryURL: " + queryURL);
    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET",
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(response);

            var wikiP = $("<p>");
            $("#box-news").prepend(newsP);

        })
}