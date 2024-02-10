import axios from "axios";
const SERVER_URL = "http://localhost:9000";

export const generateToken = (username, password) => {
  const token = `${username}${password}_static_token_${Date.now()}`;
  return token;
};
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

// @desc create a contact
// @route POST http://localhost:9000/contacts
export const createContact = (contact) => {
  const url = `${SERVER_URL}/contacts`;
  return axios.post(url, contact);
};

// @desc update a contact
// @route PUT http://localhost:9000/contacts/:contactId
export const updateContact = (contact, contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.put(url, contact);
};

// @desc delete a contact
// @route DELETE http://localhost:9000/contacts/:contactId
export const deleteContact = (contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.delete(url);
};

// @desc get all groups
// @route GET http://localhost:9000/groups
export const getAllGroups = () => {
  const url = `${SERVER_URL}/groups`;
  return axios.get(url);
};

// @desc get a group
// @route GET http://localhost:9000/groups/:groupId
export const getGroup = (groupId) => {
  const url = `${SERVER_URL}/groups/${groupId}`;
  return axios.get(url);
};
