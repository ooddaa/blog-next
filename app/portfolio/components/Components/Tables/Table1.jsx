import React from 'react'
import './table1.css'

/* 
<tr> - represents rows
<td> - used to create data cells
<th> - used to add table headings
<caption> - used to insert captions
<thead> - adds a separate header to the table
<tbody> - shows the main body of the table
<tfoot> - creates a separate footer for the table
*/
function Table1() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Chair</th>
          <th>The Laid Back</th>
          <th>The Worker Bee</th>
          <th>The Chair 4/2</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>Width</th>
          <td>80 cm</td>
          <td>60 cm</td>
          <td>220 cm</td>
        </tr>
        <tr>
          <th>Height</th>
          <td>100 cm</td>
          <td>110 cm</td>
          <td>90 cm</td>
        </tr>
        <tr>
          <th>Depth</th>
          <td>70 cm</td>
          <td>65 cm</td>
          <td>80 cm</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>16 kg</td>
          <td>22 kg</td>
          <td>80 kg</td>
        </tr>
      </tbody>
    </table>
  )
}

export const table = { component: <Table1/>, description: (<div>Table component. HTML/CSS only</div>)}