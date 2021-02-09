import React,{useState} from 'react'
import {Header,Footer,Dropdown} from './components.js'
import AccDet from "./AccDet.jsx"
import {Collapse} from "@material-ui/core"

export default function CustAcc(){

    const [btn,updBtn] = useState(false);
    document.querySelector("#landing").style.display = "block";
    document.querySelector("#landing").style.background = "white";

    function clicked(event){
      event?updBtn(false):updBtn(true);
      console.log(event);
      console.log(btn);
    }

  return(<div>
<Header click={clicked} button={btn}/>
<Collapse in={btn}><Dropdown/></Collapse>

    <div className="custAcc">

      <AccDet/>

    </div>
      <Footer/>
</div>
  );
}
