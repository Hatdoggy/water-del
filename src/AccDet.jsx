import React from 'react'

export default function AccDet(){
  return(
    <div className="accDet">

      <form>

        <div className="userInput">
          <label for="name"></label>
          <span><input type="text" name="name" id="name"/></span>
        </div>
        <div className="userInput">
          <label for="number"></label>
          <span><input type="text" name="number" id="number"/></span>
        </div>

        <div className="userInput">
          <label for="address"></label>
          <span><input type="text" name="address" id="address"/></span>
        </div>
        <div className="userInput">
          <label for="uname"></label>
          <span><input type="text" name="uname" id="uname"/></span>
        </div>

        <div className="userInput">
          <label for="age"></label>
          <span><input type="text" name="age" id="age"/></span>
        </div>
        <div className="userInput">
          <label for="pass"></label>
          <span><input type="text" name="pass" id="pass"/></span>
        </div>

      </form>

    </div>
  );
}
