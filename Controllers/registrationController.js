const {v4} = require('uuid');
const mssql = require('mssql');
const { sqlConfig } = require('../Config/config');

const registerNewUser = async(req, res)=>{
    try {
        const id = v4()

        const {fname, email, corhort,graduationdate} = req.body

        const pool = await mssql.connect(sqlConfig)

        const result = await pool.request()
        .input('id', mssql.VarChar, id)
        .input('fname', mssql.VarChar, fname)
        .input('email', mssql.VarChar, email)
        .input('corhort',mssql.VarChar,corhort)
        .input('graduationdate', mssql.VarChar, graduationdate)
        .execute('newUserPROC')
        console.log(result)

        if(result.rowsAffected[0] == 1){
        return res.json({
            message: "User added successfully",
        
        })  
        }else{
            return res.json({message: "creation failed"})
        }   
    } catch(error){
        return res.json({error})
    }
}

module.exports={
    registerNewUser
}