import React, { useEffect, useState } from 'react';
import Player_grid from '../player_grid/Player_grid';
import Selected from '../selected/Selected';

const Player = ({ handleChoosePlayer, subTractMoney, select, handleDeletePlayer }) => {
    const [playerData, setPlayerData] = useState([]);
    const [isAvailableView, setIsAvailableView] = useState(true); // Toggle state

    useEffect(() => {
        fetch('ftch.json')
            .then(res => res.json())
            .then(data => setPlayerData(data));
    }, []);

    return (
        <div className='max-w-6xl mx-auto my-16 md:mb-20 mb-30'>
            {/* Toggle Buttons */}
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>{isAvailableView ? "Available Players" : `selected Players${select.length}/10`}</h1>
                <div>
                    <button 
                        className={`px-3 py-1 font-bold rounded-xl ${isAvailableView ? "bg-yellow-500" : "bg-yellow-300"}`} 
                        onClick={() => setIsAvailableView(true)}
                    >
                        Available
                    </button>
                    <button 
                        className={`ml-2 px-3 py-1 font-bold rounded-xl ${!isAvailableView ? "bg-yellow-500" : "bg-yellow-300"}`} 
                        onClick={() => setIsAvailableView(false)}
                    >
                        Selected
                    </button>
                </div>
            </div>

            {/* Conditional Rendering Based on State */}
            <div className='grid grid-cols-3 gap-3 my-5'>
                {isAvailableView ? (
                    playerData.map(data => (
                        <Player_grid 
                            key={data.player_id} 
                            subTractMoney={subTractMoney} 
                            handleChoosePlayer={handleChoosePlayer}  
                            data={data} 
                        />
                    ))
                ) : (
                    <Selected select={select} handleDeletePlayer={handleDeletePlayer} />
                )}
            </div>
        </div>
    );
};

export default Player;
