import React from "react";

function Checkbox(props) {
  return (
    <React.Fragment>
      <label htmlFor="gc">{props.label}</label>
      <input
        id="gc"
        type="checkbox"
        checked={props.selected}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
}

export default Checkbox;
