import React from 'react'

export default function AdminDash(){
  return(
    <aside>

      <div className="welcome">
        <h4>Welcome</h4>
        <h1>User</h1>
      </div>

      <nav className="adminNav">

        <ul>
          <li>Dashboard</li>
          <li>Delivery List</li>
          <li>Logout</li>
        </ul>

      </nav>


    </aside>
  );
}
