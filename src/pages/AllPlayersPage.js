import React from 'react';
import PlayersList from '../components/PlayersList';
import usePlayers from '../hooks/usePlayers';

const AllPlayersPage = () => {
  const { data: players, isLoading, error } = usePlayers();

  if (isLoading) return 'Loading...';
  if (error) return 'Error fetching data.';

  return (
    <div>
      <PlayersList players={players} />
    </div>
  );
};

export default AllPlayersPage;
