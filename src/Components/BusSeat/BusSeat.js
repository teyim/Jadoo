import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import Button from "Components/Button/Button";

export default function BusSeat() {
 const [Seats, setSeats] = useState({
  Row1: {
   Seats: {
    1: "booked",
    2: "free",
    3: "free",
    4: "booked",
    5: "booked",
    6: "booked",
    7: "free",
    8: "booked",
    9: "free",
    10: "free",
    11: "free",
    12: "booked",
   },
  },
  Row2: {
   Seats: {
    13: "free",
    14: "free",
    15: "booked",
    16: "booked",
    17: "booked",
    18: "free",
    19: "booked",
    20: "free",
    21: "free",
    22: "free",
    23: "booked",
    24: "free",
   },
  },
 });

 return (
  <div className="md:px-9 px-2 my-3 font-rubik">
   <hr></hr>
   <div className=" bg-white md:px-4 w-full py-8 md:flex ">
    <div className="md:w-3/4 w-full h-48 flex border rounded border-gray-300 ">
     <div className="w-1/6 h-full flex flex-col justify-end p-5 ">
      <GiSteeringWheel className="w-8 h-8"></GiSteeringWheel>
     </div>
     <div className="w-full flex flex-col content-between  pt-4">
      <div className="w-11/12 h-2/4 pl-4 ">
       <div class="grid grid-cols-6 gap-2 overflow-hidden">
        {Object.entries(Seats.Row1.Seats).map((seat, i) => {
         if (seat[1] === "free") {
          return (
           <div
            className="border rounded bg-gray-300 text-center hover:bg-green-500 "
            key={i}>
            <div className="w-4/5 mx-auto text-center bg-gray-400 hover:bg-green-600 border-2 rounded cursor-pointer">
             {seat[0]}
            </div>
           </div>
          );
         } else
          return (
           <div className="border rounded bg-gray-500 text-center" key={i}>
            <div className="w-4/5 mx-auto text-center bg-gray-500  border-2 rounded cursor-not-allowed">
             {seat[0]}
            </div>
           </div>
          );
        })}
       </div>
      </div>

      <div className="w-11/12 h-2/4 pl-4 ">
       <div class="grid grid-cols-6 gap-2 overflow-hidden">
        {Object.entries(Seats.Row2.Seats).map((seat, i) => {
         if (seat[1] === "free") {
          return (
           <div
            className="border rounded bg-gray-300 text-center hover:bg-green-500 "
            key={i}>
            <div className="w-4/5 mx-auto text-center bg-gray-400 hover:bg-green-600 border-2 rounded cursor-pointer">
             {seat[0]}
            </div>
           </div>
          );
         } else
          return (
           <div className="border rounded bg-gray-500 text-center" key={i}>
            <div className="w-4/5 mx-auto text-center bg-gray-500  border-2 rounded cursor-not-allowed">
             {seat[0]}
            </div>
           </div>
          );
        })}
       </div>
      </div>
     </div>
    </div>
    <div className="md:w-3/12 my-2 md:my-0 border rounded flex flex-col py-4 md:mx-3">
     <div className="px-3 flex flex-col  h-full justify-evenly">
      <div className="flex justify-between ">
       <p>Seat(s)</p>
       <p className="font-semibold">2, 3, 4, 5</p>
      </div>
      <div className="flex justify-between">
       <p>Fare</p>
       <p className="font-semibold">15000</p>
      </div>
      <div className="flex justify-between ">
       <p className="font-semibold">Total</p>
       <p className="font-semibold">15,500fcfa</p>
      </div>
      <Button
       click={() => alert("hello")}
       customStyle={
        " " +
        "bg-green-400 text-white font-semibold hover:bg-green-500 mx-auto mt-2 md:mt-0 shadow-md py-3 px-6 "
       }>
       Continue
      </Button>
     </div>
    </div>
   </div>

   <div className=" w-1/2 mx-auto md:mx-0 md:px-6 md:flex md:w-1/3  py-2 md:justify-evenly">
    <div>
     {" "}
     <div className="border rounded bg-gray-300 text-center">
      <div className="w-4/5 mx-auto  font-medium text-center bg-gray-400 border-2 rounded cursor-pointer">
       seat
      </div>
     </div>
     <p>Available</p>
    </div>
    <div>
     {" "}
     <div className="border rounded bg-gray-500 text-center">
      <div className="w-4/5 font-medium mx-auto text-center bg-gray-500 border-2 rounded cursor-pointer">
       seat
      </div>
     </div>
     <p>Booked</p>
    </div>
    <div>
     {" "}
     <div className="border rounded bg-green-500 text-center">
      <div className="w-4/5 mx-auto text-center font-medium  bg-green-600 border-2 rounded cursor-pointer">
       seat
      </div>
     </div>
     <p>Selected</p>
    </div>
   </div>
  </div>
 );
}
