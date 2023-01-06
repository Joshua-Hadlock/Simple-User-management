const express = require('express');
const router = express.Router();
const fs = require('fs');
const obj = require('../users.json');

router.post('', (req, res) => {
    id = req.body.id;
    
    var counter = 0
    obj.forEach(user => {
        if (user.id === id) {
            obj.splice(counter, 1)
        }
        counter += 1;
    })

    newObj = JSON.stringify(obj)

    fs.writeFileSync('./users.json', newObj, (err) => {
          if (err) {throw err;}
    })


    res.redirect('/userList')
})

module.exports = router;