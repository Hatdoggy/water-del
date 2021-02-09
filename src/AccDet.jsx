import React from 'react'

export default function AccDet(){
  return(
    <div className="accDet">

    <section>
      <p>Welcome to you account page, displayed here are your information. To update your account click update button</p>
      <img src="../images/updates.svg" alt="updateImg"/>
    </section>

      <form>
        <div className="userInput">
          <label for="name"><i class="fa fa-user"/>Full Name</label>
          <input type="text" name="name" id="name"/>
        </div>

        <div className="userInput">
          <label for="number"><i class="fa fa-address-book-o"/>Phone Number</label>
          <input type="text" name="number" id="number"/>
        </div>

        <div className="userInput">
          <label for="address"><i class="fa fa-address-card-o"/>Full Address</label>
          <input type="text" name="address" id="address"/>
        </div>

        <div className="userInput">
          <label for="uname"><i class="fa fa-user-circle-o"/>Username</label>
          <input type="text" name="uname" id="uname"/>
        </div>

        <div className="userInput">
          <label for="pass"><i class="fa fa-key"/>Password</label>
          <input type="text" name="pass" id="pass"/>
        </div>

        <button type="submit" className="dark">Update</button>

      </form>

    </div>
  );
}
