import React from "react";

function GridColumn(props) {
  return (
    <td role="gridcell" style={{ width: props.width + "em" }}>
      {props.children}
    </td>
  );
}

export default GridColumn;
