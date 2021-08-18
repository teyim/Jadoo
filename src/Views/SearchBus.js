import React from "react";
import NavBar from "Components/Layout/NavBar/NavBar";
import SelectMenu from "Components/SelectMenu/SelectMenu";
import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import Calender from "Components/Calender/Calender";
import Button from "Components/Button/Button";
import SingleSelect from "Components/CustomSelect/SingleSelect";
import GroupSelect from "Components/CustomSelect/GroupSelect";
import BusOptions from "Components/BusOptions/BusOptions";

export default function SearchBus() {
 return (
  <>
   <NavBar></NavBar>

   <div className="bg-blue-600 md:pt-1 md:pb-2 border-b-2 px-4 flex flex-col items-center md:flex-row md:justify-evenly md:align-baseline">
    <div>
     <h1 className="text-2xl text-white my-auto md:my-0 text-center md:text-left font-semibold">
      From
     </h1>
     <SelectMenu customStyle=""></SelectMenu>
    </div>
    <div className="my-3 md:my-0">
     <button
      className=" border-2 border-gray-300 shadow-md rounded-full p-2"
      onClick={() => alert("hello")}>
      <SwitchHorizontalIcon className="w-5 h-5 text-white"></SwitchHorizontalIcon>
     </button>
    </div>
    <div>
     <h1 className="text-2xl text-white text-center md:text-left font-semibold">
      To
     </h1>
     <SelectMenu customStyle=""></SelectMenu>
    </div>
    <div className="my-3 md:my-0">
     <h1 className="text-2xl text-center text-white md:text-left font-semibold">
      Select Date
     </h1>
     <Calender></Calender>
    </div>
    <div className="md:mt-6">
     <Button
      customStyle={
       " " +
       "bg-orange text-white font-semibold hover:bg-orangeDark my-3 shadow-md py-3 px-6 "
      }>
      Update Search
     </Button>
    </div>
   </div>
   <h1 className=" text-gray-600 font-boing font-medium text-xl text-center">
    Filter
   </h1>
   <div className="md:flex justify-center py-2 ">
    <div className="md:w-1/2 w-full md:flex  md:justify-evenly ">
     <div className=" md:w-1/4 w-4/5 mx-auto my-2 md:my-0">
      <p className="font-rubik font-medium text-lg text-gray-600">Bus type</p>
      <SingleSelect></SingleSelect>
     </div>
     <div className=" md:w-1/3 w-4/5 mx-auto my-2 md:my-0">
      <p className="font-rubik font-medium text-lg text-gray-600">
       Departure time
      </p>
      <GroupSelect></GroupSelect>
     </div>
     <div className=" md:w-1/4 w-4/5 mx-auto my-2 md:my-0">
      <p className="font-rubik font-medium text-lg text-gray-600">Agencies</p>
      <GroupSelect></GroupSelect>
     </div>
    </div>
   </div>
   <div>
    <BusOptions></BusOptions>
   </div>
  </>
 );
}
