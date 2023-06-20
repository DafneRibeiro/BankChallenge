const Account = require('../src/Account');
const Statement = require('../src/Statement');

// Test 8

describe(`Test 8`, () => {
	it(`Test if my transactions are stored so I can later print a statement`, () => {
		//arrange
		const account = new Account();

		//act
		actual = account.transaction.length;

		//assert
		expect(actual).toBe(3);
	});
});

