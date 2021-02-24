import React from 'react'

export default function DeliveryTable(){
  return(
    <table className="styled-table">
      <thead>
        <tr>
          <th>Delivery ID</th>
          <th>Customer Name</th>
          <th>Receiver Name</th>
          <th>Drop-off Address</th>
          <th>Number of Gallons</th>
          <th>Backup Contact</th>
          <th>Total Price</th>
          <th>Status</th>
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
          <td>Sample</td>
          <td>Sample</td>
        </tr>
        <tr>
          <td>Sample</td>
          <td>Sample</td>
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
