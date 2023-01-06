const express = require('express');
const router = express.Router();
const fs = require('fs');
const obj = require('../users.json');
const uuidv4 = require('uuid');

router.post('/addUserData', (req, res) => {
    const username = req.body.userName;
    const email = req.body.email
    const name = req.body.name
    const age = req.body.age

    const newUser = {
        id: uuidv4.v4(),
        username: username,
        email: email,
        name: name,
        age: age
    }

    obj.push(newUser);

    newObj = JSON.stringify(obj)

    fs.writeFileSync('./users.json', newObj, (err) => {
          if (err) {throw err;}
    })

    res.redirect('/userList');
})

module.exports = router;