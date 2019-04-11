import React from "react";
import GridGrid from "./GridGrid";
import GridColumn from "./GridColumn";
import GridColumnHeader from "./GridColumnHeader";
import Checkbox from "./Checkbox";

class GridComponentDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodydata: [
        {
          selected: false,
          name: "Callie Owens",
          idd: "UTARIAN",
          path: "callieowens@utarian.com"
        },
        {
          selected: false,
          name: "Twila Beard",
          idd: "ZOID",
          path: "twilabeard@zoid.com"
        },
        {
          selected: true,
          name: "Flores Castillo",
          idd: "TINGLES",
          path: "florescastillo@tingles.com"
        },
        {
          selected: true,
          name: "Ortiz Mccray",
          idd: "BUZZOPIA",
          path: "ortizmccray@buzzopia.com"
        },
        {
          selected: false,
          name: "Bertie Franks",
          idd: "ZOUNDS",
          path: "bertiefranks@zounds.com"
        },
        {
          selected: true,
          name: "Matilda Carroll",
          idd: "IDETICA",
          path: "matildacarroll@idetica.com"
        },
        {
          selected: false,
          name: "Santos Saunders",
          idd: "BRAINCLIP",
          path: "santossaunders@brainclip.com"
        }
      ],
      isAsc: false
    };
  }
  selectionChanged(index, row) {
    console.log("selection clicked on row: " + index);
    console.log("maintain the selection state here sucka");
    console.log(row);
  }
  handleRowClick(index, row) {
    console.log("casually clicked on row: " + index);
    console.log(row);
  }
  handleSort = (headerValue, isAsc) => {
    console.log("headervalue is: " + isAsc + headerValue);
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
    const headerdata = [
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
    ];
    return (
      <GridGrid
        bodydata={this.state.bodydata}
        headerdata={headerdata}
        handleSort={this.handleSort}
        handleRowClick={this.handleRowClick}
        headSelectAllCell={() => <GridColumnHeader>whatever</GridColumnHeader>}
        selectionColumn={(index, row) => (
          <GridColumn>
            <Checkbox
              selected={row.selected}
              onChange={this.selectionChanged.bind(this, index, row)}
            />
            {index}
          </GridColumn>
        )}
      />
    );
  }
}

export default GridComponentDemo;
