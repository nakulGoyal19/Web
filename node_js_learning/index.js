const express = require('express');
var app = express();

//app.listen starts instant of node and make them listen on specific code
//create a server.
app.listen(8082,function(){
    console.log('The node app is listening at port 8082')
})