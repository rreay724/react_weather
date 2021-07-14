import React, { useEffect, useState } from "react";
import { Header, Body } from "../components/index";
import Skeleton from "react-loading-skeleton";

function WeatherSearchPage() {
  const [data, setData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState([]);
  var zipCode = localStorage.zipCode;
  //   var zipCode = 20175;
  console.log("Local storage value", zipCode);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log("Weather page result: ", result);
        });

      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((forecastRes) => forecastRes.json())
        .then((forecastResult) => {
          setForecastData(forecastResult);
          console.log("Forecast result is:", forecastResult);
        });
    };
    fetchData();
    console.log(data);
  }, [zipCode]);

  return (
    <div className="bg-gradient-to-b from-green-700 to-green-200 min-h-screen">
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
            {forecastData.message == "city not found" ? (
              <p className="text-white text-center md:mt-96 ml:mt-96 mt-48">
                City not found. Please try another zip code
              </p>
            ) : (
              <Skeleton
                count={1}
                height={250}
                className=" border-black w-250 md:w-6/12 mt-10 py-3 rounded-lg shadow-xl"
              />
            )}
          </div>
        </div>
      )}
    </div>
    // <div>
    //   {data != "" ? (
    //     <div>
    //       <Header
    //         data={data}
    //         temp={(((data.list[0]?.main.temp - 273.15) * 9) / 5 + 32).toFixed(
    //           0
    //         )}
    //         icon={
    //           "http://openweathermap.org/img/w/" +
    //           data.list[0]?.weather[0].icon +
    //           ".png"
    //         }
    //         location={data.city.name}
    //       />
    //       <p>{data.city.name}</p>
    //       <p>{data.list[0]?.weather[0]?.description}</p>
    //       <p>
    //         {(((data.list[0]?.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)}
    //       </p>
    //     </div>
    //   ) : (
    //     <div>
    //       <Header />
    //       <Loading />
    //     </div>
    //   )}
    // </div>
  );
}

export default WeatherSearchPage;
