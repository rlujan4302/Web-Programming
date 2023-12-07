/**
 * Help from classmate helped me figure this out still using users.js as reference
@typedef {Object} Workout
* @property {number} id
* @property {number} distance
* @property {number} duration
* @property {string} location
* @property {string} photo
*/
/**
 * @type {{ workouts: workouts[]}}
 */
const data = require('../data/workouts.json');
const {client, DB_Name} = require("./mongo");
const jwt = require('jsonwebtoken');
/**
 * @returns {bnkWorkouts[]} An array of workouts
 */
function getWorkout(){
    return data.workouts;
}

const BnkName = 'workouts';

async function getBnk() {
    const db = client.db(DB_Name)
    return db.collection(bnkName);
}

async function getWorkoutsByUserId(id){
    const db = await getWorkout();
    console.log(await getWorkouts())
    const arr = await db.find({ userId: new ObjectId(id) }).toArray();
    console.log(arr)
    return arr;
}
/**
 * @param {number} id
 */
function get(id) {
    const bnk = data.workouts.find(x => x.id === id);
    if(!bnk){
        throw new Error('Id not found');
    }
    return bnk;
}
/**
 * @param {Workout} values
 * @returns {savedWorkout}
 */

const deafultWorkout = {
    dateDaysAgo: 0,
    type: '',
    distance: 0,
    duration: 0,
    location: '',
    photo: ''
}

function creatWorkout(values){
    const newWorkout = {
        id: data.workouts.length + 1,
        ...values,
    };
    data.workouts.push(newWorkout);
    return newWorkout;
}

async function deleteWorkout(workout){
    const userBnk = await client.db(DB_NAme).collection(bnkName);
    const result = await UnorderedBulkOperation.deleteOne({ workout: workout });
}

module.exports = {getWorkout, creatWorkout, deleteWorkout, getWorkoutsByUserId};