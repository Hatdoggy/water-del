import React,{useState}  from 'react'
import {Header,Content,Footer,Dropdown,CustAcc,Delivery,Modal} from "./components.js"
import {Collapse,Fade} from "@material-ui/core"
import { useLocation,useHistory as history } from "react-router-dom"
import sampleData from "./sampleData.js"

export default function Main(props){

  const [btn,updBtn] = useState(false);
  const [page,updPage] = useState("main");
  const [shop,updShop] = useState(false);
  const [mod,updMod] = useState(false);
  const [final,updFin] = useState({
    btn:false,
    arr:false
  });

  const [list,updList] = useState([]);

  let { uname,address,pass,num,fname,lname} =
    (props.location && props.location.values) || {};

  if(typeof address === "undefined"){
      address = sampleData.address;
      num = sampleData.num;
      fname = sampleData.fname;
      lname = sampleData.lname;
  }

  const [infos,updInfos] = useState({
      uname:uname,
      add:address,
      pass:pass,
      num:num,
      fname:fname,
      lname:lname
  });

  const [deli,updDeli] = useState({
    dateOfdelivery:"",
    name:"",
    gal:"",
    map:"",
    contact:""
  });

  document.querySelector("#landing").style.display = "block";
  document.querySelector("#landing").style.background = "white";

  function clicked(event){
    event?updBtn(false):updBtn(true);
  }

  function back(){
    props.history.push("/login");
  }

  window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
      updShop(false);
    }
  }

  if(final.arr){
    console.log(list);
    console.log(deli);
    updList(list => [
      ...list,
      deli
    ]);
    updFin({
      ...final,
      arr:false
    });
  }

  return(
    <div>
      <Header click={clicked} button={btn} user={infos.uname} update={updPage} list={list}/>
      <Collapse in={btn}><Dropdown uname={infos.uname} update={updPage}/></Collapse>

      {page==="main"&& <Content btn={btn} update={updPage}/>}
      {page==="deliv"&& <Delivery btn={btn} deli={deli} upd={updDeli} mod={updMod} modal={mod} fin={final} finUpd={updFin} list={list}/>}
      {page==="acc"&& <CustAcc btn={btn} info={infos} upd={updInfos}/>}

      <Fade in={shop}>
      <div id="myModal" className="modal" style={{display:shop?"block":"none"}}>
        <Modal shop={updShop} data={mod} deli={deli} mod={updMod} fin={final} updFunc={updFin}/>
      </div>
      </Fade>

      <Footer shop={updShop} mod={mod}/>
    </div>
  );
}
