import React from "react";
import SelectMenu from "Components/SelectMenu/SelectMenu";
import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import Calender from "Components/Calender/Calender";
import Button from "Components/Button/Button";

export default function Header() {
  return (
    <div className=" max-w-8xl text-gray-700 font-rubik  bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 flex flex-col items-center overflow-hidden">
      <h1 className="mt-3 pt-4 font-semibold text-4xl text-center text-white ">
        Bus Ticket booking made Easy
      </h1>
      <h1 className="my-2 pt-4 text-white font-light text-2xl text-center">
        A step closer to your Destination
      </h1>
      <div className=" my-4 md:w-4/5 w-11/12 bg-gray-100 border-2 border-gray-200 shadow-sm rounded-md py-5 px-4 flex flex-col items-center md:flex-row md:justify-evenly md:align-baseline">
        <div>
          <h1 className="text-2xl my-auto md:my-0 text-center md:text-left font-semibold">
            From
          </h1>
          <SelectMenu customStyle=""></SelectMenu>
        </div>
        <div className="my-3 md:my-0">
          <button
            className=" border-2 border-blue-500 shadow-md rounded-full p-2"
            onClick={() => alert("hello")}>
            <SwitchHorizontalIcon className="w-5 h-5"></SwitchHorizontalIcon>
          </button>
        </div>
        <div>
          <h1 className="text-2xl text-center md:text-left font-semibold">
            To
          </h1>
          <SelectMenu customStyle=""></SelectMenu>
        </div>
        <div className="my-3 md:my-0">
          <h1 className="text-2xl text-center md:text-left font-semibold">
            Select Date
          </h1>
          <Calender></Calender>
        </div>
      </div>
      <div>
        <Button
          customStyle={
            " " +
            "bg-orange-500 text-gray-700 font-semibold hover:bg-gray-200 my-3 border shadow-md py-3 px-6"
          }>
          Search Bus
        </Button>
      </div>
    </div>
  );
}
