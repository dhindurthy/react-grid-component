import React from "react";
import GridColumn from "./GridColumn";
import GridRow from "./GridRow";
import GridColumnHeader from "./GridColumnHeader";

class GridGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAsc: false
    };
  }
  handleRowClick(index) {
    alert("you clicked row: " + (index + 1));
  }
  handleSort = (headerValue, e) => {
    console.log(headerValue);
    const state = this.state;
    const sortedData = this.props.bodydata.sort(function(a, b) {
      var nameA = a[headerValue];
      var nameB = b[headerValue];
      if (state.isAsc) {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      }
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    this.setState(state => ({
      isAsc: state.isAsc ? false : true,
      bodydata: sortedData
    }));
  };
  render() {
    return (
      <div>
        <h4>Grid Component</h4>
        <table>
          <thead>
            <GridRow>
              {this.props.headerdata.map((i, index) => (
                <GridColumnHeader
                  sorting={i.sorting}
                  isAsc={this.state.isAsc}
                  handleSort={this.handleSort.bind(this, i.header)}
                >
                  {i.header}
                </GridColumnHeader>
              ))}
            </GridRow>
          </thead>
          <tbody>
            {this.props.bodydata.map((i, index) => (
              <GridRow handleRowClick={this.handleRowClick.bind(this, index)}>
                {Object.keys(i).map(function(key) {
                  return <GridColumn>{i[key]}</GridColumn>;
                })}
              </GridRow>
            ))}
          </tbody>
          <tfoot>
            <GridRow>
              <td>f1</td>
              <td>f2</td>
              <td>f3</td>
            </GridRow>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default GridGrid;
