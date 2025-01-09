import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncreament = (e) => {
    e.preventDefault();
    setCounter(counter + 3);
  };
  const handleDecreament = (e) => {
    e.preventDefault();
    setCounter(counter - 2);
  };
  return (
    <div>
      <h2>Counter App</h2>
      Count: {counter}
      <div>
        <button type="button" onClick={handleIncreament}>
          Increment
        </button> 
        <button type="button" onClick={handleDecreament}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
