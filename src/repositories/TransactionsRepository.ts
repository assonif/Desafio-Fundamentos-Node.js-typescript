import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO

    const { income, outcome } = this.transactions.reduce(
      (accumulator: Balance, transaction: Transaction) => {
        switch (transaction.type) {
          case 'income':
            accumulator.income += transaction.value;
            break;
          case 'outcome':
            accumulator.outcome += transaction.value;
            break;
          default:
            break;
        }
        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );
    const total = income - outcome;

    return { income, outcome, total };
  }

  // let income = 0;
  // let outcome = 0;

  // const newUsersList = usersList.filter((user, index, array) => user.credit > 500);

  // const incomeFilter = this.transactions.filter(
  //   transaction => transaction.type === 'income',
  // );

  // const incomeTotal = incomeFilter.map(a => a.)

  // let soma = 0;
  // const income = this.transactions.map(transaction => {
  //   if (transaction.type === 'income') {
  //     soma += transaction.value;
  //   }
  //   return soma;
  // });

  // while (this.transactions < this.transactions.length) {

  // }

  //   for( this.transactions in Array){
  //     [codigo]
  //  }

  // const balance = {
  //   income,
  //   outcome: ,
  //   total: income - outcome,
  // };

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
