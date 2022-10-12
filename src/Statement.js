const Account = require('./Account');
const Transaction = require('../src/Transaction');

class Statement {
	#statement;

	constructor(statement) {
		this.#statement = statement;
	}

	get statement() {
		return this.#statement;
	}

	printTransactions() {
		console.log('date       || credit  || debit   || balance');
		for (let trans of this.#statement.transaction.reverse()) {
			if (trans.transactionType === 'deposit') {
				console.log(`${trans.date} ||         || ${trans.transactionAmount.toFixed(2)} || ${trans.balance.toFixed(2)}`);
			} else {
				console.log(`${trans.date} || ${trans.transactionAmount.toFixed(2)}  ||         || ${trans.balance.toFixed(2)}`);
			}
		}
	}
}

module.exports = Statement;
