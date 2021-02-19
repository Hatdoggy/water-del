import React from 'react'
import {Facebook,Instagram,Twitter,ShoppingCart} from '@material-ui/icons';

export default function Footer(prop){
  return(
    <aside>
      <div className="footContent">
        <a><ShoppingCart onClick={()=>prop.shop(true)} /></a>
        <a><Facebook/></a>
        <a><Twitter/></a>
        <a><Instagram/></a>
      </div>
    </aside>
  );
}

// style={prop.mod&&{color:"green"}}
