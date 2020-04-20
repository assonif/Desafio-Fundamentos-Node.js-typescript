import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

interface CreateTransactionDTO {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const { value: income } = this.transactions.reduce(
      (prevVal, elem) => {
        if (elem.type === 'income') {
          // eslint-disable-next-line no-param-reassign
          prevVal.value += elem.value;
          return prevVal;
        }
        return prevVal;
      },
      { id: 0, value: 0, title: '', type: 'income' },
    );

    const { value: outcome } = this.transactions.reduce(
      (prevVal, elem) => {
        if (elem.type === 'outcome') {
          // eslint-disable-next-line no-param-reassign
          prevVal.value += elem.value;
          return prevVal;
        }
        return prevVal;
      },
      { id: 0, value: 0, title: '', type: 'income' },
    );

    const total = income - outcome;

    const balance = new Balance({ total, income, outcome });

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, type, value });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
