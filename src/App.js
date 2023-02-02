import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function MyButton({ count, onClick }) {

  return (
    <button onClick={onClick}>
      Click me | clicked {count} times
    </button>
  );
}

function App() {
  const name = "Jeff"
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>Hello <span style={{color:"red"}}>Jeff</span></h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <p>test123</p>
    </div>
  );
}

export default App;
