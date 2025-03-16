import React from 'react';

const Player_grid = ({ data }) => {
    const { player_image, player_country, player_name, country_flag,player_skill,batting_side,player_prize } = data
    return (
        <div >
            <div className='p-3 border border-gray-300 space-y-3'>
                <img className='h-70 w-130' src={player_image} alt="" />
                <div className='flex gap-2' >
                    <img className='h-8 w-8' src="https://img.icons8.com/?size=100&id=Gh9GDHiv1Y2v&format=png&color=000000" alt="" />
                    <h1 className='font-semibold text-xl'>{player_name}</h1>
                </div>
                <div className='flex justify-between'>
                    <div className="flex items-center gap-1.5">
                        <img className="h-4 w-6 object-cover" src={country_flag} alt="" />
                        <h3 className="text-sm font-semibold">{player_country}</h3>
                    </div>
                    <h3 className='text-sm font-semibold'>{player_skill}</h3>
                </div>
                <hr />
                <h1 className='font-bold'>Rating</h1>
                <h1 className='font-bold'>{batting_side}</h1>
                <div className='flex justify-between'>
                    
                    <h1 className='font-bold'>price:${player_prize}</h1>
                    <button className='border border-gray-200 py-1 px-3 rounded-xl font-semibold'
                   
                    >Choose Player</button>

                </div>
            </div>
        </div>
    );
};

export default Player_grid;