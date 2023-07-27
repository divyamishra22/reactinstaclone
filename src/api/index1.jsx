import axios from 'axios';

const api = axios.create({
  baseURL: 'https://instafinal-hdic.onrender.com/',
});

export default api;