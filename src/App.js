import "./App.css";
import { Header, Body } from "./components/index";
import WeatherContext from "./context/weatherContext";
import Weather from "./hooks/weather";

function App() {
  const { data } = Weather();
  return (
    <WeatherContext.Provider value={{ data }}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
