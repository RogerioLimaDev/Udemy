const express = require("express")
const app = express()
app.listen(3001,()=>{
    console.log("Servidos ON na porta 3001")
})
app.set('view engine','ejs')

module.exports = app
