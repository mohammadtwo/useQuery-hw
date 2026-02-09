import axios  from "axios"
const baseUrl=import.meta.env.BASE_URL
export const htpp = axios.create(
  {  baseURL:baseUrl,
    timeout:1000
  }
)