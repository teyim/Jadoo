import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SearchBus from "Views/SearchBus";
import ReviewBooking from "Views/ReviewBooking";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./Font/GDBoingBold.ttf";

const Routing = () => {
 return (
  <Router>
   <Switch>
    <Route exact path="/Jadoo" component={App}></Route>
    <Route path="/searchbus" component={SearchBus}></Route>
    <Route path="/review" component={ReviewBooking}></Route>
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
