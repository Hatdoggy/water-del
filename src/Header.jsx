import React from 'react'
import Circle from "./Circles.jsx"
import {Menu,Close} from '@material-ui/icons'
import {Link} from "react-router-dom"

export default function Header(prop){

  return(
    <header>
      <Circle/>
      <div className="head-middle">
        <h2 onClick={()=>{prop.update("main")}}>Pure Water Delivery</h2>
      </div>

      <nav className="header-btn">
        <ul>
          <li><a onClick={()=>prop.update("acc")}>{prop.user}</a></li>
          <li><a onClick={()=>prop.update("deliv")}>Book Delivery</a></li>
          {prop.admin===true&&<li><a onClick={()=>prop.dash()}>Admin Page</a></li>}
          <li><a href="/login">Logout</a></li>
        </ul>
      </nav>

      <div className="hidden-icon">
      {prop.button?<Close onClick={()=>prop.click(prop.button)}/>:<i className="fa fa-navicon" onClick={()=>prop.click(prop.button)}/>}
      </div>



    </header>
  );
}
