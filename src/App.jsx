import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import HoiurlyForecast from "./HoiurlyForecast";

const App = () => {
  return (
    <div
      className="flex justify-center items-center h-screen 
                    bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]
                    bg-cover bg-center"
    >
      <div className="h-fit w-fit bg-sky-600/50 backdrop-blur-[2px] flex flex-col center items-center px-3 py-4 rounded-lg shadow-lg">
        <h1 className="font-serif text-3xl font-medium text-black">
          Weather App 🌍
        </h1>
        {/* Searching function using form*/}
        <div>
          <form action="">
            {/* input box */}
            <div className="flex flex-wrap gap-2">
              <div className="relative w-64 mt-2">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  value=""
                  placeholder="Enter City Name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="hidden  md:flex py-2 justify-center items-center h-10 w-10 bg-green-500 rounded-md mt-2">
                <FaLocationDot className="text-white" />
              </div>
            </div>
          </form>
        </div>

        {/* Weather Data Display */}
        <div className="mt-4 text-center">
          <h1 className="text-xl font-semibold">Thimi</h1>
          {/* Weather Icon */}
          <img
            src="https://cdn.creazilla.com/icons/7911203/weather-icon-size_512.png"
            alt=""
            className="h-20 w-20"
          />
          <p className="text-lg font-semibold">
            20<sup className="ml-0.5 text-[10px]">0</sup>C{" "}
          </p>
          <p className="font-semibold text-sm capitalize">Cloudy</p>
        </div>
      <HoiurlyForecast/>




      </div>
    </div>
  );
};

export default App;
