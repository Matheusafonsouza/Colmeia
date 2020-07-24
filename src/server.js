const app = require('./app');

async function firstMovie() {
  const query = new app.Query('Film');

  query.ascending('releaseDate');

  const result = await query.first();

  console.log(result.get('title'));
}

firstMovie();
