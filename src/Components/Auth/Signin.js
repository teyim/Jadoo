import React, {useCallback,useState,useContext }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FcGoogle } from "react-icons/fc";
import { ImSpinner2} from 'react-icons/im'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'
import { useFormik } from 'formik';
import * as yup from 'yup'
import {logIn} from '../../Features/userAuth'
import { ModalContext} from '../../Context/context'
import { auth } from 'config/firebaseConfig';

function Signin ({ toggleAuthScreen}) {
    const { loading, errorMessage} = useSelector(state => state.user)


    const dispatch = useDispatch()
    const schema=yup.object().shape({
        email:yup.string().email().required(),
        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    })

    const handleSignIn = async (value) => {

        dispatch(logIn(value)).then((data) => {
            if (data?.meta?.requestStatus === "fulfilled")
            {
                console.log('hello')
            }
           
        })
    }
  
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: handleSignIn
    })    

    const setInputValue = useCallback((key, value) => 
       formik.setValues({
                ...formik.values,
                [key]: value,
            }),
        [formik]
    );

    
    
    return (
        <div className='my-auto w-11/12 md:w-4/12 mx-auto bg-white'>
            <div className=' p-5 border rounded-sm shadow-md  text-gray-700 font-rubik'>
                <h1 class="font-medium text-2xl text-center">Login</h1>
                <form action="" class="mt-2" onSubmit={formik.handleSubmit}>
                    <div class="my-3 text-sm">
                        <label for="email" class="block text-gray-700">Email</label>
                        <input type="email" autofocus id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-200 w-full" placeholder="Email" value={formik.values.email} onChange={(e)=>setInputValue('email',e.target.value)} />
                        <p className='text-red-500 text-sm'>{formik.errors.email}</p>
                    </div>
                    <div class="my-3 text-sm">
                        <label for="password" class="block ">Password</label>
                        <input type="password" id="password" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-200 w-full" placeholder="Password" value={formik.values.password} onChange={(e) => setInputValue('password', e.target.value)} />
                        <p className='text-red-500 text-sm'>{formik.errors.password}</p>
                        <div className=" my-4">
                            <a href="#">Forget Password?</a>
                        </div>
                        
                    </div>

                    <button type='submit' class="flex justify-center text-center text-white bg-gray-800 p-2 duration-300 rounded-sm hover:bg-black w-full" disabled={!formik.isValid||loading}>
                        {loading ? <ImSpinner2 className='w-5 h-6 animate-spin my-auto text-white '></ImSpinner2> : 'Login'}
                        </button>
                </form>
                <div className='my-3'>
                    <button disabled={loading} class="flex text-center  bg-blue-500 hover:bg-blue-600 text-white w-full p-2 duration-300 rounded-sm shadow-md">
                        <FcGoogle className='w-7 h-7 p-1 bg-white my-auto'></FcGoogle><span className='mx-auto my-auto'>Continue with Google</span>
                    </button>
                </div>
                <p className='text-red-500 text-sm text-center'>{errorMessage}</p>
                <div className='flex justify-center my-2'>
                    <button class="mx-auto text-md text-center font-light text-gray-500" disabled={loading} onClick={() => toggleAuthScreen()}> Don't have an account? <span class="text-blue-500" > Create One </span></button>
                </div>
            </div>
        </div>
    )
}

export default Signin
