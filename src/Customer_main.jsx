import React,{useState}  from 'react'
import Header from './Header.jsx'
import Content from "./Main.jsx"
import Footer from "./Footer.jsx"
import Dropdown from "./Dropdown.jsx"
import {Collapse} from "@material-ui/core"

export default function Main(){

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
      <Content btn={btn}/>
      <Footer/>
    </div>
  );
}
