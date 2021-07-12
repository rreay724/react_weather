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
    <div>
      <div className="">
        <div className="grid grid-cols-2  border border-black w-7/12  mx-auto mt-10 p-3 rounded-lg bg-gradient-to-b from-blue-700 to-blue-200 text-white">
          <div className="p-3 my-auto mx-auto text-left">
            <p>{location}</p>
            <p className=" text-5xl">{temp} °F</p>

            <p className="font-bold">{weather}</p>
            <p>Humidity: {humidity}%</p>
          </div>
          <div className="p-3 mx-auto my-auto">
            <img className="h-16 w-16 mx-auto" src={icon} />
            <p className="my-auto mt-3 text-lg font-bold">
              {minTemp}° / {maxTemp}°
            </p>
            <p>Feels like: {feelsLike}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
