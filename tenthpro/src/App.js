import './App.css';
import pic from "./pic.jpg";

function App() {
  function handleClick() { 
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  function alo() { 
    
    let userInput = prompt('type a color'); 
   document.getElementById('titi').innerHTML=userInput;
  }
  return (
    <div>
       <h1> Add a button and handle a click event</h1>
       <button onClick={handleClick} onMouseEnter={alo}>Guess the number between 1 and 3</button>
       <img src={pic} alt='alo'></img>
       <h2 id='titi'>hey</h2>
    </div>
  );
}

export default App;
