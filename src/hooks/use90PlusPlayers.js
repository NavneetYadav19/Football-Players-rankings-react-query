import { useQuery } from 'react-query';

const fetch90PlusPlayers = async () => {
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

   
    const players90Plus = data.players.filter(player => player.Rank === 90 || player.Rank === 91);

    console.log('Fetched 90+ players:', players90Plus);

    return players90Plus;
  } catch (error) {
    console.error(error);
    
    return [
        {
            id: 1,
            name: 'Lionel Messi',
            image: `/images/${1}.png`,
            Position: 'CF',
            Team: 'Inter Miami CF',
            Rank: 90
          },
          {
            id: 2,
            name: 'Kylian Mbappé',
            image: `/images/${2}.png`,
            Position: 'ST',
            Team: 'Paris SG',
            Rank: 91
          },
          {
            id: 3,
            name: 'Erling Haaland',
            image: `/images/${3}.png`,
            Position: 'ST',
            Team: 'Manchester City',
            Rank: 91
          },
          {
            id: 4,
            name: 'Kevin De Bruyne',
            image: `/images/${4}.png`,
            Position: 'CM',
            Team: 'Manchester City',
            Rank: 91
          },
          {
            id: 5,
            name: 'Karim Benzema',
            image: `/images/${5}.png`,
            Position: 'CF',
            Team: 'Al Ittihad',
            Rank: 90
          },
          {
            id: 6,
            name: 'Harry Kane',
            image: `/images/${6}.png`,
            Position: 'ST',
            Team: 'FC Bayern München',
            Rank: 90
          },
    ];
  }
};

const use90PlusPlayers = () => {
    return useQuery('90PlusPlayers', fetch90PlusPlayers, {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    });
  };

export default use90PlusPlayers;
