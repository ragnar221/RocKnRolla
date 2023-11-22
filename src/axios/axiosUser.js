import axios from "axios"
import { BASE_URL } from "../../utils/constants"

export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}auth/register`, {
            nombre,
            email,
            password
        },
        {
            headers: {
                "Content-Type": "application.json",
                'Access-Control-Allow-origin':'*',
                'Access-control-allow-methods':'get, post, put, patch, delete, options',
                "access-control-allow-credentials": true
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return alert(error.response.data.errors[0].msg); 
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}auth/login`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg);
    }
}