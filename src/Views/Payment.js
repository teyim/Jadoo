import React, { useState } from 'react'
import NavBar from 'Components/Layout/NavBar/NavBar'
import Button from "Components/Button/Button";
import { useHistory } from "react-router";
import SingleSelect from 'Components/CustomSelect/SingleSelect';
import Footer from 'Components/Layout/Footer/Footer';
import { ModalProvider } from 'Context/context';



const Payment = () => {
    const [value, setValue] = useState()
    const history = useHistory();
    const paymentOptions = [
        { value: "MOMO", label: "MTN mobile money" },
        { value: "OMO", label: "Orange money" },
        { value: "PAYPAL", label: "Paypal" },
        { value: "CARD", label: "Debit/Credit Card" },
    ]

    const handleChosenOption=(value)=>{
        setValue(value)
    }
  
    return (
        <>
        <ModalProvider>
            <NavBar disabled></NavBar>
            <div className="relative font-rubik text-gray-700">
                <div className="bg-blue-600 md:pt-1 md:pb-2 border-b-2 p-2 h-40 ">
                    <h1 className="text-center text-3xl font-semibold text-white my-2">Payment</h1>
                    <h1 className="text-center text-2xl font-medium text-white my-2"> Bamenda-Yaounde | <span className="font-light">18 September 2021</span> </h1>
                </div>
                <div className="absolute w-full top-3/4  z-10 mx-auto">
                    <div className='w-full flex lg:flex-row flex-col lg:justify-evenly mb-8 '>
                        <div className='lg:w-3/5 w-11/12 mx-auto'>
                            <div className='rounded border-2 my-4 py-2 px-3 bg-white shadow-sm'>
                                <div className='p-2'>
                                    <h1 className='text-xl font-medium'>Traveller(s) Info</h1>
                                </div>
                                <hr></hr>
                                <div className='p-2'>
                                    <h1 className='my-2'><span className='text-blue-600 font-semibold'>Agency</span>: Moghammo Express(NW234)</h1>
                                    <h1 className='my-2'><span className='text-blue-600 font-semibold'>Travellers</span>: Teyim Asobo,Fru Njonas</h1>
                                    <h1 className='my-2'><span className='text-blue-600 font-semibold'>Primary contact</span>: 7428723247 teyimasobo@gmail.com</h1>
                                    <h1 className='my-2'><span className='text-blue-600 font-semibold'>ID number</span>: 74287232476783</h1>
                                </div>
                                <a href='#' className='text-blue-600'>Adjust info</a>
                            </div>
                            <div className='rounded border-2 my-4 py-2 px-3 bg-white shadow-sm'>
                                <div className='p-2'>
                                    <h1 className='text-xl font-medium'>Payment Options</h1>
                                </div>
                                <hr></hr>
                                <div className='flex w-full'>
                                    <div className='p-2 md:w-1/3 w-full'>
                                        <p>Select payment type</p>
                                        <SingleSelect height={37} data={paymentOptions} chosenOption={(value)=>handleChosenOption(value)}></SingleSelect>
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
                                        click={() => history.push('/payment')}
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
            </ModalProvider>
        </>
    )
}

export default Payment

