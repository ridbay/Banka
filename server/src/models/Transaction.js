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
      id: uuid.v4(), // set the default transaction id
      createdOn: moment.now() || '',
      type: data.type || '',
      accountNumber: data.accountNumber || '',
      cashier: data.cashier || '',
      amount: data.amount || '',
      oldBalance: data.oldBalance || '',
      newBalance: data.newBalance || '',
      modifiedDate: moment.now(),

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
    return this.transactions.find(transaction => transaction.id === id);
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
    this.transactions[index].modifiedDate = moment.now();
    this.transactions[index].type = data['type'] || transaction.type;
    this.transactions[index].accountNumber = data['accountNumber'] || transaction.accountNumber;
    this.transactions[index].cashier = data['cashier'] || transaction.cashier;
    this.transactions[index].amount = data['amount'] || transaction.amount;
    this.transactions[index].oldBalance = data['oldBalance'] || transaction.oldBalance;
    this.transactions[index].newBalance = data['newBalance'] || transaction.newBalance;
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
