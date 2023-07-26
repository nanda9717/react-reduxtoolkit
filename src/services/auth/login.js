import axios from "axios";

const API_BASE_URL =  'https://jsonplaceholder.typicode.com/posts';

export const userLogin = async({email, password}) =>{
    if(email === 'nane@yopmail.com' && password === '123456'){
        return { status: true, data: {id:1, name: 'Nane Singh', email: 'nane@yopmail.com'}}
    }else{
        return { status: false, data: {} }
    }
}