import React from 'react'
import {Facebook,Instagram,Twitter,ShoppingCart} from '@material-ui/icons';
import {Badge} from "@material-ui/core"

export default function Footer(prop){
  return(
    <aside>
      <div className="footContent">

        <a><Badge variant={prop.mod?"dot":""} color="secondary"><ShoppingCart onClick={()=>prop.shop(true)} /></Badge></a>
        <a><Facebook style={{marginLeft:"4px"}}/></a>
        <a><Twitter style={{marginLeft:"4px"}}/></a>
        <a><Instagram style={{marginLeft:"4px"}}/></a>
      </div>
    </aside>
  );
}
