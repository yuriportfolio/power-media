import axios from "axios";
import nookies from 'nookies'

const api = axios.create({
  baseURL: "https://api.openai.com",
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${nookies.get(null).pwm_token_openai}`
  },
});

export default api;
