import axios  from "axios"
const baseUrl = import.meta.env.vite_BASE_URL;
export const http = axios.create(
  {  baseURL:baseUrl,
    timeout:5000
  }
)