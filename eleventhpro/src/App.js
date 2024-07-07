import Child from './Child';
import './App.css';

function App() {
  const date = new Date();
  return (
    <div>
      <h1>Insert the Child component in here</h1> 
      <Child message={date.toLocaleTimeString()}/>
    </div>
  );
}

export default App;
