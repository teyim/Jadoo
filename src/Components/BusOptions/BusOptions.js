import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { FaCrown, FaBed } from "react-icons/fa";
import { FiMonitor, FiWifi } from "react-icons/fi";
import { BiPlug } from "react-icons/bi";
import { GiComputerFan } from "react-icons/gi";
import Button from "Components/Button/Button";
import BusSeat from "Components/BusSeat/BusSeat";

export default function BusOptions() {
 const [showSeats, setShowSeats] = useState(false);
 const toggleBusSeatsVisibility = () => {
  setShowSeats(prevState=>!prevState);
 };

 return (
  <div className="md:my-10 my-3 flex justify-center font-rubik text-gray-600">
   <div className="w-11/12  md:max-w-5xl hover:shadow-md hover:border-blue-600 py-3 px-2 rounded border-2 ">
    <div className=" w-full flex flex-col items-center md:flex-row ">
     <div className="md:w-4/5 w-full">
      <div className="md:flex flex-col md:flex-row justify-evenly">
       <div>
        <div className="flex justify-center md:justify-start">
         <p className="text-green-500 font-medium mx-1">4.3/5</p>
         <h1 className="font-boing font-semibold text-center md:text-left">
          Moghammo Express(NW234)
         </h1>
         <FaCrown className="w-4 h-4 mx-1 my-auto text-orangeDark"></FaCrown>
        </div>
        <p className="text-center md:text-left">Non AC Seater/Sleeper PersonalScreen</p>
       </div>
       <div className="flex justify-between my-2 w-full md:w-2/4 items-center">
        <div>
         <h1 className="font-boing font-semibold">09:30 PM</h1>
         <p>Bamenda</p>
        </div>
        <div>
         <ArrowRightIcon className="w-5 h-5 font-semibold mx-auto my-auto"></ArrowRightIcon>
         <p>8h20m</p>
        </div>
        <div>
         <h1 className="font-boing font-semibold">09:30 PM</h1>
         <p>Bamenda</p>
        </div>
        <div>
         <h1 className="font-boing font-semibold text-center md:text-left">
          Price
         </h1>
         <p>6000fcfa</p>
        </div>
       </div>
      </div>

      <div className=" md:w-1/5 mx-auto md:ml-12 py-1 my-2 md:my-0">
       <div className="flex w-full text-gray-600 justify-evenly">
        <FiMonitor className="w-5 h-5"></FiMonitor>
        <FiWifi className="w-5 h-5 "></FiWifi>
        <BiPlug className="w-5 h-5 "></BiPlug>
        <GiComputerFan className="w-5 h-5 "></GiComputerFan>
        <FaBed className="w-5 h-5 "></FaBed>
       </div>
      </div>
     </div>
     <div className="md:w-1/5 flex flex-col items-center justify-center ">
      <Button
       click={toggleBusSeatsVisibility}
       customStyle={
        " " +
        "bg-orange text-white font-semibold hover:bg-orangeDark  shadow-md py-3 px-6 "
       }>
       Select seat
      </Button>
      <p className="text-green-500">24 seats remaining</p>
     </div>
    </div>
    {showSeats ? <BusSeat></BusSeat> : null}
   </div>
  </div>
 );
}
