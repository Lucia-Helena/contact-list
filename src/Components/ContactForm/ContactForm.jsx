import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../Features/contacts/ContactSlice";
import { Button, Form, Input } from "./ContactFormStyled";

const ContactForm = ({ existingContact, onCancel }) => {
  const [name, setName] = React.useState(existingContact?.name || "");
  const [email, setEmail] = React.useState(existingContact?.email || "");
  const [phone, setPhone] = React.useState(existingContact?.phone || "");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (existingContact) {
      dispatch(editContact({ id: existingContact.id, name, email, phone }));
    } else {
      dispatch(addContact({ id: Date.now(), name, email, phone }));
    }
    setName("");
    setEmail("");
    setPhone("");
  }

  if (editContact === null) return null;
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome Completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="luciahproenca@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="+5521967845687"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">
        {existingContact ? "Editar Contato" : "Adicionar Contato"}
      </Button>
      {onCancel && <Button onClick={onCancel}>Cancelar</Button>}
    </Form>
  );
};

ContactForm.propTypes = {
  existingContact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  onCancel: PropTypes.func,
};

export default ContactForm;