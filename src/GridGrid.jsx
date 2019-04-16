import React from "react";
import GridColumn from "./GridColumn";
import GridRow from "./GridRow";
import GridColumnHeader from "./GridColumnHeader";

class GridGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h4>Grid Component</h4>
        <table>
          <thead>
            <GridRow>
              {this.props.headSelectAllCell()}
              {this.props.headerdata.map((row, index) => (
                <GridColumnHeader
                  key={index}
                  sorting={row.sorting}
                  isAsc={this.props.isAsc}
                  handleSort={this.props.handleSort.bind(
                    this,
                    row.header,
                    this.state.isAsc
                  )}
                >
                  {row.header}
                </GridColumnHeader>
              ))}
            </GridRow>
          </thead>
          <tbody>
            {this.props.bodydata.map((row, index) => (
              <GridRow
                handleRowClick={this.props.handleRowClick.bind(
                  this,
                  index,
                  row
                )}
                key={index}
              >
                {this.props.selectionColumn(index, row)}
                {Object.keys(row).map(function(key) {
                  if (key !== "selected") {
                    return (
                      <GridColumn key={index + key}>{row[key]}</GridColumn>
                    );
                  }
                })}
              </GridRow>
            ))}
          </tbody>
        </table>
        {/* <button onClick={this.handlePrev}>Prev</button>
        <button onClick={this.handleNext}>Next</button> */}
      </div>
    );
  }
}

export default GridGrid;
