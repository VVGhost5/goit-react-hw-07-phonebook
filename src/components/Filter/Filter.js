import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { filterContacts } from "../../redux/app/app-actions";
import { connect } from "react-redux";
import appSelectors from "../../redux/app//app-selectors";

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

const mapStateToProps = (state) => ({
  value: appSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(filterContacts(e.target.value)),
});

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
