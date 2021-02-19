import React from 'react'

export default function details(prop){
  const total = prop.list.gal * 30;
  return(
    <div className="detail">
      <p style={{fontWeight:"bold"}}>Date <span>{prop.list.dateOfdelivery}</span></p>
      <p>Receiver Name <span>{prop.list.name}</span></p>
      <p>Number of Gallons <span>{prop.list.gal}</span></p>
      <p>Drop-off Address <span>{prop.list.map}</span></p>
      <p>Backup Contact<span>{prop.list.contact}</span></p>
      <p id="total">Total: <span  style={{fontWeight:"bold"}}>{"Php "+total+".00"}</span></p>
      {/* <p style={{fontWeight:"bold"}}>{(!ans&&!prop.fin.btn)?"Total:":"Are you Sure?"}<span>{"Php "+total+".00"}</span></p> */}
    </div>
  );
}
