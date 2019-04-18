import React from "react";
import GridRow from "./GridRow";

class GridGrid extends React.Component {
  render() {
    return (
      <React.Fragment>
        <table className={this.props.stickyHeader ? "grid-table" : ""}>
          <thead>
            <GridRow>{this.props.headerRow()}</GridRow>
          </thead>
          <tbody className="grid-table-body">
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
