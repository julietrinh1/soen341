const express = require('express');
const { getUserByEmail } = require('./UserManager');
const router = express.Router();
const userManager = require("./UserManager");

//Get all users
router.get('/', async (req, res) => {
    try{
        const users = await userManager.getAllUsers();
        console.log(users);
        res.send(users);
        const users = await userManager.listAllUsers;
        res.json(users);
    }
    catch(e){
        res.status(500).json({message: e.message});
    }
})

//Get one user with id "id"
router.get('/:id', (req, res) => {

})

//Create user
router.post('/', (req, res) => {
    
})

//Check if user exists
router.post('/usercheck', async (req, res) => {
    getUserByEmail(req.body.email).then(user => {
        if(!user){
            res.send(null)
        }
        else{
            res.send(user);
        }
    });
})

//Handle user sign in
router.post('/userlogin', async (req, res) => {
    getUserByEmail(req.body.email).then(user => {
        if(!user){
            res.send(null);
        }
        else if(req.body.password === user.password){
            res.send(user);
        }
        else{
            res.send(null);
        }
    });
})

//Handle user register
router.post('/usersignup', async (req, res) => {
    getUserByEmail(req.body.email).then(sampleUser => {
        if(!sampleUser){
            userManager.createUser({
                email:req.body.email,
                password: req.body.password,
            }).then(user => {
                res.send(user);
            }).catch(e => {
                res.status(500).send(e);
            });
        }
        else{
            res.send(null);
        }
    });
})

//Update user
router.patch('/:id', (req, res) => {
    
})

//Delete user
router.delete('/:id', (req, res) => {
    
})

module.exports = router;