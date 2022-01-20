import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SearchBus from "Views/SearchBus";
import ReviewBooking from "Views/ReviewBooking";
import Payment from "Views/Payment";
import EmailVerifySuccess from "Components/Auth/EmailVerifySuccess";
import Auth from "Views/Auth"
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./Font/GDBoingBold.ttf";
import ProctectedRoute from "Components/ProctectedRoute";
import UserDashboard from "Views/UserDashboard";
import VerifyEmail from "Components/Auth/VerifyEmail";


const Routing = () => {
 return (
  <Router>
   <Switch>
    <Route exact path="/Jadoo" component={App}></Route>
    <Route path="/searchbus" component={SearchBus}></Route>
    <Route path="/review" component={ReviewBooking}></Route>
    <Route path="/payment" component={Payment}></Route>
    <Route path="/verifyemail" component={VerifyEmail}></Route>
    <Route path="/verifyemailsuccess" component={EmailVerifySuccess}></Route>
    <Route  path="/signin" component={Auth}></Route>
    <ProctectedRoute exact path='/dashboard' component={UserDashboard}/>
   </Switch>
  </Router>
 );
};

ReactDOM.render(
 <React.StrictMode>
  <Provider store={store}>
   <Routing />
  </Provider>
 </React.StrictMode>,
 document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
