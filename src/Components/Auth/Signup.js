import React, { useState, useContext,useCallback } from 'react'
import { FcGoogle } from "react-icons/fc";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { logOut, signUp } from 'Features/userAuth';
import { ModalContext } from '../../Context/context'
import { ImSpinner2 } from 'react-icons/im'
import { useHistory } from "react-router";
import { auth } from 'config/firebaseConfig';
import { sendEmailVerification } from 'firebase/auth';


const Signup = ({ toggleAuthScreen}) => {
  const {replace ,push} = useHistory()
  const { loading, errorMessage } = useSelector(state => state.user)
  const [value, setValue] = useState()

  const dispatch = useDispatch()
  const schema = yup.object().shape({
    firstName:yup.string().required(),
    lastName: yup.string().required(),
    phone:yup.string().min(13,'phone number not valid').required(),
    email: yup.string().email().required(),
    password: yup.string()
      .required('No password provided.')
      .min(6, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordConfirmation: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match').required('Please confirm password')
  })

  const handleSignUp = async (value) => {

    dispatch(signUp(value)).then(async(data) => {
      if (data?.meta?.requestStatus === "fulfilled") {
        sendEmailVerification(auth.currentUser).then(()=>{
          replace('/verifyemail')
        }).catch(error=>{
        alert('Error sending email verification')
        })
      }
    })
   
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName:'',
      phone:'',
      email:'',
      password: '',
      passwordConfirmation:''
    },
    validationSchema: schema,
    onSubmit: handleSignUp
  })

  const setInputValue = useCallback((key, value) =>
    formik.setValues({
      ...formik.values,
      [key]: value,
    }),
    [formik]
  );


    return (
      <div className='my-auto w-11/12 md:w-5/12 mx-auto bg-white '>
        <div className=' p-5 border rounded-sm shadow-md  text-gray-700 font-rubik'>
          <h1 class="font-medium text-2xl text-center">SignUp</h1>
          <form action="" class="mt-2" onSubmit={formik.handleSubmit}>
            
            <div class="my-3 text-sm flex">
              <div className=' mx-1 w-1/2'>
                <label for="Firstname" class="block">Firstname</label>
                <input type="text" id="firstname" class="rounded-sm px-4 py-3 my-3 focus:outline-none bg-gray-200 w-full" placeholder="Firstname" value={formik.values.firstName} onChange={(e) => setInputValue('firstName', e.target.value)} />
                <p className='text-red-500 text-sm'>{formik.errors.firstName}</p>
              </div>

              <div className='mx-1 w-1/2'>
                <label for="Firstname" class="block">Lastname</label>
                <input type="text" id="lastname" class="rounded-sm px-4 py-3 my-3 focus:outline-none bg-gray-200 w-full" placeholder="Lastname" value={formik.values.lastName} onChange={(e) => setInputValue('lastName', e.target.value)}/>
                <p className='text-red-500 text-sm'>{formik.errors.lastName}</p>
              </div>
            </div>

            <div className='flex '>
              <div class="my-3 mx-1 w-1/2 text-sm">
              <label for="email" class="block text-gray-700">Email</label>
                <input type="email" autofocus id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-200 w-full" placeholder="Email" value={formik.values.email} onChange={(e) => setInputValue('email', e.target.value)} />
                <p className='text-red-500 text-sm'>{formik.errors.email}</p>
            </div>
              <div class='my-3 mx-1  w-1/2 text-sm'>
              <label for="email" class="block text-gray-700">Phone number</label>
              <div className='my-3'>
                <PhoneInput maxLength={18} className='rounded-sm px-4 py-3 focus:outline-none bg-gray-200 w-full' country="CM" withCountryCallingCode international value={formik.values.phone} onChange={e => setInputValue("phone", e)} onBlur={formik.handleBlur("phone")} />
                <p className='text-red-500 text-sm'>{formik.errors.phone}</p>
                </div>
            </div>
            </div>

            <div class="my-3 text-sm flex">
              <div className=' mx-1 w-1/2'>
              <label for="password" class="block">Password</label>
                <input type="password" id="password" class="rounded-sm px-4 py-3 my-3 focus:outline-none bg-gray-200 w-full" placeholder="Password" value={formik.values.password} onChange={(e) => setInputValue('password', e.target.value)}/>
                <p className='text-red-500 text-sm'>{formik.errors.password}</p>
              </div>

              <div className=' mx-1 w-1/2'>
              <label for="password" class="block2">Confirm Password</label>
                <input type="password" id="password2" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-200 w-full" placeholder="Password" value={formik.values.passwordConfirmation} onChange={(e) => setInputValue('passwordConfirmation', e.target.value)}/>
                <p className='text-red-500 text-sm'>{formik.errors.passwordConfirmation}</p>
              </div>
            </div>

            <button type='submit' class="flex justify-center text-center text-white bg-gray-800 p-2 duration-300 rounded-sm hover:bg-black w-full" disabled={!formik.isValid || loading}>
              {loading ? <ImSpinner2 className='w-5 h-6 animate-spin my-auto text-white '></ImSpinner2> : 'Create account'}
            </button>
          </form>
          <p className='text-red-500 text-sm text-center'>{errorMessage}</p>
          <div className='flex justify-center my-2'>
            <button disabled={loading} class="mx-auto text-md text-center font-light text-gray-500" onClick={() => toggleAuthScreen()}> Already have an account? <span class="text-blue-500" > Login </span></button>
          </div>
        </div>
        </div>
    )
}

export default Signup
