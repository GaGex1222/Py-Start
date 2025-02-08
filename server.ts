import { Application, Request, Response } from "express";
import { addUser, checkUserExistence } from "./utils/fireBaseFunctions";
import cors from 'cors';


const express = require("express")
const app = express()
const PORT: number = 3000
app.use(express.json()); 
app.use(cors());
app.get('/', async (req: Request, res: Response) => {
    return res.json({gal: "Hi"})
})
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
        await addUser(email, username, password)
        return res.status(200).json({message: "Successfully registered!"})
    } catch(exp){
        console.error(exp)
        return res.status(500).send({error: "Error occured when tried to sign up user!"})
    }
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });