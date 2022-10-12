const Account = require('../src/Account');
const Transaction = require('../src/Transaction');
const Statement = require('../src/Statement');

class Main {
	static main() {
		const myTransactions = new Account();

		const statement = new Statement(myTransactions);
		statement.printTransactions();
	}
}

Main.main();
