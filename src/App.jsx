import React,{useState} from 'react'
import {Landing,Register,Login,Main,Delivery,CustAcc,AdminDash} from "./components.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTruck, faCoins, faHandHoldingUsd,faCalendarAlt,faUser,faBoxes } from '@fortawesome/free-solid-svg-icons'

library.add( faTruck, faCoins, faHandHoldingUsd,faCalendarAlt,faUser,faBoxes );

export default function App(){

  return(<Router>
      <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/custM" component={Main}/>
      <Route path="/deliv" component={Delivery}/>
      <Route path="/custAcc" component={CustAcc}/>
      <Route path="/adminDash" component={AdminDash}/>
      </Switch>
    </Router>
    );
}
