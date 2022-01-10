import React,{useState} from 'react'
import Signin from '../Components/Auth/Signin'
import Signup from '../Components/Auth/Signup'

const Auth = () => {
    const [showSignIn,setShowSignIn]=useState(true)
    
    const handleToggleAuthPage=()=>{
    setShowSignIn(!showSignIn)
    }
    return (
       <div className='flex bg-gray-100 w-100 h-screen'> 
          {showSignIn ? <Signin toggleAuthScreen={handleToggleAuthPage}></Signin> : <Signup toggleAuthScreen={handleToggleAuthPage}></Signup>}
       </div>
    )
}

export default Auth
