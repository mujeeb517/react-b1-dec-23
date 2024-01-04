import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://products-api-0pc7.onrender.com'
});

export default instance;
