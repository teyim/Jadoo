import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";

export default function TestimonialSection() {
  return (
    <div className="max-w-8xl text-center md:text-left font-boing md:flex overflow-hidden">
      <div className="md:px-20 px-6 w-full md:flex">
        <div className="flex-col justify-between">
          <h1 className="text-blue-700 font-bold my-3 text-xl">Testimonials</h1>
          <div className="">
            <h2 className="text-3xl font-bold text-gray-700">
              What people say about us
            </h2>
            <p className="text-gray-600 font-rubik my-3">
              We get alot of positive feedback from people who book with Jadoo.
            </p>
          </div>
          <div className="flex justify-center md:justify-start my-4">
            <div className="w-4  mx-2  h-4 rounded-full bg-gray-500"></div>
            <div className="w-4 mx-2  h-4 rounded-full bg-gray-300"></div>
            <div className="w-4 mx-2  h-4 rounded-full bg-gray-300"></div>
            <div className="w-4  mx-2 h-4 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="md:w-1/2 md:px-5 md:flex">
          <div className="md:w-11/12 ">
            <img
              className=" z-20 md:w-2/12 w-1/6 self-center mx-auto md:mx-2 rounded-2xl border border-blue-600  my-auto shadow-lg"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="w-3/4 shadow-xl rounded p-2 border md:ml-10 md:mb-5 mx-auto my-2 md:my-0">
              <p className="text-gray-700  font-rubik text-lg my-2">
                "I love Jadoo,booking my bus ticket has never been easier.i can
                just book my tickets within seconds rather than following long
                queues at Agencies,love it."
              </p>
              <h1 className="text-gray-700  font-rubik text-lg font-semibold">
                Fru Peterson
              </h1>
            </div>
          </div>
          <div className="hidden md:flex md:flex-col my-auto">
            <ChevronUpIcon className="w-4 h-4 "></ChevronUpIcon>
            <ChevronDownIcon className="w-4 h-4"></ChevronDownIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
