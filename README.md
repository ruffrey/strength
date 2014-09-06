# Estimate password strength in javascript

On a scale of 0=weak to 5=strong

	$  npm install strength --save

## Usage

	var strength = require('strength');

	var password = 'password';

	var howStrong = strength(password);

	console.log(howStrong); // 0

## More features

* none
* send a PR my friend

## Tests

	npm test

## License

MIT

## Author

Jeff Parrish @ruffrey
