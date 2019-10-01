$(document).ready(function() {
  var apiKey =
    "81469a812c5261841bb7a1753b4ffaffc926a4058d3da92602941efbe15e1bdb";
  var secretKey =
    "f80acb2f9001035aa32cb15e142399c65428f9ca5895a6274241613ec8d26753";

  // This function handles events where one button is clicked
  $("#searchBtn").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var searchCity = $("#location")
      .val()
      .trim();

    console.log(searchCity);

    getImage(searchCity);
  });

  function getImage(searchCity) {
    $.ajax({
      url:
        "https://api.unsplash.com/search/photos/?client_id=" +
        apiKey +
        "&query=" +
        searchCity,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(res) {
        console.log(res);
        console.log(res.results[1].id);
        var imageID = res.results[1].id;
        console.log(imageID);

        var imageURL = res.results[1].urls.full;
        console.log(imageURL);

        $(document.body).css("background-image", "url(" + imageURL + ")");
      });
  }
});
