import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brilliant-speculoos-06b7a9.netlify.app//api',
});

export default api;