import React,{useState} from 'react'
import {Details} from "./components.js"
import Dropdown from "./Dropdown.jsx"
import {Fade} from "@material-ui/core"

export default function Delivery(prop){

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = String(today.getFullYear());

  today = yyyy+'-'+mm+'-'+dd;
  let input = document.getElementById("dod");

  const [btn,updBtn] = useState(false);
  const [temp,updTemp] = useState({
    dateOfdelivery:"",
    name:"",
    gal:"",
    map:"",
    contact:""
  });
  const [disp,updDisp] = useState(false);


  document.querySelector("#landing").style.display = "block";
  document.querySelector("#landing").style.background = "white";

  const change = (event) => {

    updTemp({
      ...temp,
      [event.target.name]:event.target.value
    });

  };

  const submit = (event) => {
    event.preventDefault();
    console.log(temp.dateOfdelivery);

    prop.upd({
      dateOfdelivery:temp.dateOfdelivery,
      name:temp.name,
      gal:temp.gal,
      map:temp.map,
      contact:temp.contact
    });

    prop.mod(true);

    updDisp(true);

    setTimeout(()=>updDisp(false), 2000);
  };

  function clicked(event){
    event?updBtn(false):updBtn(true);

  }

  if(prop.modal){
    let inputs = document.getElementsByClassName("inpDel");
    for(let x of inputs){
      x.setAttribute("disabled","true");
      x.style.background="rgba(0,0,0,0.1";
    }
  }
  else{
    let inputs = document.getElementsByClassName("inpDel");
    for(let x of inputs){
      x.removeAttribute("disabled");
      x.style.background="none";
    }
  }

  const newDel = (event) =>{
    event.preventDefault();
    prop.finUpd({
      ...prop.fin,
      btn:false
    });
    prop.mod(false);
  };


  return(
    <div>

      <div className="mainContent">

        <div className="delivery-reg" >

          <form onSubmit={!prop.fin.btn?submit:newDel}>
          <div className="userInput">
          <label for="dod"><i class="fa fa-calendar-o"/>Date of Delivery</label>
          <input type="date" className="inpDel" name="dateOfdelivery" value={temp.dateOfdelivery} id="dod" onChange={change} min={today} max='2022-01-01' required/>
          </div>

          <div className="userInput">
          <label for="name"><i class="fa fa-user"/>Receiver Name</label>
          <input type="test" name="name" className="inpDel" id="name" value={temp.name} placeholder="Name of Receiver" onChange={change} required/>
          </div>

          <div className="userInput">
          <label for="nog"><i class="fa fa-tint"/>Number of Gallons</label>
          <input type="test" name="gal" className="inpDel" value={temp.gal} onChange={change} id="nog" placeholder="minimum of 10 Gallons" required/>
          </div>

          <div className="userInput">
          <label for="map"><i class="fa fa-map-o"/>Drop-off Address</label>
          <input type="test" name="map" className="inpDel" value={temp.map} onChange={change} id="map" placeholder="Fleurdeville Mactan" required/>
          </div>

          <div className="userInput">
          <label for="contact"><i class="fa fa-address-book-o"/>Backup Contact</label>
          <input type="test" name="contact" className="inpDel" value={temp.contact} onChange={change} id="contact" placeholder="091231231" required/>
          </div>

          <button type="submit" className="dark" >{!prop.fin.btn?"Book Delivery":"Book Another Delivery"}</button>
          </form>
        </div>

        <div className="delivery-img">
          <Fade in={disp}>
            <h3 className="alert">Delivery Successfully Entered</h3>
          </Fade>
          <img src="../images/Sitting.svg"/>
        </div>

      </div>

    {prop.list.length >0&&
        <section className="deli-history" style={{marginTop:"20px!important"}}>
          <h3 style={{display:"flex",color:"#3c4a61",width:"100%",bottom:"0",top:"20px",justifyContent: "center"}}>Recent Delivery History</h3>
          {prop.list.map(x=><Details list={x}/>)}
        </section>

    }

    </div>
  )
}


 // prop.list.map(x => console.log(x.name))
