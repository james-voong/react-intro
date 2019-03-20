import React, {Component} from 'react';
/**
Component is in curly brackets because when the class was declared
it read "export class Component"
if you didn't add that then you need to export the class at the end
*/
import PropTypes from 'prop-types';

class Table extends Component {
  renderRows () {
    let rows = [];

    this.props.mpData.forEach((mp, index) => {
      let name = mp.name.split(',');
      name = name.reverse().join(' ');

      rows.push(
        <tr key={index}>
          <td>{name}</td>
          <td>{mp.party}</td>
          <td>{mp.electorate}</td>
          <td><a href={'mailto:' + mp.email}>{mp.email}</a></td>
        </tr>
      );
    });

    return rows;
  }

  render () {
    const rows = this.renderRows();

    return (

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
            <th>Electorate</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
Table.propTypes = {
  mpData: PropTypes.array.isRequired
}
export default Table;
