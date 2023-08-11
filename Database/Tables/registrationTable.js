const mssql = require('mssql')
const { sqlConfig } = require('../../Config/config')

const createRegistrationTable = async (res,req)=>{
    try{
        const table = 
        `
        BEGIN
        TRY 
            CREATE TABLE registrationTable(
                id VARCHAR(200) PRIMARY KEY,
                fname VARCHAR(500) NOT NULL,
                email VARCHAR(200) NOT NULL,
                corhort VARCHAR(100) NOT NULL,
                graduationdate DATE NOT NULL
            )
        END TRY
    BEGIN 
        CATCH 
            THROW 50001,'Table already exists!',1;
        END CATCH
        `;

        const pool = await mssql.connect(sqlConfig)

        await pool.query(table, (err)=>{
            if(err instanceof mssql.RequestError){
                console.log({Error:err.message});

            }else{
                console.log('Table created successfully');
            }
        })
    }catch(error){
        return res({error})
    }
}


module.exports={
    createRegistrationTable
}