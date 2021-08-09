import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./phonebook-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:4040";

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)));
};

export const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = {
      name,
      number,
    };
    dispatch(addContactRequest());
    axios
      .post("/contacts", contact)
      .then(({ data }) => {
        dispatch(addContactSuccess(data));
        console.log(data);
      })
      .catch((error) => dispatch(addContactError(error)));
  };

// export const deleteContact = (id) => (dispatch) => {
//   dispatch(deleteContactRequest());
//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch((error) => dispatch(deleteContactError(error)));
// };

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
