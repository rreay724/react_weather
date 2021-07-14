import { WeatherCard, ForecastWeatherCard } from "../components/index";

export default function Body({ data, forecastData }) {
  // const { data } = useContext(WeatherContext);

  // console.log("Data", data);

  function convertTimestampDate(timestamp) {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
      dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
      hh = d.getHours(),
      h = hh,
      min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
      ampm = "AM",
      date;

    if (hh > 12) {
      h = hh - 12;
      ampm = "PM";
    } else if (hh === 12) {
      h = 12;
      ampm = "PM";
    } else if (hh == 0) {
      h = 12;
    }

    // ie: 2014-03-24, 3:00 PM
    // date = yyyy + "-" + mm + "-" + dd + "-" + yyyy ", " + h + ":" + min + " " + ampm;

    date = mm + "/" + dd + "/" + yyyy;
    return date;
  }

  function convertTimestampTime(timestamp) {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      hh = d.getHours(),
      h = hh,
      min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
      ampm = "AM",
      time;

    if (hh > 12) {
      h = hh - 12;
      ampm = "PM";
    } else if (hh === 12) {
      h = 12;
      ampm = "PM";
    } else if (hh == 0) {
      h = 12;
    }

    time = h + ":" + min + " " + ampm;
    return time;
  }

  function convertKelvinToF(temp) {
    return (((temp - 273.15) * 9) / 5 + 32).toFixed(0);
  }

  function convertCelciusToF(temp) {
    return ((temp * 9) / 5 + 32).toFixed(0);
  }

  return (
    <div>
      <div>
        <WeatherCard
          location={data.name}
          temp={convertCelciusToF(data.main.temp)}
          weather={data.weather[0].main}
          icon={
            "http://openweathermap.org/img/w/" + data.weather[0]?.icon + ".png"
          }
          humidity={data.main.humidity}
          minTemp={convertCelciusToF(data.main.temp_min)}
          maxTemp={convertCelciusToF(data.main.temp_max)}
          feelsLike={convertCelciusToF(data.main.feels_like)}
          windSpeed={(data.wind.speed * 2.237).toFixed(0)}
          visibility={(data.visibility / 1609).toFixed(0)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {forecastData.list.map((item) => (
          <ForecastWeatherCard
            date={convertTimestampDate(item.dt)}
            temp={convertKelvinToF(item.main.temp)}
            icon={
              "http://openweathermap.org/img/w/" +
              item.weather[0]?.icon +
              ".png"
            }
            time={convertTimestampTime(item.dt)}
            weatherType={item.weather[0]?.main}
          />
        ))}
      </div>
    </div>
  );
}
