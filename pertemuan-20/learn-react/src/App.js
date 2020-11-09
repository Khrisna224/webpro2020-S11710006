import logo from './logo.svg';
import './App.css';
import About from './about'

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Hello />
      <About />
    </div>
  );
}

const Hello = () =>{
  return <h1>Hello</h1>
}

export default App;
