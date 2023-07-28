import axios from 'axios';

const api = axios.create({
  baseURL: 'https://9p3apmrmqc.execute-api.eu-north-1.amazonaws.com',
});

export default api;