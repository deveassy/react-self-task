import React, { useState } from "react";
import CheckBox from "./CheckBox";

function App() {
  const [state, setState] = useState({
    fruites: [
      { id: 1, value: "apple", isChecked: false },
      { id: 2, value: "mango", isChecked: false },
      { id: 3, value: "orange", isChecked: false },
      { id: 4, value: "grape", isChecked: false }
    ]
  });

  const handleAllChecked = e => {
    const fruites = state.fruites;
    fruites.forEach(fruite => (fruite.isChecked = e.target.checked));
    setState({ fruites: fruites });
  };

  const handleClick = e => {
    const fruites = state.fruites;
    fruites.forEach(fruite => {
      if (fruite.value === e.target.value);
      fruite.isChecked = e.target.checked;
    });
    setState({ fruites: fruites });
  };

  return (
    <div>
      <h1> Check and Uncheck All Example </h1>
      <input
        type="checkbox"
        onClick={handleAllChecked}
        value="checkedall"
      />{" "}
      Check / Uncheck All
      <ul>
        {state.fruites.map(fruite => {
          return <CheckBox handleClick={handleClick} {...fruite} />;
        })}
      </ul>
    </div>
  );
}

export default App;
