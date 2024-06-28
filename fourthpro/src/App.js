//import logo from './logo.svg';
import './App.css';
import Header1 from './components/Header.js';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header1 name='Tasnim' color='purple' />
      <Main greet='Howdy'/>
      <Sidebar greet='Hi' />
      
      
      
    </div>
  );
}

export default App;
