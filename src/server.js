const express = require("express");
const app = express();



app.get ("/", function(req, res){
    res.send("Servidor funcionando!");

});

app.get ("/despesas", function(req, res){
    res.sendFile(__dirname + "");
});

app.get ("/contatos", function(req, res){
    res.send("Entre em contato pelo E-mail:");
});


const PORT = 3000;
app.listen(3000, function(){
    console.log("Servidor on em porta 3000")
})