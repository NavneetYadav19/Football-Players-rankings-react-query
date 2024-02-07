import React from 'react';
import PropTypes from 'prop-types';

const PlayersList = ({ players }) => {
  if (!players) {
    return <div>Loading...</div>;
  }

  const renderPlayer = (player) => (
    <div key={player.id} className="w-40 h-[350px] cursor-pointer bg-slate-700 text-blue-200 hover:border-4 hover:border-yellow-400 p-4 shadow-md rounded-md">
      <img src={player.image} alt={`${player.name} image`} className="w-32 flex justify-center items-center h-40 object-cover mb-4 rounded-md" />
      <h2 className="text-lg font-semibold mb-2">{player.name}</h2>
      <p className="mb-2">{player.Position} - {player.Team}</p>
      <p>Rank: {player.Rank}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ml-5 md:ml-12 mt-6 p-4">
      {Array.isArray(players) ? (
        players.map((player) => renderPlayer(player))
      ) : (
        renderPlayer(players)
      )}
    </div>
  );
};

PlayersList.propTypes = {
  players: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
};

export default PlayersList;
