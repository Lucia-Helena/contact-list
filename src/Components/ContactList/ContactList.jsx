import React from "react";
import ContactForm from "../ContactForm/ContactForm";

import { useDispatch, useSelector } from "react-redux";
import { editContact, removeContact } from "../../Features/contacts/ContactSlice";

import { Button, List, ListItem } from "./ContactListStyled";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [editingContact, setEditingContact] = React.useState(null);

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const handleDelete = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <>
      {editingContact ? (
        <ContactForm
          existingContact={editContact}
          onCancel={() => setEditingContact(null)}
        />
      ) : (
        <ContactForm />
      )}
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <div>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </div>
            <div>
              <Button onClick={() => handleEdit(contact)}>Editar</Button>
              <Button onClick={() => handleDelete(contact.id)}>Remover</Button>
            </div>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ContactList;