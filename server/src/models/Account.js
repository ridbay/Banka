/* eslint-disable linebreak-style */
import moment from 'moment';
import uuid from 'uuid';

class Account {
  /**
     * class constructor
     * @param {object} data
     */
  constructor() {
    this.accounts = [];
  }

  // create a new Account
  /**
     *
     * @returns {object} account object
     */
  create(data) {
    const newAccount = {
      id: uuid.v4(), // set the default account id
      accountNumber: data.accountNumber || '',
      createdOn: moment.now() || '',
      owner: data.owner || '',
      type: data.type || '',
      status: data.status || '',
      balance: data.balance,

    };
    this.accounts.push(newAccount);
    return newAccount;
  }

  // find one account
  /**
     *
     * @param {uuid} id
     * @returns {object} account object
     */
  findOne(id) {
    return this.accounts.find(account => account.id === id);
  }

  // find all accounts
  /**
     * @returns {object} returns all accounts
     */
  findAll() {
    return this.accounts;
  }

  // update a account
  /**
     * @param {uuid} id
     * @param {object} data
     */
  update(id, data) {
    const account = this.findOne(id);
    const index = this.accounts.indexOf(account);
    this.accounts[index].accountNumber = data.accountNumber || account.accountNumber;
    this.accounts[index].createdOn = data.createdOn || account.createdOn;
    this.accounts[index].owner = data.owner || account.owner;
    this.accounts[index].type = data.type || account.type;
    this.accounts[index].status = data.status || account.status;
    this.accounts[index].balance = data.balance || account.balance;
    return this.accounts[index];
  }

  /**
     *
     * @param {uuid} id
     */
  delete(id) {
    const account = this.findOne(id);
    const index = this.accounts.indexOf(account);
    this.accounts.splice(index, 1);
    return {};
  }
}
export default new Account();
