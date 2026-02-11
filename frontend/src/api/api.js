import axios from "axios";

const api = axios.create({
  baseURL: "https://fi-1-26wd.onrender.com",
  withCredentials: true,
});

export default api;
