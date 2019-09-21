﻿CONCEPT:  SUITCASE

Concept overview: 
If you're heading on a trip, Suitcase is the only app you need.

Select your destination city, specify when you are going there, and Suitcase will provide you with all the essential information you need:

INITIAL PSEUDOCODE

// The page loads with a generic background (Airport terminal backgroud)

// USER'S FIRST INTERACTION
	2. User selects TRAVEL DATE (14 Day Range)
		Start Date | End Date
			//After dates are selected, suitcase icon starts shaking with message to "Click Me". If user clicks icon, A destination will be slected at random.
	3. User selects city
	4. User hits SUBMIT button


// The input fields and submit button will remain visible, so the user can make further requests

// The Suitcase app will then present 4 additional panes, e.g.
	² Weather
	² Accommodations
	² Local
	² Entertainment

//CATEGORY BREAKDOWN
	WEATHER (Open Weather API)
	ACCOMMODATIONS (Trip Advisor API)
		FLIGHT
		HOTEL
		PUBLIC TRANSPORTATION
	LOCAL (Yelp API)
		BARS
		RESTAURANT
		CLUBS
	ENTERTAINMENT (Trip Advisor API)
		CONCERTS & SHOWS
		SIGHTS & LANDMARKS
		SHOPPING


//For each of the Panes (topics), the app will the assemble the API query URL and make the AJAX call

// The response object will then be logged in the console, to enable inspection

// For each Pane, the relevant data will be pulled out of the object and displayed to that pane

// Based on the category selected, different information will be displayed in the Panes


Technologies to be used:

	- Coding language:  Javascript & jQuery
	- CSS:  Materialize (instead of Bootstrap)
	- Project management: GitHub
	- Responsive layout design
Firebase for persistent data storage