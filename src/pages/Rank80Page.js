// pages/Rank80Page.js
import React from 'react';
import PlayersList from '../components/PlayersList';
import use80PlusPlayers from '../hooks/use80PlusPlayers';

const Rank80Page = () => {
  const { data: players80Plus, isLoading, error } = use80PlusPlayers();

  if (isLoading) return 'Loading...';
  if (error) return `Error fetching data: ${error.message}`;

  return (
    <div>
      <PlayersList players={players80Plus} />
    </div>
  );
};

export default Rank80Page;
