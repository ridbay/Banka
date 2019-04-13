/* eslint-disable dot-notation */
/* eslint-disable linebreak-style */
import moment from 'moment';
import uuid from 'uuid';

class Transaction {
  /**
     * class constructor
     * @param {object} data
     */
  constructor() {
    this.transactions = [];
  }

  // create a new Transaction
  /**
     *
     * @returns {object} transaction object
     */
  create(data) {
    const newTransaction = {
      transactionId: uuid.v4(), // set the default transaction id
      accountNumber: data.accountNumber || '',
      amount: data.amount || '',
      cashier: data.cashier || '',
      transactionType: data.transactionType || '',
      accountBalance: data.accountBalance,

    };
    this.transactions.push(newTransaction);
    return newTransaction;
  }

  // find one transaction
  /**
     *
     * @param {uuid} id
     * @returns {object} transaction object
     */
  findOne(id) {
    return this.transactions.find(transaction => transaction.transactionId === id);
  }

  // find all transactions
  /**
     * @returns {object} returns all transactions
     */
  findAll() {
    return this.transactions;
  }

  // update a transaction
  /**
     * @param {uuid} id
     * @param {object} data
     */
  update(id, data) {
    const transaction = this.findOne(id);
    const index = this.transactions.indexOf(transaction);
    this.transactions[index].cashier = data['cashier'] || transaction.cashier;
    this.transactions[index].amount = data['amount'] || transaction.amount;
    return this.transactions[index];
  }

  /**
     *
     * @param {uuid} id
     */
  delete(id) {
    const transaction = this.findOne(id);
    const index = this.transactions.indexOf(transaction);
    this.transactions.splice(index, 1);
    return {};
  }
}
export default new Transaction();
