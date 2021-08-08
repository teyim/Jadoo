import React from "react";
import cityImage from "../../../Assets/images/cityimage.jpg";
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
    <div className="max-w-8xl font-rubik md:my-20">
      <h1 className="text-blue-700 text-center  text-xl md:text-left font-bold my-3 md:pl-20 ">
        About Jadoo
      </h1>
      <div className="md:flex md:px-20 px-6">
        <div className="md:w-1/2  md:text-left text-center ">
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
          <div className="absolute mb-10 ml-10">
            <svg
              width="554"
              height="567"
              viewBox="0 0 654 667"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8" filter="url(#filter0_f)">
                <ellipse
                  cx="327"
                  cy="333.5"
                  rx="177"
                  ry="183.5"
                  fill="#59B1E6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f"
                  x="0"
                  y="0"
                  width="654"
                  height="667"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="75"
                    result="effect1_foregroundBlur"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="z-50 w-11/12 md:w-3/5 p-3 border border-blue-400 rounded-2xl shadow-lg h-full bg-white">
            <img
              src={cityImage}
              alt="city"
              className="rounded-md h-30 w-full "
            />
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
