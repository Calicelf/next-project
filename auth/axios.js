import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json"
    }
})

export default api;