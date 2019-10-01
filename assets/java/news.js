function callNewsAPI(destCity) {
  var apiKey = "0785145288d041dfa635be90e3d35bcb";
  // Constructing a queryURL
  var queryURL =
    "https://newsapi.org/v2/everything?q=" +
    encodeURIComponent(destCity) +
    "&sortBy=publishedAt&apiKey=" +
    apiKey;
  console.log("queryURL: " + queryURL);
  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(response);
    });
}
