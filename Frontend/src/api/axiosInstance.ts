import axios from "axios";



export const axiosInstanceUser = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_USERS || "http://localhost:5500/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstanceContent = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL_CONTENT || "http://localhost:5500/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

