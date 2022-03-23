
var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/users",function(req,res){
    res.send("hello")
});

app.get("/books",function(req,res){
    res.json(["ikigai","The shinning","Harry Potter","Rising apes"])
});