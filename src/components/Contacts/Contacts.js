import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/Phonebook/phonebook-operations";
import { fetchContacts } from "../../redux/Phonebook/phonebook-operations";
import {
  getLoading,
  getVisibleContacts,
} from "../../redux/Phonebook/phonebook-selectors";
import PropTypes from "prop-types";
import styles from "./Contacts.module.css";
import { Button } from "@material-ui/core";

const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={styles.contacts}>
      {contacts.map((contact) => (
        <li className={styles.contacts_item} key={contact.id}>
          {contact.name + " : " + contact.number}
          {
            <div>
              <Button
                type="button"
                variant="outlined"
                color="primary"
                name="delete"
                onClick={() => {
                  onRemoveContact(contact.id);
                }}
              >
                delete
              </Button>
            </div>
          }
        </li>
      ))}
    </ul>
  );
};

Contacts.prototype = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state),
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (id) => dispatch(deleteContact(id)),
  onfetchContacts: () => dispatch(fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
