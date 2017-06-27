var random = require('./randomNumber.js');
var dollars = require('./convertToDollars.js');

function moduleThree() {
  return dollars(random(100, 1000000));
};

module.exports = {
  moduleThree: moduleThree,
  text: "Account balance: \n"
};
