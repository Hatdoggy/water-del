import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AdmMain(){

  const list = [
    {
      icons:"Earnings",
      desc:"Coins"
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

      {list.map(x=>{
        <div className="box">
          <FontAwesomeIcon icon={x.icons}/>
          <div className="right">
            <h1>Value</h1>
            <h4>{x.desc}</h4>
          </div>
        </div>
      })}

    </section>
  );
}
