import mssql from 'mssql'
import { registerNewUser } from './registrationController'


const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()


}

describe("Registration Controller", ()=>{

    describe("Registering a new user", ()=>{
        it("should register a user succesfully", async()=> {
            const usertId="etd62737366363"
            const newUser={
                fname: "John  Wachira",
                email: "john.wachira@thejitu.com",
                corhort: "17",
                graduationdate: "2023/7/25"
        }
        const req = {
            params:{id:usertId},
            body:newUser
        }
        
        jest.spyOn(mssql, "connect").mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({
                rowsAffected:[1] 
            })

        })
        await registerNewUser(req,res)
        
        expect(res.json).toHaveBeenCalledWith({
                message: "User added successfully"
            })
    
        })
        it("should error if fails to add a user", async()=> {
            const usertId="etd62737366363"
            const newUser={
                fname: "John  Wachira",
                email: "john.wachira@thejitu.com",
                corhort: "17",
                graduationdate: "2023/7/25"
        }
        const req = {
            params:{id:usertId},
            body:newUser
        }
        
        jest.spyOn(mssql, "connect").mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({
                rowsAffected:[0] 
            })

        })
        await registerNewUser(req,res)
        
        expect(res.json).toHaveBeenCalledWith({
                message: "user not registered"
            })
    
        })
    })

})