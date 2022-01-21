import React,{useEffect} from "react";
import Home from "Views/Home";
import { useDispatch,useSelector } from 'react-redux';
import {auth} from './config/firebaseConfig'
import { initState,SET_INITIALISED } from './Features/userAuth'
import LoadingScreen from "Views/LoadingScreen";

function App() {
  const dispatch = useDispatch()
  const { initialised,initialLoad} = useSelector(state => state.user)
  

  
  useEffect(()=>{
    const cleanUp=auth.onAuthStateChanged((user) => {
      if (user && !initialised) {
           dispatch(initState())
        }
      if(!user && !initialised)
      {
        dispatch(SET_INITIALISED(true))
      }
    })

    return cleanUp
  },[])

   


  return (
    <>
      {(!initialised || initialLoad) ?<LoadingScreen/>:<Home/>}
    </>
  );
}

export default App;
