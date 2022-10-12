const Transaction = require('./Transaction');

class Account {
	#balance = 0;
	#transaction;

	constructor(transactionObject = new Transaction()) {
		this.#transaction = transactionObject.transaction;
		this.transactionType = '';
		this.balanceTotal(this.#balance);
	}

	get balance() {
		return this.#balance;
	}

	get transaction() {
		return this.#transaction;
	}

	balanceTotal() {
		for (let trans of this.#transaction) {
			if (trans.transactionType === 'deposit') {
				this.#balance += trans.transactionAmount;
				trans.balance = this.balance;
			} else {
				this.#balance -= trans.transactionAmount;
				trans.balance = this.balance;
			}
		}
	}
}

module.exports = Account;
