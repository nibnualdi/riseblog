import axios from "axios"

const axiosInstance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1',
  headers: {'app-id': process.env.VUE_APP_DUMMY_API_KEY }
});

export { axiosInstance }