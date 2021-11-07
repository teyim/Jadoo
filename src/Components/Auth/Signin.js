import React, { useState }from 'react'
import { FcGoogle } from "react-icons/fc";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'

function Signin ({ toggleAuthScreen}) {
    const [value, setValue] = useState()
    return (
        <>
            <div className='w-4/5 mx-auto text-gray-700'>
                <h1 class="font-medium text-2xl text-center">Login</h1>
                <form action="" class="mt-2">
                    <div class="my-3 text-sm">
                        <label for="email" class="block text-gray-700">Email</label>
                        <input type="email" autofocus id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-200 w-full" placeholder="Email" />
                    </div>
                    <div class="my-3 text-sm">
                        <label for="password" class="block ">Password</label>
                        <input type="password" id="password" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-200 w-full" placeholder="Password" />
                        <div className="flex justify-between my-4">
                            <div className='flex items-center'>
                            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label for="remember_me" class ="ml-2 block text-sm text-gray-900">
                            Remember me
                            </label>
                            </div>
                            <a href="#">Forget Password?</a>
                        </div>
                        
                    </div>

                    <button class="block text-center text-white bg-gray-800 p-2 duration-300 rounded-sm hover:bg-black w-full">Login</button>
                </form>
                <div className='my-3'>
                    <button class="flex text-center  bg-blue-500 hover:bg-blue-600 text-white w-full p-2 duration-300 rounded-sm shadow-md">
                        <FcGoogle className='w-7 h-7 p-1 bg-white my-auto'></FcGoogle><span className='mx-auto my-auto'>Continue with Google</span>
                    </button>
                </div>

                <p class="my-6 text-md text-center font-light text-gray-500"> Don't have an account? <span class="text-blue-500 cursor-pointer " onClick={()=>toggleAuthScreen()}> Create One </span></p>
            </div>
        </>
    )
}

export default Signin
