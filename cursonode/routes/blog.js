
module.exports = (app)=>{
    app.get('/blog',(req, res)=>{
        const mysql = require('mysql')
        const connection = mysql.createConnection({
            host : 'mysql.rogeriolima.me',
            user: 'rogeriolim_add1',
            password: 'Anakarine123',
            database: 'usuarios'
        })

        connection.query('select * from usuarios',(error, result)=>{
            if(error){
                console.log(error)
            }else
            {
                console.log(result)
                res.send(result)
            }
        })
    })
}
 