import logo from './logo.svg';
import './App.css';
import rootops from './assets/images/central-park.jpg'

function App() {
  const randomImageUrl = "https://picsum.photos/400/265";
  return (
    <div className="App">
      <h1>
        Add images with styling
      </h1>
      <img 
      height={200}
      src ={rootops}
      alt='An image of a rooftop in New York'
      />
      <img 
      height={200}
      src={require("./assets/images/central-park.jpg")}
      alt='An image of central park'
      />
      <img 
       height={200}
       width={350}
       src={randomImageUrl}
      />
    </div>
  );
}

export default App;
