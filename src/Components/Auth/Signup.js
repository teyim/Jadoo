import React,{useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'

const Signup = ({ toggleAuthScreen}) => {
  const [value, setValue] = useState()
    return (
        <>
        <div className='w-4/5 mx-auto text-gray-700'>
          <h1 class="font-medium text-2xl text-center">SignUp</h1>
          <form action="" class="mt-2">
            <div class="my-3 text-sm">
              <label for="email" class="block text-gray-700">Email</label>
              <input type="email" autofocus id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-200 w-full" placeholder="Email" />
            </div>
            <div class='my-3 text-sm'>
              <label for="email" class="block text-gray-700">Phone number</label>
              <PhoneInput className='rounded-sm px-4 py-3 my-3 focus:outline-none bg-gray-200 w-full' country="CM" withCountryCallingCode international value={value} onChange={setValue} />
            </div>
            <div class="my-3 text-sm">
              <label for="password" class="block">Password</label>
              <input type="password" id="password" class="rounded-sm px-4 py-3 my-3 focus:outline-none bg-gray-200 w-full" placeholder="Password" />

              <label for="password" class="block2">Confirm Password</label>
              <input type="password" id="password2" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-200 w-full" placeholder="Password" />
            </div>

            <button class="block text-center text-white bg-gray-800 p-2 duration-300 rounded-sm hover:bg-black w-full">Create Account</button>
          </form>
          <div className='my-3'>
            <button class="flex text-center  bg-blue-500 hover:bg-blue-600 text-white w-full p-2 duration-300 rounded-sm shadow-md">
              <FcGoogle className='w-7 h-7 p-1 bg-white my-auto'></FcGoogle><span className='mx-auto my-auto'>Continue with Google</span>
            </button>
          </div>

          <p class="my-6 text-md text-center font-light text-gray-500"> Already have account? <span className="text-blue-500 cursor-pointer" onClick={() => toggleAuthScreen()}> Login </span></p>
        </div>
        </>
    )
}

export default Signup
