import { Header, Body, Loading } from "../components/index";
import React, { useState, useEffect } from "react";

function Main() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      console.log("Latitude is:", lat);
      console.log("Longitude is:", long);

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log("Result is:", result);
        });
    };
    fetchData();

    console.log(data);
  }, [lat, long]);
  return (
    <div className="bg-gradient-to-b from-green-700 to-red-200 min-h-screen">
      {typeof data.main != "undefined" ? (
        <>
          <Header
            data={data}
            temp={((data.main.temp * 9) / 5 + 32).toFixed(0)}
            icon={
              "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            }
            location={data.name}
          />
          <Body data={data} />
        </>
      ) : (
        <div>
          <Header />
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Main;