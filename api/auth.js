// src/api/auth.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8082/api/v1', // Use http if self-signed certs cause issues
  withCredentials: true,
});

// Load default credentials from .env
const DEFAULT_CREDENTIALS = {
  username: process.env.REACT_APP_DEFAULT_USERNAME,
  password: process.env.REACT_APP_DEFAULT_PASSWORD,
};

// Log in with passed credentials or fallback to .env
export const login = async (credentials = DEFAULT_CREDENTIALS) => {
  try {
    const response = await API.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

// Verify 2FA token
export const verify2FA = async (token, data) => {
  try {
    const response = await API.post('/auth/verify-2fa', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: '2FA verification failed' };
  }
};

// Get current session info
export const getSessionInfo = async (token) => {
  try {
    const response = await API.get('/auth/session-info', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Session fetch failed' };
  }
};
