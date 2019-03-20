import React, {Component} from 'react';
/**
Component is in curly brackets because when the class was declared
it read "export class Component"
if you didn't add that then you need to export the class at the end
*/
import PropTypes from 'prop-types';
import Row from 'components/row/row';

class Table extends Component {
  renderRows () {
    let rows = [];

    this.props.mpData.forEach((mp, index) => {
      const fulltext = Object.values(mp).join().toLowerCase();
      const searchValue = this.props.searchFieldValue.toLowerCase();

      if (!searchValue || fulltext.indexOf(searchValue) > -1){
        rows.push(
          <Row key={index} mp={mp} />
      )
    }
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
  mpData: PropTypes.array.isRequired,
  searchFieldValue: PropTypes.string
}
export default Table;
