const app = require('./app');

async function firstMovie() {
  const query = new app.Query('Film');

  query.ascending('releaseDate');

  const result = await query.first();

  console.log(result.get('title'));
}

async function lifesSpan() {
  const query = new app.Query('Specie');

  query.exists('averageLifespan');
  query.ascending('averageLifespan');
  query.limit(3);

  const results = await query.find();

  console.log(results);
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

  console.log(heightSum / characters.length);
}

firstMovie();
