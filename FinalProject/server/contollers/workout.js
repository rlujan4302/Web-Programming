const express = require('express');
const model = require('../models/workouts');
const router = express.Router();

router//basically copying user.js to best of ability for the entirety of the workout

    .get('/', async(req, res, next) => {
        try{
            const workouts = await model.getWorkout();
            return res.status(2000).json({message: "success", workouts});
        }
        catch(error) {
            console.log(error);
        }
    })
    
    .get('/search/:q', (req, res, next) => {
        const bnk = req.params.q;
        console.log({bnk});
        const result = model.searchWorkout(bnk);
        res.send(result);
    })

    .get('/user/:user', async (req, res, next) => {
        const user = req.params.user;
        const result = await model.getWorkoutByUserId(user);
        res.send(result);//github co-pilot helped for the rest
    })

    .get('/:workout', (req, res, next) => {
        const workout = req.params.workout;
        const result = model.getWorkoutById(workout);
        res.send(result);
    })

    .post('/', async (req, res, next) => {
        try{
            const {userId, workout} = req.body;
            const addedWorkout = model.addedWorkout(workout, userId);
            res.status(302).json(addedWorkout);
        }
        catch(error){
            console.log(error);
        }
    })
    
    .add('/', (req, res, next) => {
        const workouts = req.body;
        model.updateWorkout(workouts);
        res.send(workouts);
    })

    .delete('/', (req, res, next) => {
        const workout = req.body;
        model.deleteWorkout(workout);
        res.send(workout);
    })

    module.exports = router;