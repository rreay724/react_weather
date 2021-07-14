import { Header, Body } from "../components/index";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Geolocation from "@react-native-community/geolocation";

function Main() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      Geolocation.getCurrentPosition((info) => {
        setLat(info.coords.latitude);
        setLong(info.coords.longitude);
      });

      console.log("Latitude is:", lat);
      console.log("Longitude is:", long);

      // call current weather
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log("Result is:", result);
        });

      //call forecast weather
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((forecastRes) => forecastRes.json())
        .then((forecastResult) => {
          setForecastData(forecastResult);
          console.log("Forecast result is:", forecastResult);
        });
    };
    fetchData();

    console.log(data);
  }, [lat, long]);
  return (
    <div className="bg-gradient-to-b from-green-700 to-red-200 min-h-screen">
      {typeof data.main != "undefined" && forecastData.cod == "200" ? (
        <>
          <Header
            data={data}
            temp={data.main.temp.toFixed(0)}
            icon={
              "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            }
            location={data.name}
          />
          <Body data={data} forecastData={forecastData} />
        </>
      ) : (
        <div>
          <Header />
          <div className="w-11/12 md:w-6/12 mx-auto h-66 ">
            <Skeleton
              count={1}
              height={250}
              className=" border-black w-250 md:w-6/12 mt-10 py-3 rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
