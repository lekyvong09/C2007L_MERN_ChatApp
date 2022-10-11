import axios from 'axios';


export const login = async (data) => {
    try {
        return await axios.post('http://localhost:8080/api/auth/login', data);
    } catch (exception) {
        return {
            error: true,
            exception: exception
        }
    }
}

export const register = async (data) => {
    try {
        return await axios.post('http://localhost:8080/api/auth/register', data);
    } catch (exception) {
        return {
            error: true,
            exception: exception
        }
    }
}