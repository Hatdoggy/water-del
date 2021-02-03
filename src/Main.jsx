import React from 'react'
import Device from '@material-ui/icons/ImportantDevicesRounded';
import Event from '@material-ui/icons/EventRounded';
import Todo from '@material-ui/icons/AssignmentRounded';
import {Link} from "react-router-dom"

export default function Content(prop){
  return(
    <div className="mainContent">
      <div className="stepContainer">
        <div className="step">
          <h4>Step 1</h4>
          <Device style={{color:"#3c4a61",fontSize:"64px"}}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur augue quis tellus dapibus, vitae egestas metus cursus.</p>
        </div>

        <div className="step">
          <h4>Step 2</h4>
          <Event style={{color:"#3c4a61",fontSize:"64px"}}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur augue quis tellus dapibus, vitae egestas metus cursus.</p>
        </div>

        <div className="step">
          <h4>Step 3</h4>
          <Todo style={{color:"#3c4a61",fontSize:"64px"}}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur augue quis tellus dapibus, vitae egestas metus cursus.</p>
        </div>

      </div>

    <div className="content">
      <div className="mainImg">
        <img src="../images/Bicycle.svg" alt="test"/>
      </div>

      <div className="mainImgText">
        <h4>Test</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur augue quis tellus dapibus, vitae egestas metus cursus.</p>
        <Link to="/deliv">
        <button className="dark">Book Delivery</button>
        </Link>
      </div>


    </div>

  </div>
  );
}
