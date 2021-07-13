import React, { useEffect, useState } from "react";
import { Header, Loading } from "../components/index";

function WeatherSearchPage() {
  const [data, setData] = useState([]);
  var zipCode = localStorage.zipCode;
  //   var zipCode = 20175;
  console.log("Local storage value", zipCode);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log("Weather page result: ", result);
        });
    };
    fetchData();
    console.log(data);
  }, [zipCode]);

  return (
    <div>
      {data != "" ? (
        <div>
          <Header
            data={data}
            temp={(((data.list[0]?.main.temp - 273.15) * 9) / 5 + 32).toFixed(
              0
            )}
            icon={
              "http://openweathermap.org/img/w/" +
              data.list[0]?.weather[0].icon +
              ".png"
            }
            location={data.name}
          />
          <p>{data.city.name}</p>
          <p>{data.list[0]?.weather[0]?.description}</p>
          <p>
            {(((data.list[0]?.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)}
          </p>
        </div>
      ) : (
        <div>
          <Header />
          <Loading />
        </div>
      )}
    </div>
  );
}

export default WeatherSearchPage;
