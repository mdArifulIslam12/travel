import axios from "axios";

const fetcher = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'https://independent-server.onrender.com',
});

export default fetcher