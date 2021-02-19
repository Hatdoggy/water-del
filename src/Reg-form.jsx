import React,{useState} from 'react'

export default function RegForm(prop) {

  const name = prop.name;

  return (
    <div className="userInput">
      <label for={prop.for}>{prop.label}</label>
      <input type={prop.type} id={prop.id} name={prop.name} value={prop.values[name]} onChange={prop.change} required/>
    </div>
);
}
