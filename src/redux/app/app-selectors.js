import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts;
const getFilter = (state) => state.filter;
const getIsLoading = (state) => state.loading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((el) =>
      el.contactName.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getContacts,
  getIsLoading,
  getFilter,
  getVisibleContacts,
};
