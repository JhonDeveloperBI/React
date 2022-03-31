const express = require('express');
require('dotenv').config();
// create a new express app
const app = express();

app.use(express.static('public'));

// route    
app.get('/', function(req, res){
    res.send("Hello World");
});

//listen for requests
app.listen(process.env.PORT, function(){
    console.log("Server is listening on port 4000");
});