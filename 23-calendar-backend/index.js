const express = require('express');
require('dotenv').config();
// create a new express app
const app = express();

app.use(express.static('public'));

// route    
app.use('api/auth'.require('./routes/auth'));

//listen for requests
app.listen(process.env.PORT, function(){
    console.log("Server is listening on port 4000");
});