
module.exports = (app)=>{
    app.get('/aboutme', (req, res)=>{
        res.render("home/home", req.query)
    })
}





