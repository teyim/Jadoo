import React from "react";
import cityImage from "../../../Assets/images/images.jpeg";
import {
  SelectorIcon,
  CashIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

export default function AboutSection() {
  const steps = [
    {
      instructions:
        "Select your desired destination from a the list of travelling destinations",
    },
    {
      instructions:
        "Select your desired Bus and Bus seat from Available Agencies.",
    },
    {
      instructions:
        "Select your desired Bus and Bus seat from Available Agencies",
    },
    {
      instructions:
        "Select your desired destination from a the list of travelling destinations.",
    },
  ];
  return (
    <div className="max-w-8xl font-rubik my-6">
      <h1 className="text-blue-700 text-center font-bold text-4xl my-3">
        About Jadoo
      </h1>
      <div className="md:flex md:px-20 px-6">
        <div className="md:w-1/2  md:text-left text-center py-4">
          <h1 className="text-3xl font-bold text-gray-700">
            Jadoo makes your bus ticket booking easier with 4 easy steps
          </h1>
          <div className="text-gray-600 text-xl  md:text-lg md:grid md:grid-cols-2  my-3 font-normal">
            {steps.map((step, index) => {
              return (
                <div className="md:my-2">
                  <span className="py-2 px-6 md:py-1 md:px-3 rounded bg-orange text-white">
                    {index + 1}
                  </span>
                  <p className="my-3 md:my-1">{step.instructions}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" md:w-1/2 px-5 py-4 flex items-center justify-center ">
          <div className="w-11/12 md:w-3/5 p-3 border border-blue-400 rounded-2xl shadow-lg h-full ">
            <img src={cityImage} alt="city" className="rounded-md  w-full " />
            <div className="flex justify-evenly mt-2 text-gray-700 font-medium">
              <div>
                <SelectorIcon className="w-9 h-7 p-1 rounded bg-orange text-white"></SelectorIcon>
                <p>Select</p>
              </div>
              <div>
                <CashIcon className="w-9 h-7 p-1 rounded bg-orange text-white"></CashIcon>
                <p>Pay</p>
              </div>
              <div>
                <LocationMarkerIcon className="w-9 h-7 p-1 rounded bg-orange text-white"></LocationMarkerIcon>
                <p>Travel</p>
              </div>
            </div>
            <p className="text-center  text-gray-700 my-2 ">
              Getting to your desired travel destination has never been
              easier.with Jadoo,ticket booking wait times are eliminated making
              it posible for you to book your bus tickets any time,any place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
