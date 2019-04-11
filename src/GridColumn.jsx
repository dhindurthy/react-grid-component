import React from "react";

function GridColumn(props) {
  const iskey = props.iskey;
  if (iskey === "selected") {
    return (
      <td>
        <input type="checkbox" checked={props.checked} />
      </td>
    );
  }
  return <td>{props.children}</td>;
}

export default GridColumn;
