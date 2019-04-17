import React from "react";

function GridColumn(props) {
  return <td style={{ width: props.width + "em" }}>{props.children}</td>;
}

export default GridColumn;
