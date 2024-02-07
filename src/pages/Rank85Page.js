// pages/Rank85Page.js
import React from 'react';
import PlayersList from '../components/PlayersList';
import use85PlusPlayers from '../hooks/use85PlusPlayers';

const Rank85Page = () => {
  const { data: players85Plus, isLoading, error } = use85PlusPlayers();

  if (isLoading) return 'Loading...';
  if (error) return `Error fetching data: ${error.message}`;

  return (
    <div>
      <PlayersList players={players85Plus} />
    </div>
  );
};

export default Rank85Page;
