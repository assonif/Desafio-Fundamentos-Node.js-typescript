import TransactionRepository from '../repositories/TransactionsRepository';
import ResponseTransaction from '../models/ReponseTransaction';

class GetTransactionsService {
  private transactionRepository: TransactionRepository;

  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  public execute(): ResponseTransaction {
    const transactions = this.transactionRepository.all();

    const balance = this.transactionRepository.getBalance();

    const responseTransaction = new ResponseTransaction({
      balance,
      transactions,
    });

    return responseTransaction;
  }
}

export default GetTransactionsService;
