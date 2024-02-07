import { useQuery } from 'react-query';

const fetch85PlusPlayers = async () => {
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

    
    const players85Plus = data.players.filter(player => player.Rank >= 85);

    return players85Plus;
  } catch (error) {
    console.error(error);
    
    return [
        {
            id: 7,
            name: 'Mohamed Salah',
            image: `/images/${7}.png`,
            Position: 'RW',
            Team: 'Liverpool',
            Rank: 89
          },
          {
            id: 8,
            name: 'Vini Jr.',
            image: `/images/${8}.png`,
            Position: 'LW',
            Team: 'Real Madrid',
            Rank: 89
          },
          {
            id: 9,
            name: 'Neymar Jr',
            image: `/images/${9}.png`,
            Position: 'LW',
            Team: 'Al Hilal',
            Rank: 89
          },
          {
            id: 10,
            name: 'Rodri',
            image: `/images/${10}.png`,
            Position: 'CDM',
            Team: 'Manchester City',
            Rank: 89
          },
          {
            id: 11,
            name: 'Virgil van Dijk',
            image: `/images/${11}.png`,
            Position: 'CB',
            Team: 'Liverpool',
            Rank: 89
          },
          {
            id: 12,
            name: 'Casemiro',
            image: `/images/${12}.png`,
            Position: 'CDM',
            Team: 'Manchester Utd',
            Rank: 89
          },
          {
            id: 13,
            name: 'Bruno Fernandes',
            image: `/images/${13}.png`,
            Position: 'CAM',
            Team: 'Manchester Utd',
            Rank: 88
          },
          {
            id: 14,
            name: 'Bernardo Silva',
            image: `/images/${14}.png`,
            Position: 'CM',
            Team: 'Manchester City',
            Rank: 88
          },
          {
            id: 15,
            name: 'Federico Valverde',
            image: `/images/${15}.png`,
            Position: 'CM',
            Team: 'Real Madrid',
            Rank: 88
          },
          {
            id: 16,
            name: 'Ederson',
            image: `/images/${16}.png`,
            Position: 'GK',
            Team: 'Manchester City',
            Rank: 88
          },
          {
            id: 17,
            name: 'Luka Modrić',
            image: `/images/${17}.png`,
            Position: 'CM',
            Team: 'Real Madrid',
            Rank: 87
          },
          {
            id: 18,
            name: 'Frenkie de Jong',
            image: `/images/${18}.png`,
            Position: 'CM',
            Team: 'FC Barcelona',
            Rank: 87
          },
          {
            id: 19,
            name: 'Marquinhos',
            image: `/images/${19}.png`,
            Position: 'CB',
            Team: 'Paris SG',
            Rank: 87
          },
          {
            id: 20,
            name: 'Heung Min Son',
            image: `/images/${20}.png`,
            Position: 'LW',
            Team: 'Spurs',
            Rank: 87
          },
          {
            id: 21,
            name: 'Ousmane Dembélé',
            image: `/images/${21}.png`,
            Position: 'RW',
            Team: 'Paris SG',
            Rank: 86
          },
          {
            id: 22,
            name: 'Bukayo Saka',
            image: `/images/${22}.png`,
            Position: 'RW',
            Team: 'Arsenal',
            Rank: 86
          },
          {
            id: 23,
            name: 'Jude Bellingham',
            image: `/images/${23}.png`,
            Position: 'CM',
            Team: 'Real Madrid',
            Rank: 86
          },
          {
            id: 24,
            name: 'Pedri',
            image: `/images/${24}.png`,
            Position: 'CM',
            Team: 'FC Barcelona',
            Rank: 86
          },
          {
            id: 25,
            name: 'Andrew Robertson',
            image: `/images/${25}.png`,
            Position: 'LB',
            Team: 'Liverpool',
            Rank: 86
          },
          {
            id: 26,
            name: 'Cristiano Ronaldo',
            image: `/images/${26}.png`,
            Position: 'ST',
            Team: 'Al Nassr',
            Rank: 86
          },
          {
            id: 27,
            name: 'Jack Grealish',
            image: `/images/${27}.png`,
            Position: 'LW',
            Team: 'Manchester City',
            Rank: 85
          },
          {
            id: 28,
            name: 'André Onana',
            image: `/images/${28}.png`,
            Position: 'GK',
            Team: 'Manchester Utd',
            Rank: 85
          },
          {
            id: 29,
            name: 'Marcus Rashford',
            image: `/images/${29}.png`,
            Position: 'LW',
            Team: 'Manchester Utd',
            Rank: 85
          },
          {
            id: 30,
            name: 'Rodrygo',
            image: `/images/${30}.png`,
            Position: 'RW',
            Team: 'Real Madrid',
            Rank: 85
          },
          {
            id: 31,
            name: 'John Stones',
            image: `/images/${31}.png`,
            Position: 'CB',
            Team: 'Manchester City',
            Rank: 85
          },
          {
            id: 32,
            name: 'Diogo Jota',
            image: `/images/${32}.png`,
            Position: 'CF',
            Team: 'Liverpool',
            Rank: 85
          },
    ];
  }
};

const use85PlusPlayers = () => {
  return useQuery('85PlusPlayers', fetch85PlusPlayers);
};

export default use85PlusPlayers;
