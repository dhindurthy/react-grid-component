import React from "react";

function Select(props) {
  return (
    <React.Fragment>
      <select onChange={props.onChange} value={props.value}>
        {props.optionData.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}

export default Select;
