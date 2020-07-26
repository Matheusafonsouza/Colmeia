const { Parser } = require('json2csv');
const fs = require('fs');
const app = require('./app');

async function run() {
  const title = await app.firstMovie();
  const height = await app.averageHeight();
  const language = await app.characterLanguage();
  const gender = await app.genderCounter();
  const planet = await app.mostPopularPlanet();
  const life = await app.lifeSpan();

  const data = {
    question1: title,
    question2: life.join(','),
    question3: gender,
    question4: height,
    question5: language.join(','),
    question6: planet.join(','),
  };

  try {
    const parser = new Parser({ delimiter: ';' });
    const csv = parser.parse(data);

    fs.writeFile('test.csv', csv, (err) => {
      if (err) {
        return console.log(err);
      }

      return console.log('csv created!');
    });
  } catch (err) {
    console.error(err);
  }
}

run();
