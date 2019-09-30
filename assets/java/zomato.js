function callZomato(destCity) {

    var apiKey = "9bf41e76967962eaee831206dbde6020";

    // Constructing a queryURL
    var queryURL = "https://developers.zomato.com/api/v2.1/cities?q=" + encodeURIComponent(destCity);
    console.log("queryURL: " + queryURL);

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "user-key": apiKey,
        }
    })
        // After data comes back from the request
        .then(function (response) {

            console.log(response);

            var cityID = response.location_suggestions[0].id;
            console.log("cityID: " + cityID);

            // Constructing a queryURL
            var queryURL2 = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityID + "&entity_type=city";
            console.log("queryURL2: " + queryURL2);

            // Performing an AJAX request with the queryURL
            $.ajax({
                url: queryURL2,
                method: "GET",
                headers: {
                    "user-key": apiKey,
                }
            })

                // After data comes back from the request
                .then(function (response2) {
                    console.log(response2);

                    var restaurantsP = $("<p>");
                    for (var i = 0; i < response2.restaurants.length; i++) {
                        $(restaurantsP).append("<br/>" + response2.restaurants[i].restaurant.name);
                        $(restaurantsP).append("<br/>" + response2.restaurants[i].restaurant.location.address);
                        $(restaurantsP).append("<br/>" + response2.restaurants[i].restaurant.cuisines);
                        $(restaurantsP).append("<br/>" + response2.restaurants[i].restaurant.average_cost_for_two);
                        $(restaurantsP).append("<br/>" + response2.restaurants[i].restaurant.user_rating.aggregate_rating);
                    };
                    
                    $("#box-restaurants").prepend(restaurantsP);
                })

        })
}