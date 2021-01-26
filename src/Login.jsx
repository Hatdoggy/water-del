import React from 'react'
import Circle from "./Circles.jsx"

export default function Login(){

  return(<div >
        <Circle/>
      <div className="main_Login">

        <div className="registration">
          <h1>Login Account</h1>

            <div className="form-reg">

              <form action="/custM">

              <div className="userInput">
                <label for="uname">Username</label>
                <span><input type="text" id="uname" name="uname" required/></span>
              </div>

              <div className="userInput">
                <label for="pass">Password</label>
                <span><input type="password" id="pass" name="pass" required/></span>
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
