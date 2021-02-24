import React from 'react'

export default function CustTable(){
  return(
    <table className="styled-table cust">

      <thead>
        <tr >
          <th>Customer ID</th>
          <th>Customer Fullname</th>
          <th>Address</th>
          <th>Cellnumber</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Sample</td>
          <td>Sample</td>
          <td>Sample</td>
          <td>Sample</td>
          <td>Sample</td>
          <td>Sample</td>
        </tr>
      </tbody>

    </table>
  );
}
