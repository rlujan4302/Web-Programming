// @ts-check
/**
 * @typedef {Object} Bank
 * @property {string} cardExpire
 * @property {string} cardNumber
 * @property {string} cardType
 * @property {string} currency
 * @property {string} iban
 */

/**
 * @typedef {Object} Coordinates
 * @property {number} lat
 * @property {number} lng
 */

/**
 * @typedef {Object} Address
 * @property {string} address
 * @property {string} [city]
 * @property {Coordinates} coordinates
 * @property {string} postalCode
 * @property {string} state
 */

/**
 * @typedef {Object} BaseUser
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} gender
 * @property {number} age
 * @property {string} email
 * @property {string} phone
 * @property {string} username
 * @property {string} password
 * @property {string} birthDate
 * @property {string} image
 * @property {number} height
 * @property {number} weight 
 * @property {Bank} bank
 * @property {string} ein
 * @property {string} ssn
 * @property {string} userAgent
 */

/**
 * @typedef {Object} HasId
 * @property {number} id
 */

/**
 * @typedef {BaseUser & HasId} User
 */

/**
 * @type { {users: User[]} }
 */
const data = require('../data/users.json');

const {client, DB_NAME, ObjectId} = require("./mongo");
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const user_Name = "users";
async function getUserInfo() {
    console.log('getUserInfo', DB_NAME, user_Name);
    const db = client.db(DB_NAME);
    return db.collection(user_Name);
}
/**
 * @returns {User[]} An array of products.
 */
function getAll(){
    return data.users;
}
async function get(id){
    const bnk = data.users.find(x => x.id === id);
    if(!bnk){
        throw new Error('User not Found');
    }
    return bnk;
}

function search(query){//Taken from class as I think it works best
    return data.users.filter(c => {
        return (
            c.firstName.toLowerCase().includes(query.toLowerCase()) ||
            c.lastName.toLowerCase().includes(query.toLowerCase()) ||
            c.email.toLowerCase().includes(query.toLowerCase()) ||
            c.username.toLowerCase().includes(query.toLowerCase()) 
        );
    });
}

/**
 * @param {BaseUser} values - The user to create.
 * @returns {User} The created user.
 */

function create(values){
    const newU = {
        id: data.users.length + 1,
        ...values,
    };
    data.users.push(newU);
    return newU;
}

/**
 * @param {BaseUser} values - The user to create.
 * @returns {User} The created user.
 */

function register(values){
    const userAlready = data.users.some(x => x.username === values.username);
    if(userAlready){
        throw new Error('Username is already taken');
    }
    if(values.password.length < 8){
        throw new Error('password must be at leadt 8 characters');
    }

    const newU = {
        id: data.users.length + 1,
        ...values,
    };

    data.users.push(newU);
    return newU;
}

/**
 * @param {string} email
 * @param {string} password
 * @returns { Promise< { user: User, token: string}> } The created user.
 */

async function login(email, password){
    const bnk = data.users.find(x => x.email === email);
    if(!bnk){
        throw new Error('User not found');
    }
    else if(bnk.password !== password){
        throw new Error('Wrong username or password');
    }

    const user = { ...bnk, password: undefined, admin: true};
    const token = await generateJWT(user);
    return {user, token}; 
}

/**
 * @param {User} newValues - The user's new data.
 * @returns {User} The updated user.
 */

function update(newValues) {
    const index = data.users.findIndex(p => p.id === newValues.id);
    if(index === -1) {
      throw new Error('User not found');
    }
    data.users[index] = {
      ...data.users[index],
      ...newValues,
    };
    return data.users[index];
  }
  
  /**
   * @param {number} id - The user's ID.
   */
  
  function remove(id) {
    const index = data.users.findIndex(x => x.id === id);
    if(index === -1) {
      throw new Error('User not found');
    }
    data.users.splice(index, 1);
  }
  
  function generateJWT(user) {
    return new Promise((resolve, reject) => {
      jwt.sign(user, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } , (err, token) => {
        if(err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    })
  }
  
  function verifyJWT(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, JWT_SECRET, (err, user) => {
        if(err) {
          reject(err);
        } else {
          resolve(user);
        }
      });
    })
  }
  
  
  module.exports = {
    getAll, get, search, create, update, remove, login, register, generateJWT, verifyJWT
  };