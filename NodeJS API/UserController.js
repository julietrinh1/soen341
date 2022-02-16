const express = require('express');
const router = express.Router();
const userManager = require("./UserManager");

//Get all users
router.get('/', async (req, res) => {
    try{
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

//Update user
router.patch('/:id', (req, res) => {
    
})

//Delete user
router.delete('/:id', (req, res) => {
    
})

module.exports = router;