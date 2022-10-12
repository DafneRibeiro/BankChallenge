const Account = require('../src/Account');

class Transaction {
	constructor(transaction) {
		this.transaction = [];
		this.createTransactions(transaction);
	}

	get transactions() {
		return this.transaction;
	}

	createTransactions() {
		this.transaction.push({
			date: '10/01/2012',
			transactionType: 'deposit',
			transactionAmount: 1000
		});

		this.transaction.push({
			date: '13/01/2012',
			transactionType: 'deposit',
			transactionAmount: 2000
		});

		this.transaction.push({
			date: '14/01/2012',
			transactionType: 'withdraw',
			transactionAmount: 500
		});

		return this.transaction;
	}
}

module.exports = Transaction;
