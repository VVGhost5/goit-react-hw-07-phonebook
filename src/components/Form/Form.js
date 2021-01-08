import React, { useState } from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";
import appActions from "../../redux/app/app-actions";
import { connect } from "react-redux";

const Form = function ({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div>
      <h2 className={styles.title}>Phonebook</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Enter the name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="text"
            name="number"
            placeholder="Enter the phone number"
            value={number}
            onChange={({ target }) => setNumber(target.value)}
          />
        </label>
        <button className={styles.button} onSubmit={handleSubmit}>
          Add contact
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(appActions.addContact({ name, number })),
});

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      contactName: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
