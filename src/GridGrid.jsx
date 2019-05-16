import React from "react";
import GridRow from "./GridRow";

class GridGrid extends React.Component {
  render() {
    return (
      <React.Fragment>
        <table
          role="grid"
          className={this.props.stickyHeader ? "grid-table" : ""}
        >
          <thead role="rowgroup">
            <GridRow>{this.props.headerRow()}</GridRow>
          </thead>
          <tbody role="rowgroup" className="grid-table-body">
            {this.props.bodydata.map((row, index) => (
              <GridRow
                onRowClick={this.props.onRowClick.bind(this, row, index)}
                key={index}
              >
                {this.props.otherRows(row, index)}
              </GridRow>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default GridGrid;
