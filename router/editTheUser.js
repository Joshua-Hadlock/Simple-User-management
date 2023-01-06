const express = require('express');
const router = express.Router();
const fs = require('fs');
const obj = require('../users.json');

router.post('', (req, res) => {
    const id = req.body.id;
    const username = req.body.userName;
    const email = req.body.email
    const name = req.body.name
    const age = req.body.age

    const newUser = {
        id: id,
        username: username,
        email: email,
        name: name,
        age: age
    }

    var counter = 0;
    obj.forEach(theUser => {
        if (theUser.id === id) {
            obj.splice(counter, 1, newUser)
        }
        counter += 1;
    })

    newObj = JSON.stringify(obj)

    fs.writeFileSync('./users.json', newObj, (err) => {
          if (err) {throw err;}
    })

    res.redirect('/userList');
})

module.exports = router;