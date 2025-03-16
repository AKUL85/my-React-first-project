import Header from './components/header/Header';
import './App.css';
import Player from './components/player/Player';
import { useState } from 'react';
import Selected from './components/selected/Selected';
import Footer from './components/footer/footer';

function App() {
  const [select, setSelect] = useState([]);
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const handleChoosePlayer = (player) => {
    setSelect([...select, player]);
  };

  const addMoney = (num) => {
    if (count >= 3) {
      alert('Your Free Giving money touches the limit');
      return;
    }
    setNumber((prev) => prev + num);
    setCount((prev) => prev + 1);
  };

  const subTractMoney = (num) => {
    
  
  
    if (typeof num !== 'number' || isNaN(num)) {
      console.error('Invalid number:', num);
      return;
    }
  
    if (number < num) {
      alert('You do not have sufficient balance');
      return;
    }
    setNumber((prev) => prev - num);
  };

  return (
    <>
      <Header number={number} addMoney={addMoney} />
      <Player subTractMoney={subTractMoney} handleChoosePlayer={handleChoosePlayer} />
      <Selected select={select} />
      <Footer></Footer>
    </>
  );
}

export default App;