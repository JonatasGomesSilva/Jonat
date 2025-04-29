const express = require("express");
const app = express();



app.get ("/", function(req, res){
    res.send("oi!");

});

app.get ("/sobre", function(req, res){
    res.send("Bem-vindos a minha página !");
});

app.get ("/contatos", function(req, res){
    res.send("Entre em contato pelo E-mail:");
});


const PORT = 9191;
app.listen(9091, function(){
    console.log("Servidor on em porta 9091")
})