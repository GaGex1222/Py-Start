import { app } from "../fireBaseConfig";
import { getFirestore, collection, getDocs, query, where, addDoc, updateDoc, doc, Firestore, getDoc } from 'firebase/firestore';
import bcrypt from "bcryptjs"
import { comparePasswords } from "./validationFunctionsl";
const db: Firestore = getFirestore(app);
const usersCollection = collection(db, 'users')

export const addUser = async (email: string, username: string, password: string) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const data = {
            email: email,
            username: username,
            password: hashedPassword
        }
        await addDoc(usersCollection, data)
    } catch (error){
        console.error("")
    }
}

export const checkUserExistence = async (email: string, username: string) => {
    const emailQuery = query(usersCollection, where("email", "==", email));
    const usernameQuery = query(usersCollection, where("username", "==", username));
    try{
        const emailResult = await getDocs(emailQuery);
        const usernameResult = await getDocs(usernameQuery);
        if(!emailResult.empty){
            return "Email already exists!"
        }

        if(!usernameResult.empty){
            return "Username already exists!"
        }

        return ""
    } catch(error){
        console.error("couldn't fetch documents in check user existence", error)
    }
}

export const validateUserCredentials = async (email: string, password: string) => {
    try{
        const userQuery = query(usersCollection, where("email", "==", email));
        const userDoc = await getDocs(userQuery)
        
        if(userDoc.empty){
            return { success: false, message: "User not found" };
        }

        const userPassword = userDoc.docs[0].data().password
        if(comparePasswords(password, userPassword)){
            return { success: true, message: "Login successful" };
        } else {
            return { success: false, message: "Incorrect password" };
        }

    } catch (exp){
        console.error(exp)
        return { success: false, message: "An error occurred during validation" };
    }
}
