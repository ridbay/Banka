import uuid from 'uuid';
let users = [
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

]

export default users;