import React, { useState, useEffect } from "react";
import { WeatherCard } from "../components/index";

export default function Body() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });

  //     await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  //     )
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setData(result);
  //         console.log("Results:", result);
  //       });
  //   };
  //   fetchData();
  // }, [lat, long]);

  // var temp = ((data.main.temp * 9) / 5 + 32).toFixed(0);
  // var humidity = data.main.humidity;
  // var maxTemp = data.main.temp_max.toFixed(0);
  // var minTemp = data.main.temp_min.toFixed(0);
  // var location = data.name;
  // var weather = data.weather[0].main;
  // var weatherIconSrc =
  //   "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  // var feelsLike = data.main.feels_like;

  const temp = 97;
  var humidity = 99;
  var maxTemp = 100;
  var minTemp = 77;
  const location = "University Center";
  var weather = "Cloudy";
  var weatherIconSrc =
    "https://image.flaticon.com/icons/png/512/169/169367.png";
  var feelsLike = 102;

  return (
    <div>
      <WeatherCard
        location={location}
        temp={temp}
        weather={weather}
        icon={weatherIconSrc}
        humidity={humidity}
        minTemp={minTemp}
        maxTemp={maxTemp}
        feelsLike={feelsLike}
      />
    </div>
  );
}
