// SearchResults.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePlayers from '../hooks/usePlayers';

const SearchResults = () => {
  const { query } = useParams();
  const { data: players, isError, isLoading, refetch } = usePlayers(query);

  useEffect(() => {
    refetch();
  }, [query, refetch]);

  const filteredPlayers = players
    ? players.filter((player) =>
        player.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div>
      <h2>Search Results:</h2>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error loading players data</div>}
      {filteredPlayers && filteredPlayers.length > 0 ? (
        filteredPlayers.map((player) => (
          <div key={player.id}>
            <h3>{player.name}</h3>
            <p>Position: {player.Position}</p>
            <p>Team: {player.Team}</p>
            <p>Rank: {player.Rank}</p>
            <img
              src={process.env.PUBLIC_URL + player.image}
              alt={`${player.name} image`}
            />
          </div>
        ))
      ) : (
        <p>No players found</p>
      )}
    </div>
  );
};

export default SearchResults;
