import { app } from "../fireBaseConfig";
import { getFirestore, collection, getDocs, query, where, addDoc, updateDoc, doc, Firestore } from 'firebase/firestore';


const db: Firestore = getFirestore(app);
const usersCollection = collection(db, 'users')
export const addUser = async (email: string, username: string, password: string) => {
    try{
        const data = {
            email: email,
            username: username,
            password: password
        }
        const docAdded = await addDoc(usersCollection, data)
        console.log(docAdded)
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
        console.log(emailResult)
        console.log(usernameResult.empty)
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

