const getStandings = () => {
  const standings = [
    {
      id: 1,
      name: 'Manchester City',
      logo: 'https://media.api-sports.io/football/teams/50.png',
      points: 100,
      wins: 30,
      losses: 2,
    },
    {
      id: 2,
      name: 'Manchester United',
      logo: 'https://media.api-sports.io/football/teams/33.png',
      points: 90,
      wins: 27,
      losses: 5,
    },
    {
      id: 3,
      name: 'Liverpool',
      logo: 'https://media.api-sports.io/football/teams/39.png',
      points: 80,
      wins: 24,
      losses: 8,
    },
    {
      id: 4,
      name: 'barcelona',
      logo: 'https://media.api-sports.io/football/teams/81.png',
      points: 70,
      wins: 21,
      losses: 11,
    },
    {
      id: 5,
      name: 'Chelsea',
      logo: 'https://media.api-sports.io/football/teams/61.png',
      points: 60,
      wins: 18,
      losses: 14,
    },

  ];
  return standings;
};

export default getStandings;
