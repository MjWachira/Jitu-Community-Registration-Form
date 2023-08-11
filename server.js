const express = require('express');
const { regrouter } = require('./Routes/registrationRoutes');


const app = express()

app.use(express.json())
app.use('/register',regrouter)


app.use((err, req, res, next)=>{
    res.json({error:err})
})


app.listen('4200',()=>{
    console.log('server running on port 4200');
})