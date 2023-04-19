import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import League from '../components/League';

describe('League component', () => {
  const leagueData = {
    id: 1,
    name: 'Premier League',
    logos: {
      light: 'https://example.com/premier-league-light.png',
      dark: 'https://example.com/premier-league-dark.png',
    },
    handleClick: jest.fn(),
  };

  test('renders correctly', () => {
    const { container } = render(<League
      id={leagueData.id}
      logos={leagueData.logos}
      name={leagueData.name}
      handleClick={leagueData.handleClick}
    />);
    expect(container).toMatchSnapshot();
  });

  test('handles click event', () => {
    const { getByRole } = render(<League
      id={leagueData.id}
      logos={leagueData.logos}
      name={leagueData.name}
      handleClick={leagueData.handleClick}
    />);
    getByRole('button').click();
    expect(leagueData.handleClick).toHaveBeenCalledWith(1);
  });

  test('displays league name and logo', () => {
    const { getByText, getByAltText } = render(<League
      id={leagueData.id}
      logos={leagueData.logos}
      name={leagueData.name}
      handleClick={leagueData.handleClick}
    />);
    expect(getByText('Premier League')).toBeInTheDocument();
    expect(getByAltText('Premier League')).toHaveAttribute('src', 'https://example.com/premier-league-light.png');
  });
});
