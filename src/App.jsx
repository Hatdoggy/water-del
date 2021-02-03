import React,{useState} from 'react'
import {Landing,Register,Login,Main,Delivery,CustAcc} from "./components.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

export default function App(){

  return(<Router>
      <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/custM" component={Main}/>
      <Route path="/deliv" component={Delivery}/>
      <Route path="/custAcc" component={CustAcc}/>
      </Switch>
    </Router>
    );
}
