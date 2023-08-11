const{Router}=require('express');
const { registerNewUser } = require('../Controllers/registrationController');

const regrouter = Router();

regrouter.post('/',registerNewUser)

module.exports={
    regrouter
}

