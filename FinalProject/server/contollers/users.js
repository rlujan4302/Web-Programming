const express = require ('express');
const { getAll, get, search, create, update, remove, login, register } = require('../models/users');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        console.log('getting info from user')
        let users = res.send(gettAll());
        return res.status(200).jsom({message: "success", users})
    }
    catch(error){
        console.log(error)
    }
})

.get('/search', (req, res, next) => {
    const result = search(req.query.q);
    res.send(result); //taken from class
})

.get('/:id', (req, res, next) => {
    users.getById(req.params.id).then(x=> {
        const data = {data: x, isSuccess: true};
        res.send(data)
    }).catch(next); //helped by classmate in idea how to do this away from class method
})

.post('/', (req, res, next) => {
    users.add(req.body).then(x => {
        const data = {data: x, isSuccess: true};
        res.send(data)
    }).catch(next)
})

.post('/register', (req, res, next) => {
    const user = register(reg.body);
    res.send(user); //taken from class
})

.post('/login', (req, res, next) => {
    users.login(req.body.email, req.body.password).then(x => {
        const data = {data: x, isSuccess: true};
        res.send(data)
    }).catch(next)
})

.delete('/', (req, res, next) => {
    remove(+req.params.id);
    res.send({message: 'User Removed'}); //Taken from class... you get the idea
});

module.exports = router;
