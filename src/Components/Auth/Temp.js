import React from 'react'
import letterImage from '../../Assets/images/letter.svg'
import successImage from '../../Assets/images/partying_face.svg'
import Button from "Components/Button/Button"
import { useHistory } from "react-router";


const verifyEmail = (
    <div className='w-full h-screen flex justify-center items-center font-rubik ' >
        <div className='w-5/6 h-5/6 md:w-1/2 md:h-1/2 p-2'>
            <img src={letterImage} alt='letter' className='w-20 mx-auto' />
            <p className=" text-gray-700 font-semibold text-2xl text-center py-2">Verify your email address</p>
            <p className="text-lg text-gray-800 text-center">we've sent an email to <span className="font-bold text-gray-700">teyimasobo@gmail.com</span> to verify your email address and activate your account.the link in the email will expier in 24hours.<span className='text-blue-700'>click here</span> if you did not recieve an email or would like to chnage the email address you signed up with</p>
        </div>
    </div >

)

const emailVerificationSuccesful = (
    <div className='w-full h-screen flex justify-center items-center font-rubik ' >
        <div className='w-5/6 h-5/6 md:w-1/2 md:h-1/2 p-2'>
            <img src={successImage} alt='letter' className='w-20 mx-auto' />
            <p className=" text-gray-700 font-semibold text-2xl text-center py-2">Email successfully verified</p>
            <Button
                click={() => useHistory().push('/Jadoo')}
                customStyle={
                    " " +
                    ` bg-green-400 text-white font-semibold hover:bg-green-500 mx-auto mt-2 md:mt-0 shadow-md py-3 px-8 `
                }>
                Proceed to Jadoo
            </Button>
        </div>
    </div >
)

const Temp = () => {
    return (
        [verifyEmail]
    )
}

export default Temp
