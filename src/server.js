const app = require('./app');

async function firstMovie() {
  const query = new app.Query('Film');

  query.ascending('releaseDate');

  const result = await query.first();

  console.log(result.get('title'));
}

async function lifeSpan() {
  const query = new app.Query('Specie');

  query.exists('averageLifespan');
  query.notEqualTo('averageLifespan', null);
  query.ascending('averageLifespan');
  query.limit(3);

  const results = await query.find();

  results.map((specie) => {
    console.log(specie.get('name'));
  });
}

async function genderCounter() {
  const results = [];

  const query = new app.Query('Character');

  query.exists('gender');

  query.equalTo('gender', 'male');
  results.push(await query.count());

  query.equalTo('gender', 'female');
  results.push(await query.count());

  console.log(results);
}

async function averageHeight() {
  let heightSum = 0;
  const query = new app.Query('Character');

  query.exists('height');
  const characters = await query.find();

  characters.map((character) => {
    heightSum += character.get('height');
  });

  const answer = heightSum / characters.length / 100;

  console.log(answer.toFixed(2));
}

async function characterLanguage() {
  const innerQuery = new app.Query('Specie');
  innerQuery.equalTo('language', 'Gungan basic');

  const query = new app.Query('Character');
  query.matchesQuery('species', innerQuery);

  const characters = await query.find();

  characters.map((character) => {
    console.log(character.get('name'));
  });
}

async function mostPopularPlanet() {
  const query = new app.Query('Character');
  const innerQuery = new app.Query('Planet');

  innerQuery.descending('population');
  const planet = await innerQuery.first();

  query.equalTo('homeworld', planet);
  const characters = await query.find();

  characters.map((character) => {
    console.log(character.get('name'));
  });
}

mostPopularPlanet();
