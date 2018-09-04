export default function mainFunc() {
    var input = document.getElementById('search_str');

    if (input.value != '') {

        var param = document.getElementById('search_str').value;
        const Http = new XMLHttpRequest();
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + param + '&units=metric' + '&APPID=a701373c514912374872f7a940df00a7';

        Http.open("GET", url);
        Http.send();
        Http.onload = (e) => {
            console.log(Http.responseText);

            var resp = document.getElementById('response');
            resp = Http.responseText;
            var respJSON = JSON.parse(resp);

            //выводим иконку погоды
            var icon = respJSON.weather[0].icon;
            // response.innerHTML = icon;
            // console.log(icon);
            // resp = document.getElementById('weatherImg').setAttribute('src', "http://openweathermap.org/img/w/" + icon + ".png");


//Выводим флаг стран
            var res = respJSON.sys.country.toLowerCase();
            var resFlags = document.getElementById('flags').setAttribute('src', "http://openweathermap.org/images/flags/" + res + ".png");

            // console.log(respJSON.sys.country)

            var cityName = respJSON.name;
            var countryn = respJSON.sys.country;
            var weatherMain = respJSON.weather[0].main;
            var description = respJSON.weather[0].description;
            var mainTemp = respJSON.main.temp;
            var pressure = respJSON.main.pressure;
            var humidity = respJSON.main.humidity;

            var tempMin = respJSON.main.temp_min;
            var tempMax = respJSON.main.temp_max;

            var windSpeed = respJSON.wind.speed;
            var windDeg = respJSON.wind.deg;


            response.innerHTML = "<h2>Current Weather for " + "<img src='http://openweathermap.org/images/flags/" + res + ".png'>" +cityName + " ," + countryn + "<h2>" +
                "<h3>Weather: " + weatherMain + "<h3>" +
                "<h3 stype='padding-left:10px'>Description: <img src='http://openweathermap.org/img/w/" + icon + ".png '> " + description + "<h3>" +
                "<h3>Temperature: " + mainTemp + "&deg;C<h3>" +
                "<h3>Pressure: " + pressure + " hPa<h3>" +
                "<h3>Humidity: " + humidity + "%<h3>" +
                "<h3>Min. Temperature: " + tempMin + "&deg;C<h3>" +
                "<h3>Max. Temperature: " + tempMax + "&deg;C<h3>" +
                "<h3>Wind Speed: " + windSpeed + "m/s<h3>" +
                "<h3>Wind Direction: " + windDeg + "&deg;<h3>";

            console.log(weatherMain, description, mainTemp, pressure, humidity, tempMin, tempMax, windSpeed, windDeg, countryn, cityName)
        }
        ;

    } else {
        document.getElementById('error').innerHTML = "<div class='alert alert-danger ' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field can not be empty</div>"

    }
}