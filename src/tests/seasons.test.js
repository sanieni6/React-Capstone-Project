import getSeasons from './__mocks__/getSeasons';

describe('Tests for the seasons', () => {
  test('Get data from the API', () => {
    expect(getSeasons()).toBeDefined();
  });
  test('Second season name must be 2021', () => {
    expect(getSeasons()[1].season).toBe(2021);
  });
  test('Italian League must be available in 2019', () => {
    expect(getSeasons()[3].leaguesAvailable[2]).toBe('ita.1');
  });
});
