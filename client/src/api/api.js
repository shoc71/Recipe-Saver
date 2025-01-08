import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// User APIs
export const registerUser = async (user) => axios.post(`${API_URL}/register`, user);
export const loginUser = async (user) => axios.post(`${API_URL}/login`, user);

// Recipe APIs
export const getUserRecipes = async (userId) => axios.get(`${API_URL}/users/${userId}/recipes`);
export const addRecipe = async (userId, recipe) =>
  axios.post(`${API_URL}/users/${userId}/recipes`, recipe);

// Grocery APIs
export const getUserGroceries = async (userId) => axios.get(`${API_URL}/users/${userId}/groceries`);
export const addGrocery = async (userId, grocery) =>
  axios.post(`${API_URL}/users/${userId}/groceries`, grocery);
