import React from 'react'
import {Facebook,Instagram,Twitter} from '@material-ui/icons';

export default function Footer(){
  return(
    <aside>
      <div className="footContent">
        <Facebook/>
        <Twitter/>
        <Instagram/>
      </div>
    </aside>
  );
}
