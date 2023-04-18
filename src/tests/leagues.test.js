import getLeagues from './__mocks__/getLeagues';

describe('Tests for the leagues', () => {
  test('Get data from the API', () => {
    expect(getLeagues()).toBeDefined();
  });
  test('First League name must be English Premier League', () => {
    expect(getLeagues()[0].name).toBe('English Premier League');
  });
  test('Spanish League must be available on 2022', () => {
    expect(getLeagues()[1].seasonsAvailable[0]).toBe(2022);
  });
});
