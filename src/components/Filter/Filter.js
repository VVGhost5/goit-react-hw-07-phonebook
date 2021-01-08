import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import appActions from "../../redux/app/app-actions";
import { connect } from "react-redux";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        placeholder="Find contact"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

const mapStateToProps = ({ filter }) => ({
  value: filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(appActions.filterContacts(e.target.value)),
});

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
