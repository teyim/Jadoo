import React from 'react'

import successImage from '../../Assets/images/partying_face.svg'
import Button from "Components/Button/Button"
import { useHistory } from "react-router";


export default function EmailVerifySuccess() {
    const history=useHistory()
    return (
        <div className='w-full h-screen flex justify-center items-center font-rubik ' >
            <div className='w-5/6 h-5/6 md:w-1/2 md:h-1/2 p-2'>
                <img src={successImage} alt='letter' className='w-20 mx-auto' />
                <p className=" text-gray-700 font-semibold text-2xl text-center py-2">Email successfully verified</p>
                <Button
                    click={() => history.push('/')}
                    customStyle={
                        " " +
                        ` bg-green-400 text-white font-semibold hover:bg-green-500 mx-auto mt-2 md:mt-0 shadow-md py-3 px-8 `
                    }>
                    Proceed to Jadoo
                </Button>
            </div>
        </div >
    )
}
