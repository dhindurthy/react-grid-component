import React from "react";

function GridRow(props) {
  return (
    <tr role="row" onClick={props.onRowClick}>
      {props.children}
    </tr>
  );
}

export default GridRow;
