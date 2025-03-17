import React, { useState } from 'react';
import Header from './components/header/Header';
import Player from './components/player/Player';
import Selected from './components/selected/Selected';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [select, setSelect] = useState([]);
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const handleChoosePlayer = (player) => {
    if (!select.some(p => p.player_id === player.player_id)) {
      if(number!=0){
        setSelect([...select, player]);
      }
     
    } else {
      alert('Player is already selected');
    }
  };

  const handleDeletePlayer = (playerId) => {
    setSelect(select.filter(player => player.player_id !== playerId));
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
      <Player 
        subTractMoney={subTractMoney} 
        handleChoosePlayer={handleChoosePlayer} 
        select={select} 
        handleDeletePlayer={handleDeletePlayer}
      />
      <Footer />
    </>
  );
}

export default App;
