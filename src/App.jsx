import { useState } from "react";
import "./App.css"; // Import CSS file

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNumber);
  };

  return (
    <div className="container">
      <h1>Random Number Generator</h1>
      <h2>{randomNumber}</h2>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
}

export default App;
