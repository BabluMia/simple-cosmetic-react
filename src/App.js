import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  const [count,setCount] = useState(0)
  const addToCart = (name) =>{
    setCount(count + 1);
    // return '<li>{name}</li>'
    console.log(name);
  } 
  return (
    <div className="App">
      <Header count={count}></Header>
      <Products addToCart={addToCart}></Products>
    </div>
  );
}

export default App;
