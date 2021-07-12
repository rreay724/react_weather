import React, { useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import WeatherContext from "../context/weatherContext";

function Header({ temp, location }) {
  const [zipCode, setZipCode] = useState("");
  const { data } = useContext(WeatherContext);
  console.log(data);

  return (
    <header>
      <div className="bg-blue-500 h-20 border-gray-500">
        <div className="container mx-auto h-full">
          <div className="flex justify-between h-full">
            <div className="mt-6 text-white">
              <h1>Weather</h1>
            </div>
            <div className="items-center align-items text-center mt-6 rounded-full w-72 h-8 bg-blue-700">
              <div className="mt-1 text-white">
                <input
                  aria-label="Enter zip code"
                  className="bg-blue-700 focus:outline-none"
                  placeholder="Search by Zip Code"
                  type="text"
                  onChange={({ target }) => setZipCode(target.value)}
                />
                <SearchIcon className="ml-16" />
              </div>
            </div>
            <div className="text-white mt-6">
              <p>US | °F</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-300 h-8">
        <div className="ml-16 flex">
          <div className="mt-2 flex">
            <img
              className="h-4 w-4"
              src="https://i.pinimg.com/originals/6f/4a/df/6f4adf551b05fda7db635aecddd560a0.png"
            />
          </div>

          <div className="flex mt-1 ml-1 text-white">
            <p className="">{((data.main.temp * 9) / 5 + 32).toFixed(0)}°</p>
            <p className="font-bold ml-2">{data.name}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
