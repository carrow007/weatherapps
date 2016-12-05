window.onload = function () {

var goButton  = document.getElementById('goButton');
var zipInput  = document.getElementById('zipInput');
var dateInput = document.getElementById('dateInput');

var url     = 'http://localhost:8080';
var Weather = [];

  function displayContnet(response) {


}

//// button
  document.getElementById('goButton').addEventListener('click', function () {
    event.preventDefault();


var endpointURL       = "http://api.wunderground.com/api/6ea7cf3bc006012f/forecast10day/geolookup/q/";
var zipQuery          = zipInput.value;
var dateQuery         = "&date=" + dateInput.value + ".json";
var fullQuery         = endpointURL + zipQuery + dateQuery;

  $.ajax({
    url: fullQuery
  }).done(function(response) {
    console.log("response: ", response);
    displayContnet(response)
  })

  })
}
