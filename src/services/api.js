// api.js

import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (username, password) => {
  try {
    const response = await api.post("/auth/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed");
  }
};