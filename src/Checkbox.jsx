import React from "react";

function Checkbox(props) {
  return (
    <input type="checkbox" checked={props.selected} onClick={props.onChange} />
  );
}

export default Checkbox;
