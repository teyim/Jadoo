import React,{useState} from 'react'
import Signin from './Signin'
import Signup from './Signup'

const Auth = () => {
    const [showSignIn,setShowSignIn]=useState(true)
    
    const handleToggleAuthPage=()=>{
    setShowSignIn(!showSignIn)
    }
    return (
       <>
            {showSignIn ? <Signin toggleAuthScreen={handleToggleAuthPage}></Signin> : <Signup toggleAuthScreen={handleToggleAuthPage}></Signup>}
       </>
    )
}

export default Auth
