'use strict';

module.exports.generateRandomNumber = event => {
 const randomNumber = parseInt(Math.random() * 100);
 console.log('random generated integer is: ',randomNumber);
 return randomNumber;
};



