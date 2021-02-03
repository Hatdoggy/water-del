import React,{useState} from 'react'
import Header from './Header.jsx'
import Footer from "./Footer.jsx"
import Calendar from "react-calendar"
import Dropdown from "./Dropdown.jsx"
import {Collapse} from "@material-ui/core"

export default function Delivery(){

  const [btn,updBtn] = useState(false);
  document.querySelector("#landing").style.display = "block";
  document.querySelector("#landing").style.background = "white";

  function clicked(event){
    event?updBtn(false):updBtn(true);
    console.log(event);
    console.log(btn);
  }

  return(
    <div>
      <Header click={clicked} button={btn}/>
      <Collapse in={btn}><Dropdown/></Collapse>

      <div className="mainContent">

        <div className="delivery-reg" >

          <form method="post">
          <div className="userInput">
          <label for="dod"><i class="fa fa-calendar-o"/>Date of Delivery</label>
          <input type="date" name="dateOfdelivery" id="dod"/>
          {/* <div className="calendar"><Calendar/></div> */}
          </div>

          <div className="userInput">
          <label for="name"><i class="fa fa-user"/>Receiver Name</label>
          <input type="test" name="name" id="name" placeholder="Name of Receiver" required/>
          </div>

          <div className="userInput">
          <label for="nog"><i class="fa fa-tint"/>Number of Gallons</label>
          <input type="test" name="numberOfGallons" id="nog"/>
          </div>

          <div className="userInput">
          <label for="map"><i class="fa fa-map-o"/>Drop-off Address</label>
          <input type="test" name="map" id="map"/>
          </div>

          <div className="userInput">
          <label for="contact"><i class="fa fa-address-book-o"/>Backup Contact</label>
          <input type="test" name="contact" id="contact"/>
          </div>

          <button type="submit" className="dark">Book Delivery</button>
          </form>
        </div>

        <div className="delivery-img">
          <img src="../images/Sitting.svg"/>
        </div>
      </div>
      <Footer/>

    </div>
  )
}
