const express = require('express');
const { getUserByEmail, createUser } = require('./UserManager');
const router = express.Router();
const userManager = require("./UserManager");
const jwt = require('jsonwebtoken');

//Handle user sign in
router.post('/userlogin', async (req, res) => {

    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user) {
        res.status(400).send(null);
    }

    else if (user.password !== password) {
        res.status(400).send(null);
    }

    else if (user.password === password) {

        const token = jwt.sign(
            { email: email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        res.status(200).send({
            ...user,
            token: token
        })
    }
})

//Handle user register
router.post('/usersignup', async (req, res) => {

    const { email, password, isAdmin } = req.body;

    sampleUser = await getUserByEmail(email);

    if (sampleUser) {
        return res.status(400).send(null);
    }

    const token = jwt.sign(
        { email: email },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );

    const user = await createUser({
        email: email,
        password: password,
        isAdmin: isAdmin,
        token: token
    })

    res.status(201).send(user);
})


module.exports = router;