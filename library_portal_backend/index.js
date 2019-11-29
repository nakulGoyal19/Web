const express = require("express");
const bodyParser = require("body-parser");
var app = express();

var books = [
    {
        "id": 1,
        "name": "B1",
        "author": "A1",
        "version": "1.1"
      },
      {
        "id": 2,
        "name": "B2",
        "author": "A2",
        "version": "1.1.1"
      },
      {
        "id": 3,
        "name": "B3",
        "author": "A3",
        "version": "1.4"
      }
]

app.use(bodyParser.json());

app.use("*",(req,res,next)=>{
    console.log("middleware is called");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","*");
    res.setHeader("Access-Control-Allow-Headers",
        "Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");
    next();
})
//app.METHODNAME('PATH',handler()=>{})

app.get("",function(req,res){
    console.log(req);
    res.send("Library Portal .");
})

app.get("/bookList",(req,res)=>{
    
    res.send(books);
})

app.post("/addBook",(req,res)=>{
    console.log("Add book method is called");
    books.push(req.body);

    res.send(books);
})

app.delete("/bookList/:id",(req,res)=>{
    console.log("Add book method is called");
    books=books.filter(item=>item.id != req.params.id);
    res.send(books);
})

app.listen(8082, () => {
    console.log("Server is listening at port 8082");
} )