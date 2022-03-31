const express = require('express');
// create a new express app
const app = express();

// route    
app.get('/', function(req, res){
    res.send("Hello World");
});

//listen for requests
app.listen(4000, function(){
    console.log("Server is listening on port 4000");
});