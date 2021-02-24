import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CustTable,DeliveryTable} from "../components.js"

export default function AdmMain(){

  const list = [
    {
      icons:"Earnings",
      desc:"coins"
    },
    {
      icons:"Most Active Day",
      desc:"calendar-alt"
    },
    {
      icons:"Gallons Sold",
      desc:"hand-holding-usd"
    },
    {
      icons:"Number of Deliveries",
      desc:"truck"
    },
    {
      icons:"Number of Customers",
      desc:"user"
    },
    {
      icons:"Stock",
      desc:"boxes"
    },
  ];

  return(
    <section className="admin-main">
      <div className="box-container">
        {list.map((x,key)=>(
          <div className="box">
            <div className="icontainer">
              <FontAwesomeIcon icon={x.desc} size = '3x'/>
            </div>
            <div className="right">
              <h1>Value</h1>
              <h4>{x.icons}</h4>
            </div>
          </div>
        ))}
      </div>

      <CustTable/>
      <DeliveryTable/>
    </section>
  );
}
