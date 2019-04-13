/* eslint-disable linebreak-style */
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
      accountNumber: data.accountNumber || 3042901179,
      firstName: data.firstName || 'Ridwan', // account owner first name
      lastName: data.lastName || 'Balogun', // account owner last name
      email: data.email || 'balogunridwan@gmail.com', // account owner email
      type: data.type  || 'savings', // savings, current
      openingBalance: data.openingBalance || ' 2000889.98',
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
    this.accounts[index].accountNumber = data.accountNumber || account.accountNumber; // user unique id
    this.accounts[index].status = data.status || account.status; // active or dormant
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
    return {"message" : "Account successfully deleted!"};
  }
}
export default new Account();
