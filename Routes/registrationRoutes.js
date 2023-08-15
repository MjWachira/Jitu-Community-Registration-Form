const{Router}=require('express');
const { registerNewUser, getAllUsers } = require('../Controllers/registrationController');

const regrouter = Router();

regrouter.post('/',registerNewUser)
regrouter.get('/',getAllUsers)

module.exports={
    regrouter
}

