import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Team from '../components/Team';

describe('Team component', () => {
  const teamData = {
    id: 1,
    name: 'Barcelona',
    crestUrl: 'https://example.com/barcelona-crest.png',
  };
  const statsData = [
    { type: 'Total', value: 75 },
    { type: 'Loses', value: 10 },
    { type: 'Draws', value: 5 },
    { type: 'Points', value: 60 },
    { type: 'Goals For', value: 80 },
    { type: 'Goals Against', value: 20 },
    { type: 'Wins', value: 20 },
  ];

  test('renders team name and stats correctly', () => {
    const { container } = render(<Team team={teamData} stats={statsData} getLogo={() => null} />);
    expect(container).toMatchSnapshot();
  });

  test('renders team logo', () => {
    const { getByAltText } = render(<Team
      team={teamData}
      stats={statsData}
      getLogo={(team) => <img src={team.crestUrl} alt={team.name} />}
    />);
    expect(getByAltText('Barcelona')).toHaveAttribute('src', 'https://example.com/barcelona-crest.png');
  });

  test('renders team stats correctly', () => {
    const { getByText } = render(<Team team={teamData} stats={statsData} getLogo={() => null} />);
    expect(getByText('Points:5')).toBeInTheDocument();
    expect(getByText('Wins:20')).toBeInTheDocument();
    expect(getByText('Losses:10')).toBeInTheDocument();
  });
});
