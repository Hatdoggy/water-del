import React from 'react'
import formType from "../form_type.js"
import {AdSide,CustTable,DeliveryTable,AdmMain} from "../components.js"
import "icons.js"

export default function AdminDash(){
  return(
    <div class="adminDash">
      <AdSide/>
      <AdmMain/>
      <CustTable/>
      <DeliveryTable/>
    </div>
  );
}
