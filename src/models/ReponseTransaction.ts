import Transaction from './Transaction';
import Balance from './Balance';

class ResponseTransaction {
  transactions: Transaction[];

  balance: Balance;

  constructor({ balance, transactions }: ResponseTransaction) {
    this.transactions = transactions;
    this.balance = balance;
  }
}

export default ResponseTransaction;
