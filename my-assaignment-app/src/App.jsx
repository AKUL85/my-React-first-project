import Header from './components/header/Header'
import './App.css'
import Player from './components/player/Player'
import { useState } from 'react'
import Selected from './components/selected/Selected'

function App() {
 const [select, setSelect] = useState([]);
 const [number, setNumber] = useState(0);
 const [count, setCount] = useState(0); 

 const handleChoosePlayer = (player) => {
    setSelect([...select, player]);
 };

 const addMoney = (num) => {
  if (count >= 3) { 
    alert("Your Free Giving money touches the limit");
    return;
  }
  
  setNumber(prev => prev + num);
  setCount(prev => prev + 1); 
 };

 return (
    <>
      <Header number={number} addMoney={addMoney}></Header>
      <Player handleChoosePlayer={handleChoosePlayer}></Player>
      <Selected select={select}></Selected>
    </>
  );
}

export default App;
