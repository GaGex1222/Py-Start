import { checkUserExistence } from "./fireBaseFunctions";
function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export function validateSignUp(email: string, password: string, username: string){
    if (!email || !username || !password) {
        return "All fields required!"
    }

    if(!validateEmail(email)){
        return "Email is invalid, please try again!"
    }

    if(password.length <= 8){
        return "Password has to be longer than 8 characters!"
    }

    if(username.length <= 4){
        return "Username has to be longer than 4 characters!"
    }

    return ''
}