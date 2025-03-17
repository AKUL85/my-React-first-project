import React from 'react';

const Selected = ({ select, handleDeletePlayer }) => {
    return (
        <div className='my-5 max-w-6xl mx-auto '>
            <h1 className='text-2xl font-bold'>Selected Players</h1>
            <div className='space-y-4'>
                {select.map((player, index) => (
                    <div key={index} className='p-3 border border-gray-300 space-y-3'>
                        <div className='flex gap-2'>
                            <img
                                className='h-8 w-8'
                                src="https://img.icons8.com/?size=100&id=Gh9GDHiv1Y2v&format=png&color=000000"
                                alt=""
                            />
                            <h1 className='font-semibold text-xl'>{player.player_name}</h1>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <img className="h-4 w-6 object-cover" src={player.country_flag} alt="" />
                                    <h3 className="text-sm font-semibold">{player.player_country}</h3>
                                </div>
                                <h3 className='text-sm font-semibold my-2'>{player.player_skill}</h3>
                            </div>
                            <button onClick={() => handleDeletePlayer(player.player_id)}>
                                <img className='h-10 w-10' src="https://img.icons8.com/?size=100&id=67884&format=png&color=000000" alt="Delete" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Selected;
