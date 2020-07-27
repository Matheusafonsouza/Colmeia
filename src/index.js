// imports
const { Parser } = require('json2csv');
const fs = require('fs');
const app = require('./app');

// run function
async function run() {
  // questions answers
  const title = await app.firstMovie();
  const height = await app.averageHeight();
  const language = await app.characterLanguage();
  const gender = await app.genderCounter();
  const planet = await app.mostPopularPlanet();
  const life = await app.lifeSpan();

  // create object to generate csv
  const data = {
    'Pergunta 1': title,
    'Pergunta 2': life,
    'Pergunta 3': gender,
    'Pergunta 4': height,
    'Pergunta 5': language,
    'Pergunta 6': planet,
  };

  // generate csv and save it
  try {
    const parser = new Parser({ delimiter: ';' });
    const csv = parser.parse(data);

    fs.writeFile('answers.csv', csv, (err) => {
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
