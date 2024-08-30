import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  const myVid ="https://youtu.be/wu4NYMmk8pk?si=f0t_Zs_S_0UMrAKL"
  return (
    <div className="App">
      <h1>React Player example</h1>
      <ReactPlayer
      url={myVid}
      playing={false}
      volume={0.5}
      controls
      />
    </div>
  );
}

export default App;
