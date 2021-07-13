import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

function Header({ location, temp, icon, data }) {
  const [zipCode, setZipCode] = useState("");
  const history = useHistory();

  const handleSearch = async (event) => {
    event.preventDefault();
    localStorage.zipCode = zipCode;
    history.push(ROUTES.WEATHER_SEARCH_PAGE);
  };

  return (
    <header>
      <div className="bg-blue-500 h-20 border-gray-500">
        <div className="container px-5 md:mx-auto h-full">
          <div className="flex justify-between h-full">
            <div className="mt-6 text-white">
              <Link to={ROUTES.MAIN_PAGE}>
                <h1>Weather</h1>
              </Link>
            </div>
            <div className="items-center align-items text-center mt-6 rounded-full w-72 h-8 bg-blue-700">
              <form onSubmit={handleSearch}>
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
              </form>
            </div>
            <div className="text-white mt-6">
              <p>US | °F</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-300 h-8">
        <div className="ml-16 flex">
          {data ? (
            <div className="flex">
              <img className="h-8 w-8" src={icon} />
            </div>
          ) : (
            <div className="flex"></div>
          )}

          <div className="flex mt-1 ml-1 text-white">
            {data ? (
              <>
                <p className="">{temp}°</p>
                <p className="font-bold ml-2">{location}</p>
              </>
            ) : (
              <>
                <p className="">-°</p>
                <p className="font-bold ml-2">--</p>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
