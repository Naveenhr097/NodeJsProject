const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended : false}));

app.use('/users',(req, res, next) => {
    res.send("<form action = '/userdata' method = 'POST'><input type = 'text' name = 'title'> <button type = 'submit'>Add User</form>");
    // next();
})

app.post('/userdata', (req, res, next) => {
    console.log(req.body);
    console.log("hello");
    res.redirect('/');

})

app.use('/', (req, res, next) => {
    res.send("<h1>This is an HTML Page</h1>");
})


// app.use('/',(req, res, next) => {
//     console.log("in the second midlware!!");
//     res.send("<h1>This is an HTML Page</h1>");
//     //res.end();
//     // next();
// })

// app.use('/',(req, res, next) => {
//     console.log("in the third midlware!!");
// })

app.listen(2000);