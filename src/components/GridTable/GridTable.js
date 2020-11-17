import React from 'react';
import GridTableCell from '../GridTableCell/GridTableCell';
import { v4 as uuidv4 } from 'uuid';

export default function GridTable({ days, hours }) {
  let tableRows = new Array(hours.length * days.length).fill(1);

  return (
    <div className="scheduler__bodyTable">
      <table>
        <tbody>
          {
            tableRows.map((arr, rowIndex) => (
              <tr key={uuidv4()}>
                {
                  days.map((item, cellIndex) => (
                    <GridTableCell row={rowIndex} cell={cellIndex} key={uuidv4()} />
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
