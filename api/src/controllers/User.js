import UserModel from '../models/User';

const User = {

  //create a new user
  /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} user object
     */
  create(req, res) {
    if(!req.body) {
      return res.status(400).send( {message: 'All fields are required'});
    }
    const user = UserModel.create(req.body);
    return res.status(201).send(user);
  },
  //get all users
  /**
     * 
     * @param {object} req
     * @param {object} res
     * @return {object} user array
     */
  getAll(req, res) {
    const users = UserModel.findAll();
    return res.status(200).send(users);
  },

  //get one user
  /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} user object
     */
  getOne(req, res) {
    const user = UserModel.findOne(req.params.id);
    if(!user) {
      return res.status(404).send({message: 'user not found' });
    }
    return res.status(200).send(user);
  },

  //update a user
  /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} update user
     */
  update(req, res){
    const user = UserModel.findOne(req.params.id);
    if(!user) {
      return res.status(404).send({message: 'user not found'});
    }
    const updatedUser = UserModel.update(req.params.id, req.body);
    return res.status(200).send(updatedUser);
  },

  //delete a user properties
  /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {void} returns static code 204
     */
  delete(req, res) {
    const user = UserModel.findOne(req.params.id);
    if(!user){
      return res.status(404).send({message: 'user not found'});
    }
    const deleteUser = UserModel.delete(req.params.id);
    return res.status(204).send(deleteUser);
  }
};

export default User;
