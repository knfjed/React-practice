import React, { useState } from "react";
import "./App.css";

function App() {
  const [countUp, setCountUp] = React.useState(0);
  const [countDouble, setCountUp_5] = React.useState(0);

  return (
    <div>
      <p>count: {countUp}</p>
      <p>count: {countDouble}</p>

      <button type="submit" onClick={() => setCountUp(countUp + 1)}>
        count up
      </button>
      <button
        type="submit"
        onClick={() => setCountUp_5((prevCount) => prevCount + 5)}
      >
        5 count up
      </button>
    </div>
  );
}

export default App;
