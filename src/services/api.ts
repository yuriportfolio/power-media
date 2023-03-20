import axios from "axios";

const CHATGPT_KEY = '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'

const api = axios.create({
  baseURL: "https://api.openai.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CHATGPT_KEY}`
  },
});

export default api;
