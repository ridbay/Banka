/* eslint-disable linebreak-style */
import TransactionModel from '../models/Transaction';

const Transaction = {

  // create a new Transaction
  /**
     *
     * @param {object} req
     * @param {object} res
     * @returns {object} transaction object
     */
  create(req, res) {
    if (!req.body.type && !req.body.accountNumber && !req.body.cashier && !req.body.amount && !req.body.oldBalance && !req.body.newBalance) {
      // eslint-disable-next-line space-in-parens
      return res.status(400).send( { message: 'All fields(type, account number, cashier, amount, old balance, new balance) are required' });
    }
    const transaction = TransactionModel.create(req.body);
    return res.status(201).send(transaction);
  },
  // get all transactions
  /**
     *
     * @param {object} req
     * @param {object} res
     * @return {object} transaction array
     */
  getAll(req, res) {
    const transactions = TransactionModel.findAll();
    return res.status(200).send(transactions);
  },

  // get one transaction
  /**
     *
     * @param {object} req
     * @param {object} res
     * @returns {object} transaction object
     */
  getOne(req, res) {
    const transaction = TransactionModel.findOne(req.params.id);
    if (!transaction) {
      return res.status(404).send({ message: 'transaction does not exist' });
    }
    return res.status(200).send(transaction);
  },

  // update a transaction
  /**
     *
     * @param {object} req
     * @param {object} res
     * @returns {object} update transaction
     */
  update(req, res) {
    const transaction = TransactionModel.findOne(req.params.id);
    if (!transaction) {
      return res.status(404).send({ message: 'transaction does not exist' });
    }
    const updatedTransaction = TransactionModel.update(req.params.id, req.body);
    return res.status(200).send(updatedTransaction);
  },

  // delete a transaction properties
  /**
     *
     * @param {object} req
     * @param {object} res
     * @returns {void} returns static code 204
     */
  delete(req, res) {
    const transaction = TransactionModel.findOne(req.params.id);
    if (!transaction) {
      return res.status(404).send({ message: 'transaction does not exist' });
    }
    const deleteTransaction = TransactionModel.delete(req.params.id);
    return res.status(204).send(deleteTransaction);
  },
};

export default Transaction;
