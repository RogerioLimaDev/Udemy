const express = require("express")
const app = express()
app.listen(3001,()=>{
    console.log("Servidos ON na porta 3001")
})

app.set('view engine','ejs')
app.get('/', (req, res)=>{
    res.send("<html><body><h1>Desenvolvedor curioso da porra</h1></body></html>")
})
app.get('/aboutme', (req, res)=>{
    res.render("home", req.query)
})


