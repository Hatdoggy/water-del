import React,{useState} from 'react'
import Circles from './Circles.jsx'
import Reg from "./Reg-form.jsx"
import form_type from "./form_type.js"
import {Link} from "react-router-dom"

export default function Registration(){

  const [btnState, updBtn] = useState(false);

  function clicked(event){
    console.log("Test");
  }

  return(<div >
      <Circles/>
      <div className="reg_main">

        <div className="registration">

          <h2>Register Account</h2>

            <div className="form-reg">
              <form action="/custM" onSubmit={clicked}>
              {form_type.map((x,index) => (
                <Reg key={index} for={x.for} label={x.label} name={x.name} id={x.id} type={x.type}/>
              ))}

              <Link to="/custM">
              <button className="dark" type="submit">Test</button>
              </Link>

              </form>
            </div>


          <a href="/login" onClick={clicked}>Already have an account</a>

        </div>

        <div className="reg_image">
          <img src="../images/Register.svg"/>

          <div className="reg_text">
            <h3>Note</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>

      </div>
    </div>
  );
}