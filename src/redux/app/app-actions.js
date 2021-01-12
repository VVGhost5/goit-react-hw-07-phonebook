import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("app.fetchContactRequest");
export const fetchContactSuccess = createAction("app.fetchContactSuccess");
export const fetchContactError = createAction("app.fetchContactError");

export const addContactRequest = createAction("app.addContactRequest");
export const addContactSuccess = createAction("app/addContactSuccess");
export const addContactError = createAction("app/addContactError");

export const deleteContactRequest = createAction("app/deleteContactRequest");
export const deleteContactSuccess = createAction("app/deleteContactSuccess");
export const deleteContactError = createAction("app/deleteContactError");

export const filterContacts = createAction("app/FilterContacts");
