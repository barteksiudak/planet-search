import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export default http;
