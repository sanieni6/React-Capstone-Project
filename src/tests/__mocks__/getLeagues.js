const getLeagues = () => {
  const leagues = [
    {
      id: 0,
      name: 'English Premier League',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
      seasonsAvailable: [2022, 2021, 2020, 2019, 2018, 2017, 2016],
      teamsAvailable: ['Manchester City', 'Manchester United', 'Liverpool', 'Chelsea'],
    },
    {
      id: 1,
      name: 'Spanish La Liga',
      logo: 'https://media.api-sports.io/football/leagues/140.png',
      seasonsAvailable: [2022, 2021, 2020, 2019, 2017],
      teamsAvailable: ['Real Madrid', 'FC Barcelona', 'Atlético Madrid', 'Sevilla FC'],
    },
    {
      id: 2,
      name: 'Italian Serie A',
      logo: 'https://media.api-sports.io/football/leagues/135.png',
      seasonsAvailable: [2022, 2021, 2020, 2019, 2018, 2017, 2016],
      teamsAvailable: ['Juventus', 'Inter Milan', 'AC Milan', 'AS Roma'],
    },
    {
      id: 3,
      name: 'German Bundesliga',
      logo: 'https://media.api-sports.io/football/leagues/78.png',
      seasonsAvailable: [2022, 2021, 2020, 2019, 2018, 2017, 2016],
      teamsAvailable: ['Bayern Munich', 'Borussia Dortmund', 'RB Leipzig', 'Bayer Leverkusen'],
    },
    {
      id: 4,
      name: 'French Ligue 1',
      logo: 'https://media.api-sports.io/football/leagues/61.png',
      seasonsAvailable: [2022, 2021, 2020, 2018, 2017, 2016],
      teamsAvailable: ['Paris Saint-Germain', 'Olympique Lyonnais', 'Olympique de Marseille', 'AS Monaco'],
    },
    {
      id: 5,
      name: 'Netherlands Eredivisie',
      logo: 'https://media.api-sports.io/football/leagues/149.png',
      seasonsAvailable: [2022, 2021, 2019, 2018, 2017, 2016],
      teamsAvailable: ['Ajax', 'PSV', 'Feyenoord', 'AZ Alkmaar'],
    },
    {
      id: 6,
      name: 'Portugal Primeira Liga',
      logo: 'https://media.api-sports.io/football/leagues/83.png',
      seasonsAvailable: [2022, 2021, 2020, 2019, 2018, 2017],
      teamsAvailable: ['Benfica', 'Sporting CP', 'FC Porto', 'Braga'],
    },
    {
      id: 7,
      name: 'Turkish Super Lig',
      logo: 'https://media.api-sports.io/football/leagues/143.png',
      seasonsAvailable: [2022, 2020, 2019, 2018, 2016],
      teamsAvailable: ['Galatasaray', 'Fenerbahçe', 'Beşiktaş', 'Trabzonspor'],
    },
  ];
  return leagues;
};

export default getLeagues;
