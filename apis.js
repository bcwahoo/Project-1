var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "AccuWeatherstefan-skliarovV1.p.rapidapi.com",
		"x-rapidapi-key": "e3f35368bdmsheaf36be3f76863bp1b27c9jsn06d6a302ff59",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});