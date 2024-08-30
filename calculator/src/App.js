import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  //for addition
  const plus =(e) => { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 //for sub
  const minus = (e) => { 
  	// Add the code for the minus function 
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
           return result - Number(inputRef.current.value);
    })
  
  };
  //for mul
  const times =(e) => { 
    // Add the code for the plus function 
    e.preventDefault();
      const num = inputRef.current.value;
      console.log(parseFloat(num));
      setResult((result) => {
        return result * Number(inputRef.current.value);
      });
  }; 
  //for div
  const divide =(e) =>{ 
    // Add the code for the divide function 
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result / Number(inputRef.current.value);
    });
  };
  // for reset input 
  const resetInput =(e) =>{ 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
  // for reset result
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult((result) => result * 0);
    inputRef.current.value = 0;
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
          id="number"
          name="number"

        /> 
         <br />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput} className="btn1">reset input</button>
        <button onClick={resetResult} className="btn2">reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
