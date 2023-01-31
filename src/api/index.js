import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://independent-server.onrender.com',
  });

  export default fetcher