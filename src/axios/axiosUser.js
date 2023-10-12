import axios from "axios"
import { BASE_URL } from "../../utils/constants"

export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, {
            nombre,
            email,
            password
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return alert(error.response.data.errors[0].msg)
        
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg);
    }
}