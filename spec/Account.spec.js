const Account = require('../src/Account');
const Transactions = require('../src/Transaction');

// Test 1

describe(`Test 1`, () => {
	it(`Test to check if a transaction for a deposit of 1000 was added to my account`, () => {
		//arrange
		const transaction = new Transactions();
		const newTransaction = transaction.createTransactions();
		expected = 1000;

		//act
		actual = newTransaction[0].transactionAmount;

		//assert
		expect(actual).toBe(expected);
	});
});

// Test 2

describe(`Test 2`, () => {
	it(`Test to check if a transaction for a deposit of 2000 was added to my account`, () => {
		//arrange
		const transaction = new Transactions();
		const newTransaction = transaction.createTransactions();
		expected = 2000;

		//act
		actual = newTransaction[1].transactionAmount;

		//assert
		expect(actual).toBe(expected);
	});
});

// Test 3
describe(`Test 3`, () => {
	it(`Test to check if a transaction for a withdraw of 500 was added to my account`, () => {
		//arrange
		const transaction = new Transactions();
		const newTransaction = transaction.createTransactions();
		expected = 500;

		//act
		actual = newTransaction[2].transactionAmount;

		//assert
		expect(actual).toBe(expected);
	});
});
