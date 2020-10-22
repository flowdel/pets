import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://iparts.kameas.ru/',
});

export default instance;