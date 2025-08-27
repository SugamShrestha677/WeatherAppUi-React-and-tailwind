import React from "react";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const HoiurlyForecast = () => {
  return (
    <div className="relative w-[300px] overflow-hidden">

    <div className="flex gap-3">
      <div className="mt-3 w-fit h-fit p-3 shadow-black bg-green-300/30 shadow-md rounded-sm">
        <p>08:00</p>
        <img
          src="https://cdn.creazilla.com/icons/7911203/weather-icon-size_512.png"
          alt=""
          className="w-8 h-8"
        />
        <p>
          5<sup className="ml-0.5 text-[8px]">0</sup>C
        </p>
      </div>
      <div className="mt-3 w-fit h-fit p-3 shadow-black bg-green-300/30 shadow-md rounded-sm">
        <p>08:00</p>
        <img
          src="https://cdn.creazilla.com/icons/7911203/weather-icon-size_512.png"
          alt=""
          className="w-8 h-8"
        />
        <p>
          5<sup className="ml-0.5 text-[8px]">0</sup>C
        </p>
      </div>
      <div className="mt-3 w-fit h-fit p-3 shadow-black bg-green-300/30 shadow-md rounded-sm">
        <p>08:00</p>
        <img
          src="https://cdn.creazilla.com/icons/7911203/weather-icon-size_512.png"
          alt=""
          className="w-8 h-8"
        />
        <p>
          5<sup className="ml-0.5 text-[8px]">0</sup>C
        </p>
      </div>
      <div className="mt-3 w-fit h-fit p-3 shadow-black bg-green-300/30 shadow-md rounded-sm">
        <p>08:00</p>
        <img
          src="https://cdn.creazilla.com/icons/7911203/weather-icon-size_512.png"
          alt=""
          className="w-8 h-8"
        />
        <p>
          5<sup className="ml-0.5 text-[8px]">0</sup>C
        </p>
      </div>
      <div className="mt-3 w-fit h-fit p-3 shadow-black bg-green-300/30 shadow-md rounded-sm">
        <p>08:00</p>
        <img
          src="https://cdn.creazilla.com/icons/7911203/weather-icon-size_512.png"
          alt=""
          className="w-8 h-8"
        />
        <p>
          5<sup className="ml-0.5 text-[8px]">0</sup>C
        </p>
      </div>
      <div className="mt-3 w-fit h-fit p-3 shadow-black bg-green-300/30 shadow-md rounded-sm">
        <p>08:00</p>
        <img
          src="https://cdn.creazilla.com/icons/7911203/weather-icon-size_512.png"
          alt=""
          className="w-8 h-8"
        />
        <p>
          5<sup className="ml-0.5 text-[8px]">0</sup>C
        </p>
      </div>
    </div>
      <button className="absolute left-0 top-1/2 mt-2">
        <FaChevronLeft />
      </button>
      <button className="absolute right-0 top-1/2 mt-2">
        <FaChevronRight />
      </button>
      
    </div>
  );
};

export default HoiurlyForecast;
