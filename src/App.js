import React,{useEffect} from "react";
import Home from "Views/Home";
import UserDashboard from "Views/UserDashboard";
import "./App.css";
import { useDispatch,useSelector } from 'react-redux';
import {auth} from './config/firebaseConfig'
import { initState,SET_INITIALISED } from './Features/userAuth'

function App() {
  const dispatch = useDispatch()
  const { initialised,user,userData } = useSelector(state => state.user)
  
  useEffect(()=>{
    const cleanUp=auth.onAuthStateChanged((user) => {
      if (user && !initialised) {
           dispatch(initState())
        }
      !initialised && dispatch(SET_INITIALISED(true))
    })
    return cleanUp
  },[])
  
  return (
    <>
     <Home></Home>
    </>
  );
}

export default App;
