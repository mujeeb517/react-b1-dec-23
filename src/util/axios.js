import axios from 'axios';

const getInstance = () => {
    const headers = {};

    const token = localStorage.getItem('token');
    if (token) {
        headers.authorization = `Bearer ${token}`;
    }

    const instance = axios.create({
        baseURL: 'https://products-api-0pc7.onrender.com',
        headers
    });

    return instance;
};


export default getInstance;