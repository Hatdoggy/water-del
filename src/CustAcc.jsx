import React,{useState} from 'react'
import Header from './Header.jsx'
import Footer from "./Footer.jsx"
import AccDet from "./AccDet.jsx"

export default function CustAcc(){

    const [btn,updBtn] = useState(false);
    document.querySelector("#landing").style.display = "block";
    document.querySelector("#landing").style.background = "white";

    function clicked(event){
      event?updBtn(false):updBtn(true);
      console.log(event);
      console.log(btn);
    }

  return(
    <div className="custAcc">
      <Header click={clicked} button={btn}/>
      <AccDet/>
      <Footer/>
    </div>
  );
}
