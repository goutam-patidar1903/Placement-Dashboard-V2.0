import axios from 'axios';

const API = axios.create({
    baseURL:"https://placement-dashboard-v2-0.vercel.app/"
});

export default API;