import React from 'react'
import Circle from "./Circles.jsx"

export default function Header(){
  return(
    <header>
      <Circle/>
      <div className="head-middle">
        <h4>Welcome to Pure Water Delivery</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed lorem eleifend, convallis urna vitae, condimentum turpis. Suspendisse potenti.</p>
      </div>

      <nav className="header-btn">
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Book Delivery</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>

    </header>
  );
}
