import axios from 'axios';


export const login = async (data) => {
    try {
        return await axios.post('auth/login', data);
    } catch (exception) {
        return {
            error: true,
            exception: exception
        }
    }
}

export const register = async (data) => {
    try {
        return await axios.post('auth/register', data);
    } catch (exception) {
        return {
            error: true,
            exception: exception
        }
    }
}