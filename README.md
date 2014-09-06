# Estimate password strength in javascript

On a scale of 0 = weak to 5.0 = strong.

	$  npm install strength --save

[![NPM version](https://badge.fury.io/js/strength.svg)](http://badge.fury.io/js/strength)

No dependencies.

## Usage

	var strength = require('strength');

	var password = 'password';

	var howStrong = strength(password);

	console.log(howStrong); // 0

## Password criteria

* automatically fails 10,000 most common passwords
* letters, case, numbers, special characters
* length
* repitition

## Tests

	npm test

## License

MIT

## Author

Jeff Parrish @ruffrey
