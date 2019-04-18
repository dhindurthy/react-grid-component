import React from "react";

function GridRow(props) {
  return <tr onClick={props.onRowClick}>{props.children}</tr>;
}

export default GridRow;
