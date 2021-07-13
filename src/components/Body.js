import { WeatherCard } from "../components/index";

export default function Body({ data }) {
  // const { data } = useContext(WeatherContext);

  // console.log("Data", data);

  return (
    <div>
      <WeatherCard
        location={data.name}
        temp={((data.main.temp * 9) / 5 + 32).toFixed(0)}
        weather={data.weather[0].main}
        icon={
          "http://openweathermap.org/img/w/" + data.weather[0]?.icon + ".png"
        }
        humidity={data.main.humidity}
        minTemp={((data.main.temp_min * 9) / 5 + 32).toFixed(0)}
        maxTemp={((data.main.temp_max * 9) / 5 + 32).toFixed(0)}
        feelsLike={((data.main.feels_like * 9) / 5 + 32).toFixed(0)}
      />
    </div>
  );
}
