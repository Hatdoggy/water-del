import React,{useState} from 'react'
import Landing from './Landing.jsx'
import Register from './Registration.jsx'
import Login from './Login.jsx'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Main from "./Customer_main.jsx"

export default function App(){

  return(<Router>
    {/* <Landing/> */}
    {/* <Register/>
    <Login/> */}
      <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/custM" component={Main}/>      
      </Switch>
    </Router>
    );
}
