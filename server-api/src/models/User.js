/* eslint-disable indent */
// import moment from 'moment';
import uuid from 'uuid';

class User {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
        this.users = [
            { 
                id: uuid.v4(),
                email : 'balogunridwan@gmail.com',
                firstName : 'Ridwan',
                lastName : 'Balogun',
                password : '12345',
                type : 'client', // client or staff
                isAdmin : true, // must be a staff user account
              },
              { 
                id: uuid.v4(),
                email : 'barakat@gmail.com',
                firstName : 'Barakat',
                lastName : 'Obatade',
                password : '12345',
                type : 'staff', // client or staff
                isAdmin : true, // must be a staff user account
              },
              { 
                id: uuid.v4(),
                email : 'tola@gmail.com',
                firstName : 'Tola',
                lastName : 'Adewale',
                password : '12345',
                type : 'client', // client or staff
                isAdmin : true, // must be a staff user account
              }
        ];
    }

    // create a new User
    /**
     * 
     * @returns {object} user object
     */
    create(data) {
        const newUser = {
            id: uuid.v4(), // set the default user id
            email: data.email || '',
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            password: data.password || '',
            type: data.type || '', // client or staff
            isAdmin: data.isAdmin, // must be a staff user account
        };
        this.users.push(newUser);
        return newUser;
    }

    // find one user
    /**
     * 
     * @param {uuid} id
     * @returns {object} user object
     */
    findOne(id) {
        return this.users.find(user => user.id === id);
    }

    // find all users
    /**
     * @returns {object} returns all users
     */
    findAll() {
        return this.users;
    }

    // update a user
    /**
     * @param {uuid} id
     * @param {object} data
     */
    update(id,data) {
        const user = this.findOne(id);
        const index = this.users.indexOf(user);
        this.users[index].email = data['email'] || user.email;
        this.users[index].firstName = data['firstName'] || user.firstName;
        this.users[index].lastName = data['lastName'] || user.lastName;
        this.users[index].password = data['password'] || user.password;
        this.users[index].type = data['type'] || user.type;
        this.users[index].isAdmin = data['isAdmin'] || user.isAdmin;
        return this.users[index];
    }
    /**
     * 
     * @param {uuid} id
     */
    delete(id) {
        const user = this.findOne(id);
        const index = this.users.indexOf(user);
        this.users.splice(index,1);
        return {};
    }
}
export default new User();