import React, { useState } from "react";
import "./App.css";

function App() {
  var [count, setCount] = React.useState(0);

  return (
    <div>
      <p>count: {count}</p>
      <p>count: {count * 2}</p>
      <button type="submit" onClick={() => setCount(count + 1)}>
        count up
      </button>

      <button
        type="submit"
        onClick={() => setCount((prevCount) => prevCount + 5)}
      >
        5 count up
      </button>

      <button type="reset" onClick={() => setCount((count = 0))}>
        reset
      </button>
    </div>
  );
}

export default App;
