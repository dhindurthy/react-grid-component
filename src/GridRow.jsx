import React from "react";

function GridRow(props) {
  return <tr onClick={props.handleRowClick}>{props.children}</tr>;
}

export default GridRow;
