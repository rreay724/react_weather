import React from "react";

function WeatherCard({
  location,
  temp,
  weather,
  icon,
  humidity,
  minTemp,
  maxTemp,
  feelsLike,
}) {
  return (
    <div className="flex h-48 border border-black w-11/12 md:w-6/12 mx-auto mt-10 py-3 rounded-lg bg-gradient-to-b from-blue-700 to-blue-200 text-white shadow-xl">
      <div className="p-3 my-auto mx-auto text-left">
        <p>{location}</p>
        <p className=" text-5xl">{temp} °F</p>

        <p className="font-bold">{weather}</p>
        <p>Humidity: {humidity}%</p>
      </div>
      <div className=" mx-auto">
        <img className="h-28 w-28" src={icon} />
        <p className="text-center text-lg font-bold">
          {minTemp}° / {maxTemp}°
        </p>
        <p className="text-center">Feels like: {feelsLike}°</p>
      </div>
    </div>
  );
}

export default WeatherCard;
