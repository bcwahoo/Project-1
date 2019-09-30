function callNews(destCity) {
    var apiKey = "0785145288d041dfa635be90e3d35bcb";

    // Constructing a queryURL
    var queryURL = "https://newsapi.org/v2/everything?sources=google-news&q=" + encodeURIComponent(destCity) + "&sortBy=publishedAt&apiKey=" + apiKey;
    console.log("queryURL: " + queryURL);
    
    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET",
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(response);

            var newsP = $("<p>");

            $(newsP).append("Headlines for " + destCity + ":");

            for (var i = 0; i < response.articles.length; i++) {


                console.log(response.articles[i].title);

                $(newsP).append("<br/>" + "<br/>" + response.articles[i].title);
            };

            $("#box-news").prepend(newsP);

        })
}