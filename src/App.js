import React, { useEffect } from "react";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import Notification from "./components/Notification/Notification";
import { connect } from "react-redux";
import appOperations from "./redux/app/app-operations";
import appSelectors from "./redux/app/app-selectors";

const App = function ({ contacts, isLoading, fetchContacts }) {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <Form />
      {contacts.length ? <Contacts /> : <Notification />}
      <Filter />
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: appSelectors.getContacts(state),
  isLoading: appSelectors.getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(appOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
