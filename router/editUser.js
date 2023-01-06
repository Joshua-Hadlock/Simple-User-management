const express = require('express');
const router = express.Router();
const fs = require('fs');
const obj = require('../users.json');

router.post('', (req, res) => {
    const id = req.body.id;
    var hasNotFoundId = true; 

    obj.forEach(theUser => {
        if (theUser.id === id) {
            hasNotFoundId = false;
            res.render('edit', {user: theUser})
        }
    })

    if (hasNotFoundId) {
        res.redirect('/userList')
    }
})

module.exports = router;