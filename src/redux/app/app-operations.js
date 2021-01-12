import { v4 as uuidv4 } from "uuid";
import {
  addContactSuccess,
  addContactError,
  addContactRequest,
  deleteContactSuccess,
  deleteContactError,
  deleteContactRequest,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
} from "./app-actions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)));
};

const addContact = ({ name, number }) => (dispatch) => {
  const contact = {
    id: uuidv4(),
    contactName: name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export default { addContact, deleteContact, fetchContacts };
