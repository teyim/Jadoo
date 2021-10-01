import React,{useState} from 'react'
import NavBar from 'Components/Layout/NavBar/NavBar'
import { ArrowRightIcon } from "@heroicons/react/outline";
import { FaCrown } from "react-icons/fa"
import Button from "Components/Button/Button";
import { useHistory } from "react-router";
import SingleSelect from 'Components/CustomSelect/SingleSelect';
import GroupSelect from 'Components/CustomSelect/GroupSelect';
import Input from "Components/Input/Input"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'
import Footer from 'Components/Layout/Footer/Footer';

export default function ReviewBooking() {
    const [value, setValue] = useState()
    const genders = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
    ]
    const history = useHistory();
    return (
        <>
            <NavBar disabled></NavBar>
            <div className="relative font-rubik text-gray-700">
                <div className="bg-blue-600 md:pt-1 md:pb-2 border-b-2 p-2 h-40 ">
                    <h1 className="text-center text-3xl font-semibold text-white my-2">Review your Booking</h1>
                    <h1 className="text-center text-2xl font-medium text-white my-2"> Bamenda-Yaounde | <span className="font-light">18 September 2021</span> </h1>
                </div>
                <div className="absolute w-full max-w-screen-2xl top-3/4  z-10 mx-auto">
                    <div className='w-full flex lg:flex-row flex-col lg:justify-evenly mb-8 '>
                    <div className='lg:w-3/5 w-11/12 mx-auto'>
                        <div className="rounded  shadow-sm bg-blue-100  px-3 py-5 ">
                            <div className="md:flex flex-col md:flex-row justify-evenly">
                                <div className='my-auto'>
                                    <div className="flex justify-center md:justify-start">
                                        <p className="text-green-600 font-medium mx-1">4.3/5</p>
                                        <h1 className="font-boing font-semibold text-center md:text-left">
                                            Moghammo Express(NW234)
                                        </h1>
                                        <FaCrown className="w-4 h-4 mx-1 my-auto text-orangeDark"></FaCrown>
                                    </div>
                                    <p className="text-center md:text-left">Non AC Seater/Sleeper PersonalScreen</p>
                                </div>
                                <div className="flex justify-between my-2 w-full md:w-2/4 items-center  font-normal">
                                    <div >
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
                            <div className='px-8 font-rubik flex'>
                                <h1 className='font-normal text-green-600'>
                            Selected Seat(s) >
                                </h1>
                                <p className='mx-2 font-semibold '>3,6,8</p>
                            </div>
                        </div>
                        <div className='rounded border-2 my-4 py-2 px-3'>
                            <div className='p-2'>
                                <h1 className='text-xl font-medium'>Travellers Details</h1>
                            </div>
                            <hr></hr>
                            <div className='p-2'>
                                <h3 className='text-gray-500'>please make sure you enter your name as on your Government ID card</h3>
                                <div className='py-3 px-4 border rounded my-2'>
                                        <div className='flex border-b'>
                                        <p className='mr-2 font-medium'>Seat Number</p>
                                        <p className='text-green-600'>1</p>
                                    </div>
                                        <div className='md:mt-2  my-1 md:my-0 md:flex justify-evenly'>
                                        <div className='md:w-1/4'>
                                            <p>Gender</p>
                                            <SingleSelect height={37} data={genders}></SingleSelect>
                                        </div>
                                        <div className='my-1 md:my-0'>
                                            <p>Full Name</p>
                                            <Input placeholder='Enter full name' type='text'></Input>
                                        </div>
                                        <div>
                                            <p>Age</p>
                                            <Input placeholder='Enter Age' type='number'></Input>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='rounded border-2 my-4 py-2 px-3'>
                            <div className='p-2'>
                                <h1 className='text-xl font-medium'>Loggage</h1>
                            </div>
                            <hr></hr>
                            <div className='flex w-full'>
                                <div className='p-2 md:w-1/3 w-full'>
                                    <p>Loggage type</p>
                                    <GroupSelect height={37}></GroupSelect>
                                </div>
                            </div>
                        </div>
                        <div className='rounded border-2 my-4 py-2 px-3'>
                            <div className='p-2'>
                                <h1 className='text-xl font-medium'>Personal Information</h1>
                            </div>
                            <hr></hr>
                            <div className='md:flex '>
                            <div className='p-2 md:w-1/3'>
                                <p>Email</p>
                                <Input placeholder='Enter Email address' type='mail'></Input>
                            </div>
                            <div className='p-2 md:w-1/3'>
                                <p>Phone Number</p>
                                <PhoneInput className='px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-2 outline-none focus:outline-none focus:ring w-full' country="CM" withCountryCallingCode international value={value} onChange={setValue} />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/12 w-11/12 mx-auto'>
                        <div className="my-2 shadow-sm md:my-0 border rounded flex flex-col py-4 md:mx-3 bg-blue-100 ">
                            <div className="px-3 flex flex-col h-full justify-evenly">
                                <div className="flex justify-between ">
                                    <p className='font-normal'>Seat(s)</p>
                                    <p className="font-semibold">3,4</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Fare</p>
                                    <p className="font-semibold">67,993</p>
                                </div>
                                <div className="flex justify-between mb-3 ">
                                    <p className="font-semibold">Total</p>
                                    <p className="font-semibold">78,003FcFa</p>
                                </div>
                                <Button
                                    click={() => history.push('/review')}
                                    customStyle={
                                        " " +
                                        ` bg-green-400 text-white font-semibold hover:bg-green-500 mx-auto mt-2 md:mt-0 shadow-md py-3 px-8 `
                                    }>
                                   Proceed to Payment
                                </Button>
                            </div>
                        </div>
                    </div>
                    </div>
                   <Footer></Footer>
                </div>
            </div>
        </>
    )
}
