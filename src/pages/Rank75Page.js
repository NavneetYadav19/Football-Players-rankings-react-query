// pages/Rank75Page.js
import React from 'react';
import PlayersList from '../components/PlayersList';
import use75PlusPlayers from '../hooks/use75PlusPlayers';

const Rank75Page = () => {
  const { data: players75Plus, isLoading, error } = use75PlusPlayers();

  if (isLoading) return 'Loading...';
  if (error) return `Error fetching data: ${error.message}`;

  return (
    <div>
      <PlayersList players={players75Plus} />
    </div>
  );
};

export default Rank75Page;
