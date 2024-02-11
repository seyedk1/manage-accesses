import axios from "axios";
const SERVER_URL = "http://localhost:9000";

// @desc get all panels
// @route GET http://localhost:9000/products
export const getAllPanels = () => {
  const url = `${SERVER_URL}/products`;
  return axios.get(url);
};

// @desc get categories
// @route GET http://localhost:9000/categoriesTree
export const getAllCategories = () => {
  const url = `${SERVER_URL}/categoriesTree`;
  return axios.get(url);
};

// @desc get actions
// @route GET http://localhost:9000/actions
export const getAllActions = () => {
  const url = `${SERVER_URL}/actions`;
  return axios.get(url);
};

// @desc add role to database
// @route POST http://localhost:9000/addRolePaylod
export const addRoleToDb = (data) => {
  const url = `${SERVER_URL}/addRolePaylod`;
  return axios.post(url, data);
};
