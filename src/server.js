const { Parser } = require('json2csv');
const fs = require('fs');
const app = require('./app');

async function abc() {
  const data1 = await app.firstMovie();
  const data4 = await app.averageHeight();
  const data5 = await app.characterLanguage();
  const data3 = await app.genderCounter();
  const data6 = await app.mostPopularPlanet();
  const data2 = await app.lifeSpan();

  const data = {
    Pergunta1: data1,
    Pergunta2: data2.join(','),
    Pergunta3: data3,
    Pergunta4: data4,
    Pergunta5: data5.join(','),
    Pergunta6: data6.join(','),
  };

  try {
    const parser = new Parser();
    const csv = parser.parse(data);

    fs.writeFile('test.csv', csv, (err) => {
      if (err) return console.log(err);

      console.log('csv created!');
    });
  } catch (err) {
    console.error(err);
  }
}

abc();
