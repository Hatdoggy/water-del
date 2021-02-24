import React,{useState} from 'react'
import formType from "../form_type.js"
import {AdSide,CustTable,DeliveryTable,AdmMain} from "../components.js"
import { useLocation,useHistory as history } from "react-router-dom"

export default function AdminDash(prop){

  let {dateOfdelivery,name,gal,map,contact} =
      (prop.location && prop.location.deli) || {};

  const [del,updDel] = useState({
    delivery:dateOfdelivery,
    name:name,
    gal:gal,
    map:map,
    contact:contact
  })

  console.log(prop.location.deli);

  const handleSubmit = () =>{
      prop.history.push({
        pathname: '/custM',
        del
      });
  };

  document.querySelector("#landing").style.display = "block";
  document.querySelector("#landing").style.background = "white";

  return(
    <div class="adminDash">
      <AdSide sub={handleSubmit}/>
      <AdmMain/>
    </div>
  );
}
