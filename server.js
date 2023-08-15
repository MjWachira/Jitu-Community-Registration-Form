const express = require('express');
const { regrouter } = require('./Routes/registrationRoutes');
const cors = require('cors')
// const bodyParser = require("body-parser");

const app = express()
// const corsOption={
//     origin:'*',
//     optionSuccessStatus:200,
// }
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use('/register',regrouter)

// app.get("/", (req, res) => {

//     console.log(req.url);
  
//     // res.json({Error: err})
  
//   });
  
   
app.use((err, req, res, next)=>{
    res.json({error:err})
})


app.listen('4200',()=>{
    console.log('server running on port 4200');
})