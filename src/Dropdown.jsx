import React from 'react'

export default function Dropdown(prop){
  return(
    <div className="dropdown">
      <a onClick={()=>prop.update("acc")}>{prop.uname}</a>
      <a a onClick={()=>prop.update("deliv")}>Book Delivery</a>
      <a href="/login">Logout</a>
    </div>
  );
}
