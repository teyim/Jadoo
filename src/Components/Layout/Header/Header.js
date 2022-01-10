import React from "react";
import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import Calender from "Components/Calender/Calender";
import Button from "Components/Button/Button";
import { useHistory } from "react-router";
import SingleSelect from "Components/CustomSelect/SingleSelect";
import blob from "../../../Assets/images/blob.svg"
import { handleRegister} from '../../../Services/authServices'

export default function Header() {
  const history =useHistory();
  const routes = [
    { from: "Bamenda", to: "Douala" },
    { from: "Bamenda", to: "Yaounde" },
    { from: "Limbe", to: "Douala" },
    { from: "Buea", to: "Maroua" },
  ];
  const locations = [
    { name: "Bamenda" },
    { name: "Buea" },
    { name: "Douala" },
    { name: "Yaounde" },
    { name: "Kumba" },
    { name: "Baffousam" },
  ];

  return (
    <div className=" relative z-10 max-w-8xl py-4 text-gray-700 font-rubik  bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 overflow-hidden">
      <div className="z-10 w-full  flex flex-col items-center relative">
      <h1 className="mt-3 pt-4 font-semibold text-4xl text-center text-white ">
        Bus Ticket booking made Easy
      </h1>
      <h1 className="my-2 pt-4 text-white font-light text-2xl text-center">
        A step closer to your Destination
      </h1>
      <div className=" my-4 md:w-4/5 w-11/12 bg-gray-100 border-2 border-gray-200 shadow-sm rounded-md py-5 px-4 flex flex-col items-center md:flex-row md:justify-evenly md:align-baseline">
        <div className='md:w-1/4 w-9/12'>
          <h1 className="text-2xl my-auto md:my-0 text-center md:text-left font-semibold">
            From
          </h1>
          <SingleSelect height={40}></SingleSelect>
        </div>
        <div className="my-3 md:my-0">
          <button
            className=" border-2 border-blue-500 shadow-md rounded-full p-2"
            onClick={() => alert("hello")}>
            <SwitchHorizontalIcon className="w-5 h-5"></SwitchHorizontalIcon>
          </button>
        </div>
        <div className='md:w-1/4 w-9/12'>
          <h1 className="text-2xl text-center md:text-left font-semibold">
            To
          </h1>
          <SingleSelect height={40}></SingleSelect>
        </div>
        <div className="my-3 md:my-0">
          <h1 className="text-2xl text-center md:text-left font-semibold">
            Select Date
          </h1>
          <Calender padding='py-3'></Calender>
        </div>
      </div>
      <div className="hidden md:flex items-center my-2">
        <p className="py-1 px-2 rounded-3xl text-gray-700 border shadow bg-blue-300">
          Popular Bus routes
        </p>
        {routes.map((route) => (
          <div className="flex px-3 ">
            <p className="py-1 px-1 rounded shadow border text-gray-700  bg-blue-200">
              {route.from}
            </p>
            <SwitchHorizontalIcon className="w-6 h-6 my-auto text-gray-50"></SwitchHorizontalIcon>
            <p className="py-1 px-1 rounded shadow border text-gray-700  bg-blue-200">
              {route.to}
            </p>
          </div>
        ))}
      </div>
      <div>
        <Button
            click={() => history.push('/searchbus')}      
          customStyle={
            " " +
            "bg-orange text-white font-semibold hover:bg-orangeDark my-3 shadow-md py-3 px-6"
          }>
          Search Bus
        </Button>
      </div>
      </div>
     <img src={blob} alt='blob' className="w-50 h-50 top-10 right-10 absolute opacity-20"></img>
    </div>
  );
}
