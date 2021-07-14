import React from "react";
import moment from "moment";

function WeatherCard({
  location,
  temp,
  weather,
  icon,
  humidity,
  minTemp,
  maxTemp,
  feelsLike,
  windSpeed,
  visibility,
}) {
  return (
    <div className="flex leading-7 h-66 border border-black w-11/12 md:w-6/12 mx-auto mt-10 py-3 rounded-lg bg-gradient-to-b from-blue-700 to-blue-200 text-white shadow-xl">
      <div className="p-3 my-auto mx-auto text-left">
        <p>{location}</p>
        <p className=" text-5xl">{temp} °F</p>
        <p className="text-sm">As of: {moment().format("h:mm a")}</p>
        <p className="font-bold">{weather}</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind speed: {windSpeed} mph</p>
        <p>Visibility: {visibility} mi</p>
      </div>
      <div className="mx-auto text-center pb-10 my-auto">
        <img className="h-28 w-28 " src={icon} />
        <p className="text-lg font-bold">
          {maxTemp}° / {minTemp}°
        </p>
        <p>Feels like: {feelsLike}°</p>
      </div>
    </div>
  );
}

export default WeatherCard;
