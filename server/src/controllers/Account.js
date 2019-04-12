import AccountModel from '../models/Account';

const Account = {

    //create a new Account
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} account object
     */
    create(req, res) {
        if(!req.body.accountNumber && !req.body.owner && !req.body.type && !req.body.status && !req.body.balance) {
            return res.status(400).send( {'message': 'All fields are required'});
        }
        const account = AccountModel.create(req.body);
        return res.status(201).send(account);
    },
    //get all accounts
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @return {object} account array
     */
    getAll(req, res) {
        const accounts = AccountModel.findAll();
        return res.status(200).send(accounts);
    },

    //get one account
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} account object
     */
    getOne(req, res) {
        const account = AccountModel.findOne(req.params.id);
        if(!account) {
            return res.status(404).send({'message': 'account not found' });
        }
        return res.status(200).send(account);
    },

    //update a account
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} update account
     */
    update(req, res){
        const account = AccountModel.findOne(req.params.id);
        if(!account) {
            return res.status(404).send({'message': 'account not found'});
        }
        const updatedAccount = AccountModel.update(req.params.id, req.body);
        return res.status(200).send(updatedAccount);
    },

    //delete a account properties
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {void} returns static code 204
     */
    delete(req, res) {
        const account = AccountModel.findOne(req.params.id);
        if(!account){
            return res.status(404).send({'message': 'account not found'});
        }
        const deleteAccount = AccountModel.delete(req.params.id);
        return res.status(204).send(deleteAccount);
    }
};

export default Account;
