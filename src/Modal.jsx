import React,{useState} from 'react'
import {Close} from '@material-ui/icons'

export default function Modal(prop){

  console.log(document.querySelector("#myModal"));
  const total = prop.deli.gal * 30.00;
  const [ans,updAns] = useState(false);

  const edit = () =>{
    prop.mod(false);
    prop.shop(false);
  };

  const checkout = () => {
    prop.shop(false);
  };


  const finBtn = () => {
    prop.updFunc({
      arr:true,
      btn:true
    });

  console.log(prop.fin);
  };

  return(
  <div className="modal-content">

    <div className="modal-header">
      <h3>Delivery Info</h3>
      <Close onClick={()=>prop.shop(false)} className="close"/>
    </div>

    {prop.data&&
        <section>
          <p>Delivery Date <span>{prop.deli.dateOfdelivery}</span></p>
          <p>Receiver Name <span>{prop.deli.name}</span></p>
          <p>Number of Gallons <span>{prop.deli.gal}</span></p>
          <p>Drop-off Address <span>{prop.deli.map}</span></p>
          <p>Backup Contact<span>{prop.deli.contact}</span></p>
          <p style={{fontWeight:"bold"}}>{(!ans&&!prop.fin.btn)?"Total:":"Are you Sure?"}<span>{"Php "+total+".00"}</span></p>

        {/* false */}
        {!ans&&
          <div className="modal-button">
            <button className="dark" onClick={edit}>Edit</button>
            <button className="green" onClick={()=>updAns(true)}> Checkout</button>
          </div>}

        {/* true */}
        {(ans&&!prop.fin.btn)&&
          <div className="modal-button">
            <button className="dark" onClick={()=>updAns(false)}>No</button>
            <button className="green" onClick={finBtn}>Yes</button>
          </div>}

        </section>
    }

    {!prop.data&&
      <article>
        <h1>No Delivery Info to be shown</h1>
      </article>
    }


  </div>
  );
}
