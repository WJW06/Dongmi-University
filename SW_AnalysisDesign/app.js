// ./myapp/app.js
const express = require('express');
const app = express();
const port = 3000;

// get(direction, callback function)
app.get('/', (req, res)=>{
    res.send("Hello World");
});

// listen (port, callback function)
app.listen(port, ()=>{
    console.log(`Example app listening on port ${3000}`);
});