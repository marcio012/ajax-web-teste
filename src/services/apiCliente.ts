import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080'
})

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export { api, config };
