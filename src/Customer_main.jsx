import React from 'react'
import Header from './Header.jsx'

export default function Main(){

  document.querySelector("#landing").style.display = "block";
  document.querySelector("#landing").style.background = "white";
  return(
    <div>
      <Header/>
      <h1>Test</h1>
    </div>
  );
}
