const Transaction = require('../src/Transaction');
const Account = require('../src/Account');
const Statement = require('../src/Statement');

// TEST 4 - Identify type of transaction as a deposit

describe(`Test 4`, () => {
	it(`Test if I can identify the transaction type in my account when I do a deposit`, () => {
		//arrange
		const account = new Account();
		const transTypeTest = { date: '10/01/2012', transactionType: 'deposit', transactionAmount: 1000 };
		expected = 'deposit';

		//act
		actual = transTypeTest.transactionType;

		//assert
		expect(actual).toEqual(expected);
	});
});

// Test 5 - Identify type of transaction as a withdraw

describe(`Test 5`, () => {
	it(`Test if I can identify the transaction type in my account when I do a withdraw`, () => {
		//arrange
		const account = new Account();
		const transTypeTest = { date: '14/01/2012', transactionType: 'withdraw', transactionAmount: 500 };
		expected = 'withdraw';

		//act
		actual = transTypeTest.transactionType;

		//assert
		expect(actual).toEqual(expected);
	});
});

// Test 6 and 7 - Identify the date in a transaction

describe(`Test 6`, () => {
	it(`Test if I can identify the transaction date in my deposit`, () => {
		//arrange
		const account = new Account();
		const transTypeTest = { date: '10/01/2012', transactionType: 'deposit', transactionAmount: 1000 };
		expected = '10/01/2012';

		//act
		actual = transTypeTest.date;

		//assert
		expect(actual).toEqual(expected);
	});
});

describe(`Test 7`, () => {
	it(`Test if I can identify the transaction date in my withdraw`, () => {
		//arrange
		const account = new Account();
		const transTypeTest = { date: '14/01/2012', transactionType: 'withdraw', transactionAmount: 500 };
		expected = '14/01/2012';

		//act
		actual = transTypeTest.date;

		//assert
		expect(actual).toEqual(expected);
	});
});
