import { useQuery } from 'react-query';

const fetch80PlusPlayers = async () => {
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

   
    const players80Plus = data.players.filter(player => player.Rank >= 80);

    return players80Plus;
  } catch (error) {
    console.error(error);
    
    return [
        {
            id: 33,
            name: 'Rodrigo Javier De Paul',
            image: `/images/${33}.png`,
            Position: 'CM',
            Team: 'Atlético de Madrid',
            Rank: 84
          },
          {
            id: 34,
            name: 'Luis Díaz',
            image: `/images/${34}.png`,
            Position: 'LW',
            Team: 'Liverpool',
            Rank: 84
          },
          {
            id: 35,
            name: 'Grimaldo',
            image: `/images/${35}.png`,
            Position: 'LWB',
            Team: 'Leverkusen',
            Rank: 84
          },
          {
            id: 36,
            name: 'Achraf Hakimi',
            image: `/images/${36}.png`,
            Position: 'RB',
            Team: 'Paris SG',
            Rank: 84
          },
          {
            id: 37,
            name: 'Lucas Hernández',
            image: `/images/${37}.png`,
            Position: 'CB',
            Team: 'Paris SG',
            Rank: 84
          },
          {
            id: 38,
            name: 'Reece James',
            image: `/images/${38}.png`,
            Position: 'RB',
            Team: 'Chelsea',
            Rank: 84
          },
          {
            id: 39,
            name: 'Randal Kolo Muani',
            image: `/images/${39}.png`,
            Position: 'ST',
            Team: 'Paris SG',
            Rank: 84
          },
          {
            id: 40,
            name: 'Alphonso Davies',
            image: `/images/${40}.png`,
            Position: 'LB',
            Team: 'FC Bayern München',
            Rank: 83
          },
          {
            id: 41,
            name: 'Nacho Fernández',
            image: `/images/${41}.png`,
            Position: 'CB',
            Team: 'Real Madrid',
            Rank: 83
          },
          {
            id: 42,
            name: 'Joelinton',
            image: `/images/${42}.png`,
            Position: 'CM',
            Team: 'Newcastle Utd',
            Rank: 82
          },
          {
            id: 43,
            name: 'Davide Calabria',
            image: `/images/${43}.png`,
            Position: 'RB',
            Team: 'Milan',
            Rank: 81
          },
          {
            id: 44,
            name: 'Jonathan David',
            image: `/images/${44}.png`,
            Position: 'ST',
            Team: 'LOSC Lille',
            Rank: 81
          },
          {
            id: 45,
            name: 'Ramy Bensebaini',
            image: `/images/${45}.png`,
            Position: 'LB',
            Team: 'Borussia Dortmund',
            Rank: 80
          },
          {
            id: 46,
            name: 'Richarlison',
            image: `/images/${46}.png`,
            Position: 'ST',
            Team: 'Spurs',
            Rank: 80
          },
    ];
  }
};

const use80PlusPlayers = () => {
  return useQuery('80PlusPlayers', fetch80PlusPlayers);
};

export default use80PlusPlayers;
