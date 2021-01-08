import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./app-actions";

const initialState = { contacts: [], filter: "" };

const contacts = createReducer(initialState.contacts, {
  [actions.addContact]: (state, { payload }) => {
    const checkedContacts = state.some((el) => el.contactName === payload.name);
    if (checkedContacts) {
      return alert("This contact is already in your contacts");
    }
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload);
  },
});

const filter = createReducer(initialState.filter, {
  [actions.filterContacts]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({ contacts, filter });
