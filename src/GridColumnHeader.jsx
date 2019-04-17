import React from "react";

function GridColumnHeader(props) {
  return (
    <th i={props.i} index={props.index} style={props.style}>
      {props.children}
      {props.sorting && (
        <button onClick={props.handleSort}>
          Sortey -{props.isAsc ? "a" : "d"}
        </button>
      )}
    </th>
  );
}

export default GridColumnHeader;
