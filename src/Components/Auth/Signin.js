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
    let { handleModal } = useContext(ModalContext)
    const {loading,errorMessage,userData} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const schema=yup.object().shape({
        email:yup.string().email().required(),
        password:yup.string().min(6).required()
    })

    const handleSignIn=(value)=>{
    const action= dispatch(logIn(value))  
    console.log(action)  
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
        <>
            <div className='w-4/5 mx-auto text-gray-700'>
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

                    <button type='submit' class="flex justify-center text-center text-white bg-gray-800 p-2 duration-300 rounded-sm hover:bg-black w-full" disabled={!formik.isValid||loading}>
                        {loading ? <ImSpinner2 className='w-5 h-6 animate-spin my-auto text-white '></ImSpinner2> : 'Login'}
                        </button>
                </form>
                <div className='my-3'>
                    <button disabled={!formik.isValid || loading}class="flex text-center  bg-blue-500 hover:bg-blue-600 text-white w-full p-2 duration-300 rounded-sm shadow-md">
                        <FcGoogle className='w-7 h-7 p-1 bg-white my-auto'></FcGoogle><span className='mx-auto my-auto'>Continue with Google</span>
                    </button>
                </div>
                <p className='text-red-500 text-sm text-center'>{errorMessage}</p>
                <p class="my-4 text-md text-center font-light text-gray-500"> Don't have an account? <span disabled={!formik.isValid || loading} class="text-blue-500 cursor-pointer " onClick={()=>toggleAuthScreen()}> Create One </span></p>
               
            </div>
        </>
    )
}

export default Signin
