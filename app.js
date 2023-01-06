const fs = require('fs');
const express = require('express');
const path = require('path')
const userData = require('./router/userData')
const deleteUser = require('./router/deleteUser')
const editUser = require('./router/editUser')
const editTheUser = require('./router/editTheUser')
const obj = require('./users.json');

const port = process.env.PORT || 3000;
const app = express();

// initialize data encoding
app.use(express.urlencoded({extended: false}));

// initialize pug
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

// initialize everything in the public folder
app.use(express.static('./public'));
app.use('/userData', userData)
app.use('/deleteUser', deleteUser)
app.use('/editUser', editUser)
app.use('/editTheUser', editTheUser);

app.get('/createUser', (req, res) => {
    res.render('createUser');
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/userList', (req, res) => {
    res.render('list', { users: obj });
})

app.get('/editUser', (req, res) => {
    res.render('edit')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
