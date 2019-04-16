import React from "react";
import GridGrid from "./GridGrid";
import GridColumn from "./GridColumn";
import GridColumnHeader from "./GridColumnHeader";
import Checkbox from "./Checkbox";
import DataData from "./data";

class GridComponentDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerdata: [
        {
          header: "name",
          sorting: true
        },
        {
          header: "idd",
          sorting: true
        },
        {
          header: "path",
          sorting: false
        }
      ],
      bodydata: DataData,
      isAsc: false,
      selectedRows: []
    };
  }
  selectionChanged(index, row) {
    // console.log("selection clicked on row: " + index);
    // console.log("maintain the selection state here sucka");
    // console.log(row);
    const newbodydata = this.state.bodydata;
    const selectedRows = [];
    // for (let i = 0; i < newbodydata.length; i++) {
    for (let i = 0, len = newbodydata.length; i < len; i++) {
      // for (let i = newbodydata.length - 1; i >= 0; i--) {
      if (i === index) {
        newbodydata[i].selected = newbodydata[i].selected ? false : true;
      }
      //just for gathering sleected rows for demo
      if (newbodydata[i].selected) {
        selectedRows.push(newbodydata[i]);
      }
    }
    this.setState(state => ({
      bodydata: newbodydata,
      selectedRows: selectedRows
    }));
  }
  handleRowClick(index, row) {
    // console.log("casually clicked on row: " + index);
    // console.log(row);
  }
  handleSort = (headerValue, isAsc) => {
    // console.log("headervalue is: " + isAsc + headerValue);
    const state = this.state;
    const sortedData = state.bodydata.sort(function(a, b) {
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
      <section>
        <GridGrid
          bodydata={this.state.bodydata}
          headerdata={this.state.headerdata}
          handleSort={this.handleSort}
          isAsc={this.state.isAsc}
          handleRowClick={this.handleRowClick}
          headSelectAllCell={() => (
            <GridColumnHeader>whatever</GridColumnHeader>
          )}
          selectionColumn={(index, row) => (
            <GridColumn>
              <Checkbox
                selected={row.selected}
                onChange={this.selectionChanged.bind(this, index, row)}
                label={"Row " + index}
              />
            </GridColumn>
          )}
        />
        <h5>Rows selected: </h5>
        {this.state.selectedRows.map((row, index) => (
          <span>{row.name} |</span>
        ))}
      </section>
    );
  }
}

export default GridComponentDemo;
