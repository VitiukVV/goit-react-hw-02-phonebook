import { ContactElem } from 'components/contact-elem/ContactElem';
import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactElem
          key={id}
          id={id}
          name={name}
          number={number}
          DeleteContact={onDeleteContacts}
        ></ContactElem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
