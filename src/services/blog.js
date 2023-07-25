import axios from "axios";

const API_BASE_URL =  'https://jsonplaceholder.typicode.com/posts';

export const getBlogsList = async() =>{
    const response = await axios.get(`${API_BASE_URL}?userId=1`);
    if(response.status === 200){
        return response.data;
    }else{
        return [];
    }
}