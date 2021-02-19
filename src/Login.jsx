import React,{useState} from 'react'
import Circle from "./Circles.jsx"
import {useHistory as history} from "react-router-dom"

export default function Login(props){

  const [values,updVal] = useState({uname:"",pass:""});


  function change(event){
    updVal({
      ...values,
      [event.target.name]:event.target.value});
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: '/custM',
      values
    });
  };

  return(<div >
        <Circle/>
      <div className="main_Login">

        <div className="registration">
          <h1>Login Account</h1>

            <div className="form-reg">

              <form onSubmit={handleOnSubmit}>

              <div className="userInput" id="unameLogin">
                <label for="uname">Username</label>
                <span><input type="text" id="uname" name="uname" value={values.uname} onChange={change} required /></span>
              </div>

              <div className="userInput" id="passLogin">
                <label for="pass">Password</label>
                <span><input type="password" id="pass" name="pass" value={values.pass} onChange={change} required/></span>
              </div>

              <button className="dark" type="submit">Test</button>

              </form>

              <a href="/register">Don't have an account</a>

            </div>

          <a href="#">Forgot your password?</a>

          <div className="reg_image">
              <img src="../images/login.svg"/>
          </div>

        </div>
        </div>


  </div>

  );
}
