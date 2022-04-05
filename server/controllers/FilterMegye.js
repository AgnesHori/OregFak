const mysql =require('mysql')
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)


const getFilterMegye=(req,res)=>{
    db.query(`SELECT m.id, m.nev from megyek m`, [req.query.id],(err,results)=>{
    if(err)
        console.log(err)
    else
        res.status(200).send(results)
    })
}


module.exports={getFilterMegye}
