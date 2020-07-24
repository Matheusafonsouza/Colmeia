const Parse = require('parse/node');

class App {
  constructor() {
    Parse.initialize(
      'Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3',
      'Aqy19HFsorwxIhCC3E9IYBQh8WBnkdoMGOdEaYPe'
    );

    Parse.serverURL = 'https://parseapi.back4app.com/';

    this.server = Parse;
  }
}

module.exports = new App().server;
