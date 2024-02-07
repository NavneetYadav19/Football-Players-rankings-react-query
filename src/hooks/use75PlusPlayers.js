import { useQuery } from 'react-query';

const fetch75PlusPlayers = async () => {
  try {
    
    const response = await fetch('YOUR_RAPID_API_ENDPOINT', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'YOUR_RAPID_API_KEY',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch players data');
    }

    const data = await response.json();

    
    const players75Plus = data.players.filter(player => player.Rank >= 75);

    return players75Plus;
  } catch (error) {
    console.error(error);
    
    return [
        {
            id: 47,
            name: 'Kalvin Phillips',
            image: `/images/${47}.png`,
            Position: 'CDM',
            Team: 'Manchester City',
            Rank: 79
          },
          {
            id: 48,
            name: 'Harry Maguire',
            image: `/images/${48}.png`,
            Position: 'CB',
            Team: 'Manchester Utd',
            Rank: 79
          },
    ];
  }
};

const use75PlusPlayers = () => {
  return useQuery('75PlusPlayers', fetch75PlusPlayers);
};

export default use75PlusPlayers;
