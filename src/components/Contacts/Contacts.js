import React from "react";
import styles from "./Contacts.module.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import appOperations from "../../redux/app/app-operations";
import appSelectors from "../../redux/app/app-selectors";
import { connect } from "react-redux";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map((el) => (
          <li className={styles.item} key={uuidv4()}>
            {`${el.contactName}: ${el.number}`}
            <button
              className={styles.button}
              onClick={() => {
                onDelete(el.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: appSelectors.getVisibleContacts(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(appOperations.deleteContact(id)),
});

Contacts.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      contactName: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
