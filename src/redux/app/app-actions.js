import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("app/AddContact", ({ name, number }) => {
  return {
    payload: {
      id: uuidv4(),
      contactName: name,
      number: number,
    },
  };
});

const deleteContact = createAction("app/DeleteContact");

const filterContacts = createAction("app/FilterContacts");

export default {
  addContact,
  deleteContact,
  filterContacts,
};
