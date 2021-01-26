import React from 'react'

export default function RegForm(prop) {
  console.log("Hello");
  return (
    <div className="userInput">
      <label for={prop.for}>{prop.label}</label>
      <input type={prop.type} id={prop.id} name={prop.name} required/>
    </div>

);
}
