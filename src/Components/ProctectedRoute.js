import React from 'react'
import {Redirect,Route} from 'react-router-dom'
import { auth } from 'config/firebaseConfig'

function ProctectedRoute({component:Component,...restOfProps}) {

    return (
        <Route {...restOfProps} render={(props)=>auth.currentUser?<Component {...props}/>:<Redirect to="/signin"/>}></Route>
    )
}

export default ProctectedRoute
