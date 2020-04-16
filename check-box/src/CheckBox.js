import React from "react";

function CheckBox(props) {
  const { isclicked, ischanged, title = "", checked = false } = props;
  return (
    <label>
      <input
        onClick={e => {
          if (isclicked !== undefined) isclicked(e.target.checked);
        }}
        onChange={e => {
          if (ischanged !== undefined) ischanged(e.target.checked);
        }}
        type="checkbox"
        checked={checked}
      />
      {"Check-box " + title}
    </label>
  );
}

export default CheckBox;
