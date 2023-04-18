import getStandings from './__mocks__/getStandings';

describe('Tests for the standings', () => {
  test('Get data from the API', () => {
    expect(getStandings()).toBeDefined();
  });
  test('third team name must be Liverpool', () => {
    expect(getStandings()[2].name).toBe('Liverpool');
  });
  test('Points of Barcelona must be 70', () => {
    expect(getStandings()[3].points).toBe(70);
  });
});
