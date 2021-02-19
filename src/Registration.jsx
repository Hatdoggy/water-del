import React,{useState} from 'react'
import Circles from './Circles.jsx'
import Reg from "./Reg-form.jsx"
import form_type from "./form_type.js"
import {useHistory as history} from "react-router-dom"

export default function Registration(props){

  const [btnState, updBtn] = useState(false);

  const [values,updInput] = useState({
    fname:"",
    lname:"",
    address:"",
    num:"",
    uname:"",
    pass:""
  });

  function change(event){
      updInput({
        ...values,
        [event.target.name]:event.target.value});
      // console.log(input);
      console.log(values);
    }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: '/custM',
      values
    });
  };

  return(<div >
      <Circles/>
      <div className="reg_main">

        <div className="registration">

          <h2>Register Account</h2>

            <div className="form-reg">
              <form action="/custM" onSubmit={handleOnSubmit}>
              {form_type.map((x,index) => (
                <Reg key={index} for={x.for} label={x.label} name={x.name} values={values} change={change} id={x.id} type={x.type}/>
              ))}

              <button className="dark" type="submit">Register</button>

              </form>
            </div>


          <a href="/login">Already have an account</a>

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
