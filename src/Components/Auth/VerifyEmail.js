import React from 'react'
import letterImage from '../../Assets/images/letter.svg'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function VerifyEmail() {
    const {userData} = useSelector(state => state.user)
    const history=useHistory()
    const handleRedirect=()=>{
        history.replace('/Jadoo')
    }
    return (
        <div>
            <div className='w-full h-screen flex flex-col justify-center items-center font-rubik ' >
                <div className='w-5/6 h-5/6 md:w-1/2 md:h-1/2 p-2'>
                    <img src={letterImage} alt='letter' className='w-20 mx-auto' />
                    <p className=" text-gray-700 font-semibold text-2xl text-center py-2">Verify your email address</p>
                    <p className="text-lg text-gray-800 text-center">we've sent an email to <span className="font-bold text-gray-700">{userData?.email}</span> to verify your email address and activate your account.the link in the email to verify your account.</p>
                </div>
                <button onClick={handleRedirect} className='text-lg  text-blue-700'>not now.go Home</button>
            </div >
        </div>
    )
}
