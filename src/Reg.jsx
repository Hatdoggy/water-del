import React from 'react';
import Circles from './Circles.jsx'
import Reg from "./Reg-form.jsx"
import form_type from "./form_type.js"

export default function Landing(){
  return(<div>
    <Circles/>
    <div className="main_land">

      <div className="text">
        <h1>Register Account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor dui, luctus vitae sollicitudin ut, egestas id est. Nam vel fringilla mi. Sed vel accumsan metus, eu rhoncus neque. Fusce eget justo ipsum. Cras viverra, justo nec ornare lobortis, erat augue pretium tortor, sit amet imperdiet justo est nec tellus.</p>
        <h3>How it Works</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor dui, luctus vitae sollicitudin ut, egestas id est. Nam vel fringilla mi. Sed vel accumsan metus, eu rhoncus neque. Fusce eget justo ipsum. Cras viverra, justo nec ornare lobortis, erat augue pretium tortor, sit amet imperdiet justo est nec tellus.</p>

        <div className="landing_btn">
          <button className="dark">Learn More...</button>
          <button className="light">Register</button>
        </div>
      </div>

      <div className="landingImg">
        <img src="../images/Register.svg"/>
      </div>

    </div>
</div>
  );
}
