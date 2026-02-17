import axios  from "axios"
const baseUrl = import.meta.env.VITE_BASE_URL;

export const http = axios.create(
  {  baseURL:baseUrl,
    timeout:5000
  }
)