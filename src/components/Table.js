import React from 'react';

function Table(props) {
  return <div>
      <table>
          <tr>
              <th>Name</th>
              <th>City</th>
          </tr>
          {props.data.map((x)=>
            <tr>
              <td>{x.name}</td>
              <td>{x.city}</td>
          </tr>

          )}
      </table>
  </div>;
}

export default Table;
