import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import Notification from "./components/Notification/Notification";
import store from "./redux/store";
import { connect } from "react-redux";

const App = function ({ contacts }) {
  return (
    <div className="container">
      <Form />
      {contacts.length ? <Contacts /> : <Notification />}
      <Filter />
    </div>
  );
};

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts,
});

export default connect(mapStateToProps)(App);
