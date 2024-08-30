import logo from "./assets/logo.png"

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Task: Add an image </h1>
      <img
        height={200}
        src={logo}
        alt="Logo"
      />
    </div>
  );
}

export default App;

