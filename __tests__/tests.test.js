const app = require('../src/app');

describe('questions answers tests', () => {
  test('answer of the first question', async () => {
    const answer = await app.firstMovie();

    expect(answer).toBe('A New Hope');
  });

  test('answer of the second question', async () => {
    const answer = await app.lifeSpan();

    expect(answer).toBe('Nautolan,Kel Dor,Clawdite');
  });

  test('answer of the third question', async () => {
    const answer = await app.genderCounter();

    expect(answer).toBe('M:60,F:17');
  });

  test('answer of the fourth question', async () => {
    const answer = await app.averageHeight();

    expect(answer).toBe(1.75);
  });

  test('answer of the fifth question', async () => {
    const answer = await app.characterLanguage();

    expect(answer).toBe('Roos Tarpals,Rugor Nass,Jar Jar Binks');
  });

  test('answer of the sixth question', async () => {
    const answer = await app.mostPopularPlanet();

    expect(answer).toBe(3);
  });
});
