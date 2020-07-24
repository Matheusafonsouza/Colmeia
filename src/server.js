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
  query.ascending('averageLifespan');
  query.limit(3);

  const results = await query.find();

  console.log(results);
}

firstMovie();
