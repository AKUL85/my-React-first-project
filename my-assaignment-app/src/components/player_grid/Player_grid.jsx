import React from 'react';

const Player_grid = ({ data, handleChoosePlayer, subTractMoney }) => {
  const { player_image, player_name, country_flag, player_country, player_skill, batting_side, player_prize } = data;

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      {/* Player Image */}
      <img className="w-full h-40 md:h-70 object-cover rounded-md" src={player_image} alt={player_name} />

      {/* Player Name */}
      <div className="flex items-center gap-2 mt-3">
        <img
          className="h-8 w-8"
          src="https://img.icons8.com/?size=100&id=Gh9GDHiv1Y2v&format=png&color=000000"
          alt=""
        />
        <h1 className="font-semibold text-lg md:text-xl">{player_name}</h1>
      </div>

      {/* Player Details */}
      <div className="flex flex-col md:flex-row justify-between mt-2">
        <div className="flex items-center gap-2">
          <img className="h-5 w-8 object-cover" src={country_flag} alt={player_country} />
          <h3 className="text-sm font-semibold">{player_country}</h3>
        </div>
        <h3 className="text-sm font-semibold">{player_skill}</h3>
      </div>

      <hr className="my-3" />

      {/* Additional Info */}
      <div className="text-sm md:text-base">
        <h1 className="font-bold">Batting Side: {batting_side}</h1>
      </div>

      {/* Price & Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-3">
        <h1 className="font-bold text-lg text-gray-800">Price: ${player_prize}</h1>
        <button
          className="mt-2 sm:mt-0 border border-gray-300 py-2 px-4 rounded-lg font-semibold bg-yellow-400 hover:bg-yellow-500 transition-all"
          onClick={() => {
            handleChoosePlayer(data);
            subTractMoney(Number(player_prize));
          }}
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player_grid;
