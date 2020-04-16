import React, { useReducer } from "react";
import CheckBox from "./CheckBox";

const Filters = () => {
  const initialState = {
    click: false,
    change: false
  };

  const reducer = (state, action) => ({ ...state, ...action });
  const [state, setState] = useReducer(reducer, initialState);

  const clearFilter = () => setState(initialState);

  return (
    <div>
      <button onClick={() => clearFilter()}>Limpiar</button>
      <br />
      <CheckBox
        title="click"
        isclicked={v => setState({ click: v })}
        checked={state.click}
      />
      <br />
      <CheckBox
        title="change"
        ischanged={v => setState({ change: v })}
        checked={state.change}
      />
      <br />
      <br />
      <p>click : {state.click ? "true" : "false"}</p>
      <p>change : {state.change ? "true" : "false"}</p>
    </div>
  );
};
export default Filters;
