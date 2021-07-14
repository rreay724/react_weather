import React from "react";

function ForecastWeatherCard({ temp, icon, weatherType, date, time }) {
  return (
    <div className="pt-5 px-2 text-center w-48 rounded-lg mx-auto my-2 h-64 border border-black bg-gradient-to-b from-blue-700 to-blue-200 text-white ">
      <p>{date}</p>
      <p>{time}</p>
      <h1 className="text-3xl mt-5">{temp}°F</h1>
      <img className="w-24 h-24 mx-auto" src={icon} alt="weather icon" />
      <p className="font-bold">{weatherType}</p>
    </div>
  );
}

export default ForecastWeatherCard;
