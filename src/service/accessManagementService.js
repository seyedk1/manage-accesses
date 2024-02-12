import axios from "axios";

// @desc get all panels
// @route GET http://localhost:9000/products
export const getAllPanels = async () => {
  return await axios({
    url: "products",
    method: "GET",
  });
};

// @desc get categories
// @route GET http://localhost:9000/categoriesTree
export const getAllCategories = async () => {
  return await axios({
    url: "categoriesTree",
    method: "GET",
  });
};

// @desc get actions
// @route GET http://localhost:9000/actions
export const getAllActions = async () => {
  return await axios({
    url: "actions",
    method: "GET",
  });
};

// @desc add role to database
// @route POST http://localhost:9000/addRolePaylod
export const addRoleToDb = async (data) => {
  return await axios({
    url: "addRolePaylod",
    method: "POST",
    data,
  });
};
