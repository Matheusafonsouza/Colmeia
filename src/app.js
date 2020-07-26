// imports
const Parse = require('parse/node');

// class
class App {
  constructor() {
    Parse.initialize(
      'Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3',
      'Aqy19HFsorwxIhCC3E9IYBQh8WBnkdoMGOdEaYPe'
    );

    Parse.serverURL = 'https://parseapi.back4app.com/';

    this.server = Parse;
  }

  // returns the first Star Wars movie
  async firstMovie() {
    const query = new this.server.Query('Film');

    query.ascending('releaseDate');

    const result = await query.first();

    return result.get('title');
  }

  // returns the 3 species with the shortest lifespan
  async lifeSpan() {
    const result = [];
    const query = new this.server.Query('Specie');

    query.exists('averageLifespan');
    query.notEqualTo('averageLifespan', null);
    query.ascending('averageLifespan');
    query.limit(3);

    const species = await query.find();

    species.forEach((specie) => {
      result.push(specie.get('name'));
    });

    return result;
  }

  // returns the number of characters for each sex
  async genderCounter() {
    const results = [];

    const query = new this.server.Query('Character');

    query.exists('gender');

    query.equalTo('gender', 'male');
    results.push(await query.count());

    query.equalTo('gender', 'female');
    results.push(await query.count());

    return `M:${results[0]},F:${results[1]}`;
  }

  // returns the characters average height
  async averageHeight() {
    let heightSum = 0;
    const query = new this.server.Query('Character');

    query.exists('height');
    const characters = await query.find();

    characters.forEach((character) => {
      heightSum += character.get('height');
    });

    const answer = heightSum / characters.length / 100;

    return answer.toFixed(2);
  }

  // returns the characters who speak gungan basic
  async characterLanguage() {
    const result = [];

    const innerQuery = new this.server.Query('Specie');
    innerQuery.equalTo('language', 'Gungan basic');

    const query = new this.server.Query('Character');
    query.matchesQuery('species', innerQuery);

    const characters = await query.find();

    characters.forEach((character) => {
      result.push(character.get('name'));
    });

    return result;
  }

  // returns the residents of the most populous planet
  async mostPopularPlanet() {
    const result = [];

    const query = new this.server.Query('Character');
    const innerQuery = new this.server.Query('Planet');

    innerQuery.descending('population');
    const planet = await innerQuery.first();

    query.equalTo('homeworld', planet);
    const characters = await query.find();

    characters.forEach((character) => {
      result.push(character.get('name'));
    });

    return result;
  }
}

module.exports = new App();
