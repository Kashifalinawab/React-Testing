import React, { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1> {counter}</h1>
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
