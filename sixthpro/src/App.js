import logo from './logo.svg';
import avatar from "./avatar.png";//import the img
import './App.css';
function Logo(props){
   const userPic = <img src={avatar}/> //avatar as a value of src attribute
   return userPic;
}
function App() {
  return (
   <div>
    
    <h1>Hello, world!</h1>
    <Logo />
    </div>
  );
}

export default App;
