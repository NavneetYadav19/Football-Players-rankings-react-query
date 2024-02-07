import React from 'react';
import PlayersList from '../components/PlayersList';
import use90PlusPlayers from '../hooks/use90PlusPlayers';

const Rank90Page = () => {
  const { data: players90Plus, isLoading, error } = use90PlusPlayers();

  if (isLoading) return 'Loading...';
  if (error) return `Error fetching data: ${error.message}`;

  return (
    <div>
      <PlayersList players={players90Plus} /> 
    </div>
  );
};

export default Rank90Page;
