import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
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
  filterContacts,
} from "./app-actions";

const initialState = { contacts: [], filter: "" };

const contacts = createReducer(initialState.contacts, {
  [addContactSuccess]: (state, { payload }) => {
    const checkedContacts = state.some((el) => el.contactName === payload.name);
    if (checkedContacts) {
      return alert("This contact is already in your contacts");
    }
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload);
  },
  [fetchContactSuccess]: (state, { payload }) => payload,
});

const filter = createReducer(initialState.filter, {
  [filterContacts]: (_, { payload }) => {
    return payload;
  },
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,

  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

export default combineReducers({ contacts, filter, loading });
