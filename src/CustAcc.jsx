import React,{useState} from 'react'
import {Header,Footer,Dropdown} from './components.js'
import AccDet from "./AccDet.jsx"
import {Collapse} from "@material-ui/core"

export default function CustAcc(prop){

    const [btn,updBtn] = useState(false);
    document.querySelector("#landing").style.display = "block";
    document.querySelector("#landing").style.background = "white";

    console.log(prop.info.add);

    function clicked(event){
      event?updBtn(false):updBtn(true);
      console.log(event);
      console.log(btn);
    }

  return(
    <div className="custAcc">
      <AccDet info={prop.info} func={prop.upd}/>
    </div>
  );
}
