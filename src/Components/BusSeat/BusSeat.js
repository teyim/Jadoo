import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineWarning} from "react-icons/ai"
import Button from "Components/Button/Button";

export default function BusSeat() {
  const history = useHistory();
  const [selectedSeats, setSelectedSeats] = useState([]);
 const [fare,setFare]=useState(0)
 const [Seats, setSeats] = useState({
  Row1: [
   { seatNumber: 1, status: "booked" },
   { seatNumber: 2, status: "booked" },
   { seatNumber: 3, status: "free" },
   { seatNumber: 4, status: "booked" },
   { seatNumber: 5, status: "free" },
   { seatNumber: 6, status: "booked" },
   { seatNumber: 7, status: "booked" },
   { seatNumber: 8, status: "free" },
   { seatNumber: 9, status: "free" },
   { seatNumber: 10, status: "free" },
   { seatNumber: 11, status: "free" },
   { seatNumber: 12, status: "booked" },
  ],
  Row2: [
   { seatNumber: 13, status: "booked" },
   { seatNumber: 14, status: "booked" },
   { seatNumber: 15, status: "free" },
   { seatNumber: 16, status: "booked" },
   { seatNumber: 17, status: "free" },
   { seatNumber: 18, status: "free" },
   { seatNumber: 19, status: "booked" },
   { seatNumber: 20, status: "free" },
   { seatNumber: 21, status: "free" },
   { seatNumber: 22, status: "free" },
   { seatNumber: 23, status: "free" },
   { seatNumber: 24, status: "booked" },
  ],
 });
   
 useEffect(()=>{
  setFare(prevState=>{
    const seatCost=5000*selectedSeats.length
    return seatCost
  })
 },[selectedSeats])

 const handleSelectedSeat = (seatNumber, RowNumber) => {
  if (RowNumber === "Row1") {
   setSeats((prevState) => ({
    Row1: prevState.Row1.map((seat) => {
     if (
      seat.seatNumber === seatNumber &&
      seat.status !== "selected" &&
      selectedSeats.length < 4
     ) {
      setSelectedSeats((prevState) => [...prevState, seatNumber]);
      return { ...seat, status: "selected" };
     } else if (seat.seatNumber === seatNumber && seat.status === "selected") {
      setSelectedSeats((prevState) =>
       prevState.filter(
        (SelectedSeatNumber) => SelectedSeatNumber !== seatNumber,
       ),
      );
      return { ...seat, status: "free" };
     } else {
      return seat;
     }
    }),
    Row2: prevState.Row2,
   }));
  } else
   setSeats((prevState) => ({
    Row1: prevState.Row1,
    Row2: prevState.Row2.map((seat) => {
     if (
      seat.seatNumber === seatNumber &&
      seat.status !== "selected" &&
      selectedSeats.length < 4
     ) {
      setSelectedSeats((prevState) => [...prevState, seatNumber]);
      return { ...seat, status: "selected" };
     } else if (seat.seatNumber === seatNumber && seat.status === "selected") {
      setSelectedSeats((prevState) =>
       prevState.filter(
        (SelectedSeatNumber) => SelectedSeatNumber !== seatNumber,
       ),
      );
      return { ...seat, status: "free" };
     } else {
      return seat;
     }
    }),
   }));
 };

 const handleSeatClicked = (seatNumber, rowNumber) => {
  handleSelectedSeat(seatNumber, rowNumber);
 };

 return (
  <div className="md:px-9 px-2 my-3 font-rubik">
   <hr></hr>
   <h1 className="font-rubik text-xl font-medium text-gray-600 mt-3 text-center ">Select bus seats</h1>
  {selectedSeats?.length === 4 ? <h2 className="font-rubik text-md font-medium text-red-400 text-center mb-0"><AiOutlineWarning className="w-5 h-5 my-auto mb-1 inline"/>Cannot book more than 4 seats</h2>:null}
   <div className=" bg-white md:px-4 w-full py-8 md:flex ">
    <div className="md:w-3/4 w-full h-48 flex border rounded border-gray-300 ">
     <div className="w-1/6 h-full md:flex flex-col p-4 justify-end hidden">
      <GiSteeringWheel className="w-8 h-8"></GiSteeringWheel>
     </div>
     <div className="w-full flex flex-col content-between pt-4">
      <div className="w-11/12 h-2/4 pl-4 ">
       <div class="grid grid-cols-6 gap-2 overflow-hidden">
        {Seats?.Row1.map((seat, i) => {
         if (seat.status === "free") {
          return (
           <div
            className="border rounded bg-gray-300 text-center"
            key={i}
            onClick={() => handleSeatClicked(seat.seatNumber, "Row1")}>
            <div className="w-4/5 mx-auto text-center bg-gray-400  border-2 rounded cursor-pointer">
             {seat.seatNumber}
            </div>
           </div>
          );
         } else if (seat.status === "selected") {
          return (
           <div
            className="border rounded bg-green-500 text-center"
            key={i}
            onClick={() => handleSeatClicked(seat.seatNumber, "Row1")}>
            <div className="w-4/5 mx-auto text-center  bg-green-600 border-2 rounded cursor-pointer">
             {seat.seatNumber}
            </div>
           </div>
          );
         } else {
          return (
           <div className="border rounded bg-gray-500 text-center" key={i}>
            <div className="w-4/5 mx-auto text-center bg-gray-500  border-2 rounded cursor-not-allowed">
             {seat.seatNumber}
            </div>
           </div>
          );
         }
        })}
       </div>
      </div>

      <div className="w-11/12 h-2/4 pl-4 ">
       <div class="grid grid-cols-6 gap-2 overflow-hidden">
        {Seats?.Row2?.map((seat, i) => {
         if (seat.status === "free") {
          return (
           <div
            className="border rounded bg-gray-300 text-center  "
            key={i}
            onClick={() => handleSeatClicked(seat.seatNumber, "Row2")}>
            <div className="w-4/5 mx-auto text-center bg-gray-400 border-2 rounded cursor-pointer">
             {seat.seatNumber}
            </div>
           </div>
          );
         } else if (seat.status === "selected") {
          return (
           <div
            className="border rounded bg-green-500 text-center"
            key={i}
            onClick={() => handleSeatClicked(seat.seatNumber, "Row2")}>
            <div className="w-4/5 mx-auto text-center  bg-green-600 border-2 rounded cursor-pointer">
             {seat.seatNumber}
            </div>
           </div>
          );
         } else {
          return (
           <div className="border rounded bg-gray-500 text-center" key={i}>
            <div className="w-4/5 mx-auto text-center bg-gray-500  border-2 rounded cursor-not-allowed">
             {seat.seatNumber}
            </div>
           </div>
          );
         }
        })}
       </div>
      </div>
     </div>
    </div>
    <div className="md:w-3/12 my-2 md:my-0 border rounded flex flex-col py-4 md:mx-3">
     <div className="px-3 flex flex-col  h-full justify-evenly">
      <div className="flex justify-between ">
       <p>Seat(s)</p>
       <p className="font-semibold">{selectedSeats.join(",")}</p>
      </div>
      <div className="flex justify-between">
       <p>Fare</p>
       <p className="font-semibold">{fare}</p>
      </div>
      <div className="flex justify-between ">
       <p className="font-semibold">Total</p>
       <p className="font-semibold">{`${fare}FcFa`}</p>
      </div>
      <Button
      click={() => history.push('/review')}
      disabled={selectedSeats?.length < 1}
       customStyle={
        " " +
         `${selectedSeats?.length < 1 ? ' cursor-not-allowed opacity-60 ' : ''} bg-green-400 text-white font-semibold hover:bg-green-500 mx-auto mt-2 md:mt-0 shadow-md py-3 px-6 `
       }>
       Continue
      </Button>
     </div>
    </div>
   </div>

   <div className=" w-1/2 mx-auto md:mx-0 md:px-6 md:flex md:w-1/3  py-2 md:justify-evenly">
    <div className="my-2 md:my-0">
     {" "}
     <div className="border rounded bg-gray-300 text-center">
      <div className="w-4/5 mx-auto  font-medium text-center bg-gray-400 border-2 rounded cursor-pointer">
       seat
      </div>
     </div>
     <p>Available</p>
    </div>
       <div className="my-2 md:my-0">
     {" "}
     <div className="border rounded bg-gray-500 text-center">
      <div className="w-4/5 font-medium mx-auto text-center bg-gray-500 border-2 rounded cursor-pointer">
       seat
      </div>
     </div>
     <p>Booked</p>
    </div>
       <div className="my-2 md:my-0">
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
