import React from 'react'

export default function AdSide(prop){

  return(
    <aside className="adminSide">

      <div className="welcome">
        <h4>Welcome</h4>
        <h1>User</h1>
      </div>

      <p>
      <nav className="adminNav">

        <ul>
          <li><a>Customer List</a></li>
          <li><a>Delivery List</a></li>
          <li><a>Delete Customer</a></li>
          <li><a>Update Customer</a></li>
          <li><a>Update Delivery</a></li>
        </ul>

      </nav>

      </p>

      <p style={{marginBottom:"5%"}}>
      <nav className="adminNav">

        <ul>
          <li><a onClick={()=>prop.sub()}>Customer Page</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>

      </nav>
      </p>

    </aside>
  );
}
