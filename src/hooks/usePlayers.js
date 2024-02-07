import { useQuery } from 'react-query';

const fetchPlayers = async () => {
  try {
    const response = await fetch('YOUR_RAPID_API_ENDPOINT', {
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPID_API_KEY',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch players data');
    }

    const data = await response.json();
    return data.players;
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

const usePlayers = () => {
  return useQuery('players', fetchPlayers);
};
  

export default usePlayers;
