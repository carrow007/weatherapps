window.onload = function () {

var goButton      = document.getElementById('goButton');
var zipInput      = document.getElementById('zipInput');
var restartButton = document.getElementById('restartButton')

var url     = 'http://carrow007.github.io/weatherapps/';
var Weather = [];

  function displayContnet(response) {

    var weatherTopContent = document.getElementById('weatherTopContainer')
    var weatherContent = document.getElementById('weatherContainer')

      //creating main card
      var mainCards = document.createElement('div')
      mainCards.className = 'mainCards'

      //location of weather
      var location = 'Weather Forecast for ' + response.location.city + ", " + response.location.state;
      var locationDiv = document.createElement('div');
      locationDiv.className = 'locationDiv'
      locationDiv.appendChild(document.createTextNode(location));
      mainCards.appendChild(locationDiv)

      weatherTopContent.appendChild(mainCards)





        var weatherArray = response.forecast.simpleforecast.forecastday
          for(var i = 0; i < weatherArray.length; i++) {
            var array = weatherArray.slice(0, 3);
            console.log(weatherArray.length)

          //creating the weather cards
          var weatherCards = document.createElement('div')
          weatherCards.className = 'weatherCards'


          //the day of the week
          var date = array[i].date.weekday + ':';
          var dateDiv = document.createElement('div');
          dateDiv.className = 'dateDiv'
          dateDiv.appendChild(document.createTextNode(date));
          weatherCards.appendChild(dateDiv)

          //appening the image of the condition
          var icon = '<img class ="picture" src="' + array[i].icon_url + '"/>';
          var iconDiv = document.createElement('div');
          iconDiv.className = 'iconDiv';
          iconDiv.innerHTML = icon
          weatherCards.appendChild(iconDiv)

          //appending the conditions
          var conditions = array[i].conditions;
          var conditionsDiv = document.createElement('div');
          conditionsDiv.className = 'conditionsDiv';
          conditionsDiv.appendChild(document.createTextNode(conditions));
          weatherCards.appendChild(conditionsDiv)

          //temperature
          var temperature =  array[i].high.fahrenheit + "/" + array[i].low.fahrenheit + " F"
          var temperatureDiv = document.createElement('div');
          temperatureDiv.className = 'temperatureDiv';
          temperatureDiv.appendChild(document.createTextNode(temperature));
          weatherCards.appendChild(temperatureDiv)




          weatherContent.appendChild(weatherCards)

    }


}


  function displayError(response) {

      var errorContent = document.getElementById('errorContainer')

        var error = response.response.error.description;
        var errorDiv = document.createElement('div');
        errorDiv.className = 'errorDiv'
        errorDiv.appendChild(document.createTextNode(error));
        errorContent.appendChild(errorDiv)

  }


  // reload the page

  document.getElementById('restartButton').addEventListener('click', function () {
    location.reload();
  })

  // event listener
  document.getElementById('goButton').addEventListener('click', function () {
    event.preventDefault();


var endpointURL       = "http://api.wunderground.com/api/6ea7cf3bc006012f/forecast10day/geolookup/q/";
var zipQuery          = zipInput.value + ".json";
var fullQuery         = endpointURL + zipQuery;

  $.ajax({
    url: fullQuery,
    callback: function(error, response, body) {
      console.log(body);
      response.send(body);
    }

  }).done(function(response) {
    console.log("response: ", response);
      if (response.forecast){
      displayContnet(response);
    } else {
      displayError(response);
          }

      })

    })

  }
