CONCEPT:  SUITCASE

Concept overview: 
If you're heading on a trip, Suitcase is the only app you need.

Select your destination city, specify when you are going there, and Suitcase will provide you with all the essential information you need:

	² Weather
	² Travel  (flights, hotels, to be decided…)
	² Restaurants
	² Entertainment
	² Local news
	² (Exact scope to be decided)

INITIAL PSEUDOCODE

// The page loads with a generic background

// The user will be presented with 3 input fields:
	1. DESTINATION (City)
	2. TRAVEL TIMEFRAME (Start | End Dates)

// The user enters his/her inputs and hits the SUBMIT button

// The input fields and submit button will remain visible, so the user can make further requests

// The Suitcase app will then present 4 additional panes, e.g.
	² Weather
	² Travel
	² Restaurants
	² Entertainment

// (Any additional information will be requested via input fields)

//For each of the Panes (topics), the app will the assemble the API query URL and make the AJAX call

// The response object will then be logged in the console, to enable inspection

// For each Pane, the relevant data will be pulled out of the object and displayed to that pane


Advanced options:

// The header contains a drop-down menu, allowing the user to choose between different categories of information, e.g.

	² Travel  (including flights, hotels, tourist attractions)
	² Entertainment  (including concerts, restaurants, theatre)
	² News & Current Affairs  (content TBD)
	² Food & Drink  
	
// Based on the category selected, different information will be displayed in the Panes


Technologies to be used:

	- Coding language:  Javascript & jQuery
	- CSS:  Materialize (instead of Bootstrap)
	- Project management: GitHub
	- Responsive layout design
Firebase for persistent data storage