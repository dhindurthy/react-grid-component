import React from "react";
import GridGrid from "./GridGrid";
import GridColumn from "./GridColumn";
import GridColumnHeader from "./GridColumnHeader";
import Checkbox from "./Checkbox";
import Select from "./Select";
import Input from "./Input";
import DataData from "./data";

class GridComponentDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodydata: DataData,
      isAsc: false,
      selectedRows: [],
      isDisabled: true
    };
  }
  componentDidMount() {
    const newbodydata = this.state.bodydata;
    const selectedRows = [];
    for (let i = 0, len = newbodydata.length; i < len; i++) {
      //just for gathering sleected rows for demo
      if (newbodydata[i].selected) {
        selectedRows.push(newbodydata[i]);
      }
    }
    this.setState((state) => ({
      selectedRows: selectedRows
    }));
  }
  selectionChanged(row, index) {
    const newbodydata = this.state.bodydata;
    const selectedRows = [];
    for (let i = 0, len = newbodydata.length; i < len; i++) {
      if (i === index) {
        newbodydata[i].selected = newbodydata[i].selected ? false : true;
      }
      //just for gathering sleected rows for demo
      if (newbodydata[i].selected) {
        selectedRows.push(newbodydata[i]);
      }
    }
    this.setState((state) => ({
      bodydata: newbodydata,
      selectedRows: selectedRows,
      isDisabled: false
    }));
  }
  changeSelect(row, index, e) {
    const newbodydata = this.state.bodydata;
    const selectedRows = [];
    for (let i = 0, len = newbodydata.length; i < len; i++) {
      if (i === index) {
        newbodydata[i].incharge = e.target.value;
      }
      //just for gathering sleected rows for demo
      if (newbodydata[i].selected) {
        selectedRows.push(newbodydata[i]);
      }
    }
    this.setState((state) => ({
      isDisabled: false,
      bodydata: newbodydata
    }));
  }
  changeInput(row, index, e) {
    const newbodydata = this.state.bodydata;
    const selectedRows = [];
    for (let i = 0, len = newbodydata.length; i < len; i++) {
      if (i === index) {
        newbodydata[i].name = e.target.value;
      }
      //just for gathering sleected rows for demo
      if (newbodydata[i].selected) {
        selectedRows.push(newbodydata[i]);
      }
    }
    this.setState((state) => ({
      isDisabled: false,
      bodydata: newbodydata
    }));
  }
  onRowClick(row, index) {
    console.log("You clikced row: " + index);
  }
  handleSort = (headerValue) => {
    const state = this.state;
    const sortedData = state.bodydata.sort(function (a, b) {
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
    this.setState((state) => ({
      isAsc: state.isAsc ? false : true,
      bodydata: sortedData
    }));
  };
  render() {
    return (
      <section className="main-section">
        <GridGrid
          bodydata={this.state.bodydata}
          isAsc={this.state.isAsc}
          onRowClick={this.onRowClick}
          stickyHeader={true}
          headerRow={() => (
            <React.Fragment>
              <GridColumnHeader width="5">**</GridColumnHeader>
              <GridColumnHeader
                width="7"
                sorting={true}
                isAsc={this.state.isAsc}
                handleSort={this.handleSort.bind(this, "name")}
              >
                Name
              </GridColumnHeader>
              <GridColumnHeader
                width="6.1"
                sorting={true}
                isAsc={this.state.isAsc}
                handleSort={this.handleSort.bind(this, "idd")}
              >
                Comp
              </GridColumnHeader>
              <GridColumnHeader width="13.15">Path</GridColumnHeader>
              <GridColumnHeader width="5.94">InCharge</GridColumnHeader>
            </React.Fragment>
          )}
          otherRows={(row, index) => (
            <React.Fragment>
              <GridColumn key={"selected" + index} width="5">
                <Checkbox
                  selected={row.selected}
                  onChange={this.selectionChanged.bind(this, row, index)}
                  label={index}
                />
              </GridColumn>
              <GridColumn key={"name" + index}>
                {/* {row.name} */}
                <Input
                  onChange={this.changeInput.bind(this, row, index)}
                  value={row.name}
                />
              </GridColumn>
              <GridColumn key={"idd" + index}>{row.idd}</GridColumn>
              <GridColumn key={"path" + index}>{row.path}</GridColumn>
              <GridColumn key={"incharge" + index}>
                {row.incharge}
                <br />
                <Select
                  optionData={row.optionData}
                  onChange={this.changeSelect.bind(this, row, index)}
                  value={row.incharge}
                />
              </GridColumn>
            </React.Fragment>
          )}
        />
        <div>
          <h5>Original Data </h5>
          {this.state.bodydata.map((row, index) => (
            <div>
              <span key={index}>{row.name} |</span>
              <span key={index}>{row.incharge} |</span>
            </div>
          ))}
        </div>
        <div>
          <h5>Rows selected({this.state.selectedRows.length}): </h5>
          {this.state.selectedRows.map((row, index) => (
            <div>
              <span key={index}>{row.name} |</span>
              <span key={index}>{row.incharge} |</span>
            </div>
          ))}
          <br />
          <button
            disabled={this.state.isDisabled}
            className={this.state.isDisabled ? "disabled" : "enabled"}
          >
            Dirty Grid
          </button>
        </div>
      </section>
    );
  }
}

export default GridComponentDemo;
