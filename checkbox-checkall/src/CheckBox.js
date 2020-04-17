import React from "react";

const CheckBox = props => {
  return (
    <li>
      <input
        key={props.id}
        type="checkbox"
        onClick={props.handleClick}
        value={props.value}
        checked={props.isChecked}
      />{" "}
      {props.value}
    </li>
  );
};
export default CheckBox;
