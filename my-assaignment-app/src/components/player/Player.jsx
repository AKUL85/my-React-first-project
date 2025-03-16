import React, { useEffect, useState } from 'react';
import Player_grid from '../player_grid/Player_grid';



const Player = ({handleChoosePlayer,subTractMoney}) => {
    const [playerData,setPlayerData]=useState([]);
    useEffect(()=>{
        fetch('ftch.json')
        .then(res=>res.json())
        .then(data=>setPlayerData(data));
    },[])



    return (
        <div className='max-w-6xl mx-auto my-16 mb-20'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>Available Players</h1>
                <div>
                    <button className='bg-yellow-300 rounded-xl px-3 py-1 font-bold'>Available</button>
                    <button className='bg-yellow-300 rounded-xl px-3 py-1 font-bold ml-1'>Selected</button>
                </div>
            </div>
        <div className='grid grid-cols-3 gap-3 my-5 '>
            {/* <h1>player:{playerData.length}</h1> */}

            {
                playerData.map(data=><Player_grid subTractMoney={subTractMoney} handleChoosePlayer={handleChoosePlayer}  key={data.player_id} data={data}></Player_grid>)
            }
        </div>
           
          
        </div>
    );
};

export default Player;