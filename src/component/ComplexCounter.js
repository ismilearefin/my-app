import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Complex Counter</h1>
      <div>
        <div>Count = {count} </div>
        <button type="button" onClick={() => dispatch("increment")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch("decrement")}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ComplexCounter;
