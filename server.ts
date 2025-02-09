import { Application, NextFunction, Request, Response } from "express";
import { addUser, checkUserExistence, validateUserCredentials } from "./utils/authFunctions";
import cors from 'cors';
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

const express = require("express")
const app = express()
const PORT: number = 3000
app.use(express.json()); 
app.use(cors());

export const generateJwt = (payload: object) => {

    if (!process.env.EXPO_PUBLIC_JWT_SECRET_KEY) {
        throw new Error('JWT secret key is not defined in the environment variables');
    }

    const token = jwt.sign(payload, process.env.EXPO_PUBLIC_JWT_SECRET_KEY as string, {expiresIn: '5m'})
    return token
}


app.post('/add-user', async (req: Request, res: Response) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({error: 'Missing required fields' });
    }

    const isUser = await checkUserExistence(email, username)
    if(isUser){
        return res.status(400).json({errorMessage: 'Username or email already exist!' });
    }

    try{     
        const payload: JwtPayload = {
            email: email,
            username: username
        }
        const token = generateJwt(payload)
        await addUser(email, username, password)
        return res.status(200).json({message: "Successfully registered!", token: token , userData: payload})
    } catch(exp){
        console.error(exp)
        return res.status(500).send({error: "Error occured when tried to sign up user!"})
    }
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.post("/validate-user", async (req: Request, res: Response) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({error: 'Missing required fields' });
    }

    const {success, message} = await validateUserCredentials(email, password)
    if(!success){
        return res.status(403).json({errorMessage: message });
    } else {
        return res.status(200).json({message: "Credentials Are Correct!" });
    }
    
})